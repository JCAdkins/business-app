package com.cooksys.cookslack.data.services.impl;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {

    private final CompanyMapper companyMapper;


//******* END POINTS ***********************************************************************

    //GET all companies
    @Override
    public List<CompanyResponseDto> getAllCompanies() { return companyMapper.entitiesToResponseDtos(companyRepository.findAll()) }

    //create a company
    @Override
    public CompanyResponseDto createCompany(CompanyRequestDto companyRequestDto) { }

    //GET company by ID
    @Override
    public CompanyResponseDto getCompanyById(Long id) {
        return companyMapper.entityToResponseDto(id)
    }

    //PATCH company by ID
    @Override
    public CompanyResponseDto updateCompany(Long id, CompanyRequestDto companyRequestDto) {}

    //DELETE company by ID
    @Override
    public CompanyResponseDto deleteCompany(Long id) {
        //Needs to be fixed and finished!
        Company companyToDelete = existsByNameAndDeletedFalse();
        companyToDelete.setDeleted(true);
        companyRepository.save(companyToDelete);
        return companyMapper.entityToResponseDto(companyToDelete);
    }

    //GET all announcements from a company by company ID
    @Override
    public AnnouncementResponseDTO getAnnouncementsById(Long id) {}

    //create a new announcement for a company
    @Override
    public AnnouncementResponseDTO createAnnouncement(Long id, AnnouncementRequestDto announcementRequestDto) {}

    //GET single announcement
    @Override
    public String getSingleAnnouncement(Long id, Long AnnouncementID) {}

    //PATCH to update an announcement using company ID and annoucnement ID
    @Override
    public AnnouncementResponseDTO updateAnnouncement(Long id, Long AnnouncementID, AnnouncementRequestDto announcementRequestDto) {}

    //DELETE a specific announcement by company ID and announcement ID
    @Override
    public AnnouncementResponseDto deleteAnnouncement(Long id, Long AnnouncementID) {}

    //GET all teams from a company by company ID
    @Override
    public List<TeamResponseDto> getAllTeams(Long id) {}

    //POST to create a team using company ID
    @Override
    public TeamResponseDTO createTeam(Long id, TeamRequestDto teamRequestDto) {}

    //GET single team by id from company using company ID
    @Override
    public TeamResponseDTO getSingleTeam(Long id, Long TeamID) {}

    //PATCH a team by team ID and company ID
    @Override
    public TeamResponseDTO updateTeam(Long id, Long TeamID) {}

    //DELETE a team using team ID and company ID
    @Override
    public TeamResponseDto deleteTeam(Long id, Long TeamID) {}

    //GET all projects from a specific company using company ID
    @Override
    public List<ProjectResponseDto> getAllProjects(Long id) {}

    //POST to create a project using company ID
    @Override
    public ProjectResponseDTO createProject(Long id, ProjectRequestDto projectRequestDto) {}

    //GET a specific project using the project ID and the company ID
    @Override
    public ProjectResponseDTO getSingleProject(Long id, Long ProjectID) {}

    //PATCH a project using project ID and company ID
    @Override
    public ProjectResponseDTO updateProject(Long id, Long ProjectID, ProjectRequestDto projectRequestDto) {}

    //DELETE a project using project ID and company ID
    @Override
    public ProjectResponseDTO deleteProject(Long id, Long ProjectID) {}
}