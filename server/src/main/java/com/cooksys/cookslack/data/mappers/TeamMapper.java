package com.cooksys.cookslack.data.mappers;

import com.cooksys.cookslack.data.dtos.TeamRequestDto;
import com.cooksys.cookslack.data.dtos.TeamResponseDto;
import com.cooksys.cookslack.data.model.entities.Team;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface TeamMapper {

    Team requestDtoToEntity(TeamRequestDto teamRequestDto);

    TeamResponseDto entityToResponseDto(Team team);

    List<TeamResponseDto> entitiesToResponseDtos(List<Team> teams);

}
