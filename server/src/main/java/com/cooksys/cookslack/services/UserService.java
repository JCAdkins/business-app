package com.cooksys.cookslack.services;

import com.cooksys.cookslack.data.dtos.UserRequestDto;
import com.cooksys.cookslack.data.dtos.UserResponseDto;
import java.util.List;


public interface UserService {

    List<UserResponseDto> getAllUsers();

    UserResponseDto getUserByUsername(String username);

    UserResponseDto createNewUser(UserRequestDto userToCreate);

    UserResponseDto deleteUser(String username);

    List<UserResponseDto> getAllUsersByTeam(long teamID);
}