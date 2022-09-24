package com.cooksys.cookslack.data.mappers;

import com.cooksys.cookslack.data.dtos.AnnouncementRequestDto;
import com.cooksys.cookslack.data.dtos.AnnouncementResponseDto;
import com.cooksys.cookslack.data.model.entities.Announcement;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface AnnouncementMapper {

    Announcement requestDtoToEntity(AnnouncementRequestDto announcementRequestDto);

    AnnouncementResponseDto entityToResponseDto(Announcement announcement);

    List<AnnouncementResponseDto> entitiesToResponseDtos(List<Announcement> announcements);

}
