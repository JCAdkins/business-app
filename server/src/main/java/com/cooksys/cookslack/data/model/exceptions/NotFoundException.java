package com.cooksys.cookslack.data.model.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class NotFoundException extends RuntimeException {
    private static final long serialVersionUID = 1871791148577552206L;
    private String message;
}
