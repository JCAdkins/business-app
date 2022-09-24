package com.cooksys.cookslack.data.model.entities;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
public class Announcement {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private Timestamp date;
    @Column
    private String title;
    @Column
    private String message;
    @ManyToOne
    private Company company;
    @ManyToOne
    private User author;
}
