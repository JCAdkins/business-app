package com.cooksys.cookslack.services;

import com.cooksys.cookslack.data.dtos.UserResponseDto;
import java.util.List;

public interface UserService {

    List<UserResponseDto> getAllUsers();
}