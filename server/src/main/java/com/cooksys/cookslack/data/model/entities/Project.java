package com.cooksys.cookslack.data.model.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Project {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private boolean active;
    @ManyToOne
    private Team team;
}
