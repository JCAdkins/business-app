package com.cooksys.cookslack.data.repositories;

import com.cooksys.cookslack.data.model.entities.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}
