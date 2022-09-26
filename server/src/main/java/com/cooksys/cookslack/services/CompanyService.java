package com.cooksys.cookslack.services;

import com.cooksys.cookslack.data.dtos.*;

import java.util.List;

public interface CompanyService {

    //GET all companies
    List<CompanyResponseDto> getAllCompanies();

    //create a company
    CompanyResponseDto createCompany(CompanyRequestDto companyRequestDto);

    //GET company by ID
    CompanyResponseDto getCompanyById(Long id);

    //PATCH company by ID
    CompanyResponseDto updateCompany(Long id, CompanyRequestDto companyRequestDto);

    //DELETE company by ID
    CompanyResponseDto deleteCompany(Long id);

    //GET all announcements from a company by company ID
    AnnouncementResponseDto getAnnouncementsById(Long id);

    //create a new announcement for a company
    AnnouncementResponseDto createAnnouncement(Long id, AnnouncementRequestDto announcementRequestDto);

    //GET single announcement
    String getSingleAnnouncement(Long id, Long AnnouncementID);

    //PATCH to update an announcement using company ID and annoucnement ID
    AnnouncementResponseDto updateAnnouncement(Long id, Long AnnouncementID, AnnouncementRequestDto announcementRequestDto);

    //DELETE a specific announcement by company ID and announcement ID
    AnnouncementResponseDto deleteAnnouncement(Long id, Long AnnouncementID);

    //GET all teams from a company by company ID
    List<TeamResponseDto> getAllTeams(Long id);

    //POST to create a team using company ID
    TeamResponseDto createTeam(Long id, TeamRequestDto teamRequestDto);

    //GET single team by id from company using company ID
    TeamResponseDto getSingleTeam(Long id, Long TeamID);

    //PATCH a team by team ID and company ID
    TeamResponseDto updateTeam(Long id, Long TeamID);

    //DELETE a team using team ID and company ID
    TeamResponseDto deleteTeam(Long id, Long TeamID);

    //GET all projects from a specific company using company ID
    List<ProjectResponseDto> getAllProjects(Long id);

    //POST to create a project using company ID
    ProjectResponseDto createProject(Long id, ProjectRequestDto projectRequestDto);

    //GET a specific project using the project ID and the company ID
    ProjectResponseDto getSingleProject(Long id, Long ProjectID);

    //PATCH a project using project ID and company ID
    ProjectResponseDto updateProject(Long id, Long ProjectID, ProjectRequestDto projectRequestDto);

    //DELETE a project using project ID and company ID
    ProjectResponseDto deleteProject(Long id, Long ProjectID);

}