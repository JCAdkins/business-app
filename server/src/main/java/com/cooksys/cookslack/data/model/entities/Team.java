package com.cooksys.cookslack.data.model.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Team {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String name;
    @Column
    private String description;
    @ManyToOne
    private Company company;
}
