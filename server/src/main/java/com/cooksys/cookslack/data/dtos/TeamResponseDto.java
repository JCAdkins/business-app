package com.cooksys.cookslack.data.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class TeamResponseDto {
    private Long id;
    private String name;
    private String description;
    private CompanyResponseDto company;
}
