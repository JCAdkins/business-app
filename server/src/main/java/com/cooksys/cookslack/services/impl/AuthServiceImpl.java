package com.cooksys.cookslack.services.impl;

import com.cooksys.cookslack.data.dtos.CredentialsRequestDto;
import com.cooksys.cookslack.data.dtos.CredentialsResponseDto;
import com.cooksys.cookslack.data.dtos.UserResponseDto;
import com.cooksys.cookslack.data.mappers.CredentialsMapper;
import com.cooksys.cookslack.data.mappers.UserMapper;
import com.cooksys.cookslack.data.model.entities.User;
import com.cooksys.cookslack.data.model.entities.embeds.Credentials;
import com.cooksys.cookslack.data.model.exceptions.NotFoundException;
import com.cooksys.cookslack.data.repositories.UserRepository;
import com.cooksys.cookslack.services.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserMapper userMapper;
    private final CredentialsMapper credentialsMapper;
    private final UserRepository userRepository;

    //******* END POINTS ***********************************************************************

//    @Override
//    public UserResponseDto login(CredentialsRequestDto credentialsRequestDto){
//        Credentials userToFind = credentialsMapper.requestDtoToEntity(credentialsRequestDto);
//        Optional<User> optionalUser = userRepository.findByCredentialsUsernameAndDeletedFalse(userToFind.getUsername())
//        if(optionalUser.isEmpty()) {
//            throw new NotFoundException()
//        }
//
//        return userMapper.entityToResponseDto(credentialsRequestDto);
//    }

    @Override
    public CredentialsResponseDto checkAdmin(CredentialsRequestDto credentialsRequestDto){
        Credentials userToCheck = credentialsMapper.requestDtoToEntity(credentialsRequestDto);
        return credentialsMapper.requestDtoToEntity(userToCheck);
    }

}