package com.cooksys.cookslack.data.repositories;

import com.cooksys.cookslack.data.model.entities.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
}
