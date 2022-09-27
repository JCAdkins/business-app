package com.cooksys.cookslack.controllers;
import com.cooksys.cookslack.data.dtos.UserRequestDto;
import lombok.RequiredArgsConstructor;
import com.cooksys.cookslack.services.UserService;
import com.cooksys.cookslack.data.dtos.UserResponseDto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
    public final UserService userService;

    @GetMapping
    public List<UserResponseDto> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/users/{username}")
    public UserResponseDto getUserByUsername(@PathVariable String username){
        return userService.getUserByUsername(username);
    }

    @GetMapping("/users/team/{teamID")
    public List<UserResponseDto> getAllUsersByTeam(@PathVariable long teamID){
        return userService.getAllUsersByTeam(teamID);
    }

    @PostMapping
    public UserResponseDto createNewUser(@RequestBody UserRequestDto userToCreate) {
        return userService.createNewUser(userToCreate);
    }

    @DeleteMapping("/users/{username}")
    public UserResponseDto deleteUser(@PathVariable String username){
        return userService.deleteUser(username);
    }

}