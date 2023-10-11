package com.sovisrushain.todo.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@Builder
@Entity
@Table(name = "todo")
@NoArgsConstructor
@AllArgsConstructor
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "target_date", nullable = false)
    private Date targetDate;

    @Column(name = "is_done", nullable = false)
    private boolean isDone;
}
