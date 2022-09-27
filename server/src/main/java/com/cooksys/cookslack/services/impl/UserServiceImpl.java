package com.cooksys.cookslack.services.impl;

import com.cooksys.cookslack.data.dtos.UserRequestDto;
import com.cooksys.cookslack.data.dtos.UserResponseDto;
import com.cooksys.cookslack.data.model.entities.Team;
import com.cooksys.cookslack.data.model.exceptions.BadRequestException;
import com.cooksys.cookslack.data.model.exceptions.NotFoundException;
import com.cooksys.cookslack.data.repositories.TeamRepository;
import com.cooksys.cookslack.services.ValidationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.cooksys.cookslack.services.UserService;
import com.cooksys.cookslack.data.repositories.UserRepository;
import com.cooksys.cookslack.data.mappers.UserMapper;
import com.cooksys.cookslack.data.model.entities.User;
import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final ValidationService validationService;
    private final TeamRepository teamRepository;

    //==================================================================
    // =================== GET ENDPOINTS ===============================
    //==================================================================

    @Override
    public List<UserResponseDto> getAllUsers() {
        // Get a list of all users and remove the ones that have been deleted
        List<User> users = userRepository.findAll();
        users.removeIf(User::getDeleted);
        return userMapper.entitiesToResponseDtos(users);
    }

    @Override
    public UserResponseDto getUserByUsername(String username) {
        User user = checkIfUserExistsThenGet(username);
        return userMapper.entityToResponseDto(user);
    }

    @Override
    public List<UserResponseDto> getAllUsersByTeam(long teamID) {
        Team team = checkIfTeamExistsThenGet(teamID);
        List<User> userList = userRepository.findAllByTeamAndDeletedFalse(team);
        return userMapper.entitiesToResponseDtos(userList);
    }


    //==================================================================
    // =================== POST ENDPOINTS ==============================
    //==================================================================

    @Override
    public UserResponseDto createNewUser(UserRequestDto userRequestDto) {
        // Verify new user request is formatted properly
        if (!validationService.newUserValidate(userRequestDto))
            throw new BadRequestException("Error: Something went terribly wrong.");

        // Create new user and save to database
        User newUser = initNewUser(userRequestDto);
        userRepository.saveAndFlush(newUser);

        // Transform UserRequestDto into UserResponseDto and return
        return userMapper.entityToResponseDto(userMapper.requestDtoToEntity(userRequestDto));
    }


    //==================================================================
    // =================== PATCH ENDPOINTS =============================
    //==================================================================


    //==================================================================
    // =================== DELETE ENDPOINTS ============================
    //==================================================================

    @Override
    public UserResponseDto deleteUser(String username) {
        User user = checkIfUserExistsThenGet(username);

        // Update and save user
        user.setDeleted(true);
        user.setActive(false);
        userRepository.saveAndFlush(user);

        return userMapper.entityToResponseDto(user);
    }


    // =================== HELPER METHODS ============================

    /**
     *         Method checks to see if we get a user back from the database
     *         If we don't then a NotFoundException is thrown, otherwise
     *         the user is returned.
     *
     * @param username Username to be validated exists
     * @return User
     */
    private User checkIfUserExistsThenGet(String username) {
        Optional<User> optionalUser = userRepository.findByCredentialsUsernameAndDeletedFalse(username);
        if (optionalUser.isEmpty())
            throw new NotFoundException("Error: User not found.");
        return optionalUser.get();
    }

    /**
     *      Method to check if a team exists and if it does return that team.
     * @param teamID The team ID we wish to check and grab.
     * @return  Team returns the team associated with the id
     */
    private Team checkIfTeamExistsThenGet(long teamID) {
        Optional<Team> optionalTeam = teamRepository.findById(teamID);
        if (optionalTeam.isEmpty())
            throw new NotFoundException("Error: Team not found.");
        return optionalTeam.get();
    }

    /**
     *      Method initializes a new user with what's in the UserRequestDto
     *      as well as setting active=true, team=null and company=null.
     * @param userRequestDto The UserRequestDto we are transforming into a new user
     * @return User The newly created user.
     */
    private User initNewUser(UserRequestDto userRequestDto){
        User newUser = userMapper.requestDtoToEntity(userRequestDto);
        newUser.setActive(true);
        newUser.setTeam(null);
        newUser.setCompany(null);
        return newUser;
    }


}