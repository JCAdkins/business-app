package com.cooksys.cookslack.data.model.entities;

import com.cooksys.cookslack.data.model.entities.embeds.Credentials;
import lombok.Data;

import javax.persistence.*;

@Table(name = "user_table")
@Entity
@Data
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @Embedded
    private Credentials credentials;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String email;
    @Column
    private String phoneNumber;
    @Column
    private boolean active;
    @Column
    private boolean admin;
    @Column
    private String status;
    @ManyToOne
    private Team team;
    @ManyToOne
    private Company company;
}
