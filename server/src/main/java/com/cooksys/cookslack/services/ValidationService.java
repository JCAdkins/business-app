package com.cooksys.cookslack.services;

import com.cooksys.cookslack.data.model.entities.*;

public interface ValidationService {

    boolean userValidate(User user);

    boolean companyValidate(Company company);

    boolean announcementValidate(Announcement announcement);

    boolean teamValidate(Team team);

    boolean projectValidate(Project project);

}
