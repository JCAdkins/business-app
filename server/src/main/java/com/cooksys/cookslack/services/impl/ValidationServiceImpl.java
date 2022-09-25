package com.cooksys.cookslack.services.impl;

import com.cooksys.cookslack.data.dtos.*;
import com.cooksys.cookslack.data.model.entities.Company;
import com.cooksys.cookslack.data.model.entities.Team;
import com.cooksys.cookslack.data.model.exceptions.BadRequestException;
import com.cooksys.cookslack.data.model.exceptions.NotFoundException;
import com.cooksys.cookslack.data.repositories.*;
import com.cooksys.cookslack.services.ValidationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ValidationServiceImpl implements ValidationService {

    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;
    private final TeamRepository teamRepository;
    private final ProjectRepository projectRepository;

    @Override
    public boolean newUserValidate(UserRequestDto user) {
        // Has unique username
        boolean usernameExists = userRepository.
                existsUserByCredentialsUsernameAndDeletedFalse(
                        user.getCredentials().getUsername());
        if (usernameExists)
            throw new BadRequestException(
                    user.getCredentials().getUsername() +
                            " is already taken. Please choose another username to continue.");

        // TODO: Has valid password (constraints?)

        // TODO: Has valid first and last name, (no special characters?)

        // TODO: Has valid email

        // Has unique email
        boolean emailExists = userRepository.existsUserByEmailAndDeletedFalse(user.getEmail());
        if (emailExists)
            throw new BadRequestException(
                    user.getEmail() +
                            " is already in use. Please provide another email to continue.");


        // TODO: Has valid phone number

        return true;
    }

    @Override
    public boolean newCompanyValidate(CompanyRequestDto company) {
        // Has unique company name
        boolean companyNameExists = companyRepository.existsByNameAndDeletedFalse(company.getName());
        if (companyNameExists)
            throw new BadRequestException(
                    company.getName() +
                            " already exists. Please choose another company name.");
        return true;
    }

    @Override
    public boolean newAnnouncementValidate(AnnouncementRequestDto announcement) {
        // TODO: Has valid title (length)
        // TODO: Has valid message (length)
        return true;
    }

    @Override
    public boolean newTeamValidate(TeamRequestDto team, Long companyId) {
        // TODO?: Has valid team name (constraints?)

        // Has team name unique to the company
        Optional<Company> company = companyRepository.findById(companyId);
        if (company.isEmpty()) throw new NotFoundException("Provided Company not found.");
        boolean teamNameExistsInCompany =
                teamRepository.existsByNameAndCompanyAndDeletedFalse(team.getName(), company.get());
        return true;
    }

    @Override
    public boolean newProjectValidate(ProjectRequestDto project, Long teamId) {
        // TODO?: Has valid project name (constraints?)

        // Has project name unique to the team
        Optional<Team> team = teamRepository.findById(teamId);
        if (team.isEmpty()) throw new NotFoundException("Provided Team not found.");
        boolean projectNameExistsInTeam =
                projectRepository.existsByNameAndTeamAndDeletedFalse(project.getName(), team.get());
        return true;
    }

}
