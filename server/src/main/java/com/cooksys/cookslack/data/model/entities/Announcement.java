package com.cooksys.cookslack.data.model.entities;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.Instant;

@Entity
@Data
public class Announcement {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private final Timestamp date;
    @Column
    private Boolean deleted = false;
    @Column
    private String title;
    @Column
    private String message;
    @ManyToOne
    private Company company;
    @ManyToOne
    private User author;


    public Announcement() {
        Instant now = Instant.now();
        date = Timestamp.from(now);
    }
}
