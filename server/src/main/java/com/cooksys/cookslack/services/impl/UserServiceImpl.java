package com.cooksys.cookslack.services.impl;

import com.cooksys.cookslack.data.dtos.UserResponseDto;
import com.cooksys.cookslack.data.model.exceptions.NotFoundException;
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
    private UserRepository userRepository;
    private UserMapper userMapper;

    //==================================================================
    // =================== GET ENDPOINTS ===============================
    //==================================================================

    @Override
    public List<UserResponseDto> getAllUsers() {
        // Get a list of all users and remove the ones no long active
        List<User> users = userRepository.findAll();
        users.removeIf(User::getDeleted);
        return userMapper.entitiesToResponseDtos(users);
    }

    @Override
    public UserResponseDto getUserByUsername(String username) {
        User user = checkIfUserExistsThenGet(username);
        return userMapper.entityToResponseDto(user);
    }


    //==================================================================
    // =================== PATCH ENDPOINTS =============================
    //==================================================================


    //==================================================================
    // =================== DELETE ENDPOINTS ============================
    //==================================================================



    // =================== HELPER METHODS ============================

    /**
     *         Method checks to see if we get a user back from the database
     *         If we don't then a NotFoundException is thrown, otherwise
     *         the user is returned.
     * @param username Username to be validated exists
     * @return User
     */
    private User checkIfUserExistsThenGet(String username) {
        Optional<User> optionalUser = userRepository.findByCredentialsUsernameAndDeletedFalse(username);
        if (optionalUser.isEmpty())
            throw new NotFoundException("Error: User not found.");
        return optionalUser.get();
    }


}