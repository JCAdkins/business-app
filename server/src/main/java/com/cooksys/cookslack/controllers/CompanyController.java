//package com.cooksys.cookslack.controllers;
//
//import com.cooksys.cookslack.data.dtos.*;
//import com.cooksys.cookslack.services.CompanyService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/companies")
//public class CompanyController {
//
//    private final CompanyService companyService;
//
//    // get all companies
//    @GetMapping
//    public List<CompanyResponseDto> getAllCompanies() { return CompanyService.getAllCompanies();}
//
//    // create a new company
//    @PostMapping
//    @ResponseStatus(HttpStatus.CREATED)
//    public CompanyResponseDto createCompany(@RequestBody CompanyRequestDto companyRequestDto) {
//        return companyService.createCompany(companyRequestDto);
//    }
//
//    // get company by id
//    @GetMapping("/{id}")
//    public CompanyResponseDto getCompanyById(@PathVariable Long id) {
//        return companyService.getCompanyById(id);
//    }
//
//    // patch company by id
//    @PatchMapping("/{id}")
//    public CompanyResponseDto updateCompany(@PathVariable Long id, @RequestBody CompanyRequestDto companyRequestDto) {
//        return companyService.updateCompany(id, companyRequestDto);
//    }
//
//    // delete company by id
//    @DeleteMapping("/{id}")
//    public CompanyResponseDto deleteCompany(@PathVariable Long id) {
//        return companyService.deleteCompanyById(id);
//    }
//
//    // get all announcements from a company with the given id
//    @GetMapping("/{id}/announcements")
//    public AnnouncementResponseDTO getAnnouncementsById(@PathVariable Long id) {
//        return companyService.getAnnouncementsById(id);
//    }
//
//    // post new announcement for a company
//    @PostMapping("/{id}/announcements")
//    @ResponseStatus(HttpStatus.CREATED)
//    public AnnouncementResponseDTO createAnnouncement(@PathVariable Long id, @RequestBody AnnouncementRequestDto announcementRequestDto) {
//        return companyService.createAnnouncement(id, announcementRequestDto);
//    }
//
//    // get specific announcement from a company
//    @GetMapping("/{id}/announcements/{id}")
//    public AnnouncementResponseDTO getSingleAnnouncement(@PathVariable Long id, @PathVariable Long AnnouncementID) {
//        return companyService.getSingleAnnouncement(id, AnnouncementID);
//    }
//
//    // patch company announcement
//    @PatchMapping("/{id}/announcements/{id}")
//    public AnnouncementResponseDTO updateAnnouncement(@PathVariable Long id, @PathVariable Long AnnouncementID, @RequestBody AnnouncementRequestDto announcementRequestDto) {
//        return companyService.updateAnnouncement(id, AnnouncementID, announcementRequestDto);
//    }
//
//    // delete specific announcement
//    @DeleteMapping("/{id}/announcements/{id}")
//    public AnnouncementResponseDto deleteAnnouncement(@PathVariable Long id, @PathVariable Long AnnouncementID) {
//        return companyService.deleteAnnouncement(id, AnnouncementID)
//    }
//
//    // get all the teams from a company
//    @GetMapping("/{id}/teams")
//    public List<TeamResponseDto> getAllTeams(@PathVariable Long id) { return companyService.getAllTeams(id);}
//
//    // create a company's team
//    @PostMapping("/{id}/teams")
//    @ResponseStatus(HttpStatus.CREATED)
//    public TeamResponseDTO createTeam(@PathVariable Long id, @RequestBody TeamRequestDto teamRequestDto) {
//        return companyService.createTeam(id, teamRequestDto);
//    }
//
//    // get a team by id
//    @GetMapping("/{id}/teams/{id}")
//    public TeamResponseDTO getSingleTeam(@PathVariable Long id, @PathVariable Long TeamID) {
//        return companyService.getSingleTeam(id, TeamID);
//    }
//
//    // update team
//    @PatchMapping("/{id}/teams/{id}")
//    public TeamResponseDTO updateTeam(@PathVariable Long id, @PathVariable Long AnnouncementID, @RequestBody TeamRequestDto teamRequestDto) {
//        return companyService.updateTeam(id, TeamID, teamRequestDto);
//    }
//
//    // delete a team
//    @DeleteMapping("/{id}/teams/{id}")
//    public TeamResponseDto deleteTeam(@PathVariable Long id, @PathVariable Long TeamID) {
//        return companyService.deleteTeam(id, TeamID)
//    }
//
//    // get all projects from a specific company
//    @GetMapping("/{id}/projects")
//    public List<ProjectResponseDto> getAllProjects(@PathVariable Long id) { return companyService.getAllProjects(id);}
//
//    // create a project
//    @PostMapping("/{id}/projects")
//    @ResponseStatus(HttpStatus.CREATED)
//    public ProjectResponseDTO createProject(@PathVariable Long id, @RequestBody ProjectRequestDto projectRequestDto) {
//        return companyService.createProject(id, projectRequestDto);
//    }
//
//    // get a project by id
//    @GetMapping("/{id}/projects/{id}")
//    public ProjectResponseDTO getSingleProject(@PathVariable Long id, @PathVariable Long ProjectID) {
//        return companyService.getSingleProject(id, ProjectID);
//    }
//
//    // update project
//    @PatchMapping("/{id}/projects/{id}")
//    public ProjectResponseDTO updateProject(@PathVariable Long id, @PathVariable Long ProjectID, @RequestBody ProjectRequestDto projectRequestDto) {
//        return companyService.updateProject(id, ProjectID, projectRequestDto);
//    }
//
//    // delete project
//    @DeleteMapping("/{id}/projects/{id}")
//    public ProjectResponseDTO deleteProject(@PathVariable Long id, @PathVariable Long ProjectID) {
//        return companyService.deleteProject(id, ProjectID)
//    }
//}