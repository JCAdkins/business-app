package com.cooksys.cookslack.data.repositories;

import com.cooksys.cookslack.data.model.entities.Project;
import com.cooksys.cookslack.data.model.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {

    Boolean existsByNameAndTeamAndDeletedFalse(String name, Team team);

}
