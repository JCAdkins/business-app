package com.cooksys.cookslack.controllers;
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

    //==================================================================
    // =================== GET ENDPOINTS ===============================
    //==================================================================

    @GetMapping
    public List<UserResponseDto> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/users/{username}")
    public UserResponseDto getUserByUsername(@PathVariable String username){
        return userService.getUserByUsername(username);
    }

}