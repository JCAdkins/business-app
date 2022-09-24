package com.cooksys.cookslack.data.repositories;

import com.cooksys.cookslack.data.model.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {
}
