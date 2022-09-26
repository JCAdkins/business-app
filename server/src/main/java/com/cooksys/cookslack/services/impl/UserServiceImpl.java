package com.cooksys.cookslack.services.impl;

import com.cooksys.cookslack.data.dtos.UserResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.cooksys.cookslack.services.UserService;
import com.cooksys.cookslack.data.repositories.UserRepository;
import com.cooksys.cookslack.data.mappers.UserMapper;
import com.cooksys.cookslack.data.model.entities.User;
import java.util.List;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private UserMapper userMapper;

    @Override
    public List<UserResponseDto> getAllUsers() {
        // Get a list of all users and remove the ones no long active
        List<User> users = userRepository.findAll();
        User user = new User();
        users.removeIf(User::getDeleted);
        return userMapper.entitiesToResponseDtos(users);
    }





}