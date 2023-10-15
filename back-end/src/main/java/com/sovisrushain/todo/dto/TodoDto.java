package com.sovisrushain.todo.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TodoDto {
    private long id;
    private String username;
    private String description;
    private boolean isDone;
}
