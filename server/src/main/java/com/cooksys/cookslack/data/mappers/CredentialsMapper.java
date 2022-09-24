package com.cooksys.cookslack.data.mappers;

import com.cooksys.cookslack.data.dtos.CredentialsRequestDto;
import com.cooksys.cookslack.data.model.entities.embeds.Credentials;
import org.mapstruct.Mapper;

@Mapper
public interface CredentialsMapper {
    Credentials requestDtoToEntity(CredentialsRequestDto credentialsRequestDto);
}
