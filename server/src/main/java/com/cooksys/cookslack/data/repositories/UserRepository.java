package com.cooksys.cookslack.data.repositories;

import com.cooksys.cookslack.data.model.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
