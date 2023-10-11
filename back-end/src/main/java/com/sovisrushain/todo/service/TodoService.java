package com.sovisrushain.todo.service;

import com.sovisrushain.todo.dto.TodoDto;

import java.util.List;

public interface TodoService {
    List<TodoDto> getAllTodos(String username);
    Long saveTodo(String username, TodoDto todoDto);
}
