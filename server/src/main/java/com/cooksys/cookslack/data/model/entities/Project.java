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
    private Boolean deleted = false;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private Boolean active;
    @ManyToOne
    private Team team;
}
