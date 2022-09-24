package com.cooksys.cookslack.data.mappers;

import com.cooksys.cookslack.data.dtos.UserRequestDto;
import com.cooksys.cookslack.data.dtos.UserResponseDto;
import com.cooksys.cookslack.data.model.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper
public interface UserMapper {
    User requestDtoToEntity(UserRequestDto userRequestDto);

    /**
     * @param user
     * @return <code>UserResponseDto</code>. <code>Credentials</code> only contains <code>username</code>, <code>password</code> is removed on the response.
     */
    @Mapping(target = "username", source = "credentials.username")
    UserResponseDto entityToResponseDto(User user);

    List<UserResponseDto> entitiesToResponseDtos(List<User> users);
}
