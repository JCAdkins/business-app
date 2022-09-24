package com.cooksys.cookslack.data;

import com.cooksys.cookslack.data.model.entities.User;
import com.cooksys.cookslack.data.model.entities.embeds.Credentials;
import com.cooksys.cookslack.data.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@RequiredArgsConstructor
public class Seeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final TeamRepository teamRepository;
    private final ProjectRepository projectRepository;
    private final CompanyRepository companyRepository;
    private final AnnouncementRepository announcementRepository;

    @Override
    public void run(String... args) throws Exception {

        // --- User 1 ---
        // Credentials
        Credentials user1Cred = new Credentials();
        user1Cred.setUsername("therealmc");
        user1Cred.setPassword("Password");

        User user1 = new User();
        user1.setCredentials(user1Cred);
        user1.setFirstName("Master");
        user1.setLastName("Chief");
        user1.setEmail("sierra117@email.com");
        user1.setPhoneNumber("123-456-7890");
        user1.setActive(true);
        user1.setAdmin(true);
        user1.setStatus("On Vacation");

        // --- User 2 ---
        // Credentials
        Credentials user2Cred = new Credentials();
        user2Cred.setUsername("mario");
        user2Cred.setPassword("password");

        User user2 = new User();
        user2.setCredentials(user2Cred);
        user2.setFirstName("Mario");
        user2.setLastName("Mario");
        user2.setEmail("mario@email.com");
        user2.setPhoneNumber("234-567-8901");
        user2.setActive(true);
        user2.setAdmin(false);
        user2.setStatus("Working");

        // --- User 3 ---
        Credentials user3Cred = new Credentials();
        // Credentials
        user3Cred.setUsername("Luigi");
        user3Cred.setPassword("Password");

        User user3 = new User();
        user3.setCredentials(user3Cred);
        user3.setFirstName("Luigi");
        user3.setLastName("Mario");
        user3.setEmail("luigi@email.com");
        user3.setPhoneNumber("345-678-9012");
        user3.setActive(true);
        user3.setAdmin(false);
        user3.setStatus("Working");

        // --- User 4 ---
        // Credentials
        Credentials user4Cred = new Credentials();
        user4Cred.setUsername("Nathan");
        user4Cred.setPassword("Password");

        User user4 = new User();
        user4.setCredentials(user4Cred);
        user4.setFirstName("Nathan");
        user4.setLastName("Drake");
        user4.setEmail("nathan@email.com");
        user4.setPhoneNumber("456-789-0023");
        user4.setActive(true);
        user4.setAdmin(false);
        user4.setStatus("Working");

        // --- User 5 ---
        // Credentials
        Credentials user5Cred = new Credentials();
        user5Cred.setUsername("Tarnished");
        user5Cred.setPassword("Password");

        User user5 = new User();
        user5.setCredentials(user5Cred);
        user5.setFirstName("The");
        user5.setLastName("Tarnished");
        user5.setEmail("willibecometheeldenlord@email.com");
        user5.setPhoneNumber("567-890-0034");
        user5.setActive(true);
        user5.setAdmin(false);
        user5.setStatus("Working");


        userRepository.saveAllAndFlush(Arrays.asList(user1, user2, user3, user4, user5));

    }
}
