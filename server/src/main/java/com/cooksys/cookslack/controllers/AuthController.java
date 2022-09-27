package com.cooksys.cookslack.controllers;

import com.cooksys.cookslack.data.dtos.CredentialsRequestDto;
import com.cooksys.cookslack.data.dtos.CredentialsResponseDto;
import com.cooksys.cookslack.data.dtos.UserResponseDto;
import com.cooksys.cookslack.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    @GetMapping("/ping")
    public String healthCheck() {
        return authService.healthCheck();
    }

    @GetMapping("/login")
    public UserResponseDto login(@RequestBody CredentialsRequestDto credentialsRequestDto) {
        return authService.login(credentialsRequestDto);
    }

    @GetMapping("/admin")
    public boolean checkAdmin(@RequestBody CredentialsRequestDto credentialsRequestDto) {
        return authService.checkAdmin(credentialsRequestDto);
    }
}