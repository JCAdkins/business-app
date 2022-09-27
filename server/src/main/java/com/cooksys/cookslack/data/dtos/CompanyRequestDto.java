package com.cooksys.cookslack.data.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@Data
public class CompanyRequestDto {
    @NotBlank
    @NonNull
    private String name;
    @NotBlank
    @NonNull
    private String description;
//    @NonNull
//    private CredentialsRequestDto credentials;
}
