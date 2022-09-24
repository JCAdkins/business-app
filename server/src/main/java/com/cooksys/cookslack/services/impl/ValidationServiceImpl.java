package com.cooksys.cookslack.services.impl;

import com.cooksys.cookslack.data.model.entities.*;
import com.cooksys.cookslack.services.ValidationService;

public class ValidationServiceImpl implements ValidationService {

    @Override
    public boolean userValidate(User user) {
        return true;
    }

    @Override
    public boolean companyValidate(Company company) {
        return true;
    }

    @Override
    public boolean announcementValidate(Announcement announcement) {
        return true;
    }

    @Override
    public boolean teamValidate(Team team) {
        return true;
    }

    @Override
    public boolean projectValidate(Project project) {
        return true;
    }

}
