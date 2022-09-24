package com.cooksys.cookslack.data.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.sql.Timestamp;

@NoArgsConstructor
@Data
public class AnnouncementResponseDto {
    private Long id;
    private Timestamp date;
    private String title;
    private String message;
    private CompanyResponseDto company;
    private UserResponseDto author;
}
