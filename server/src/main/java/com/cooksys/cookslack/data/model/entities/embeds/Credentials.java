package com.cooksys.cookslack.data.model.entities.embeds;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
@NoArgsConstructor
@Data
public class Credentials {
    @Column(nullable = false)
    private String username;
    @Column(nullable = false)
    private String password;
}
