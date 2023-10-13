package com.sovisrushain.todo.service;

import com.sovisrushain.todo.dto.TodoDto;

import java.util.List;
import java.util.Optional;

public interface TodoService {
    List<TodoDto> getAllTodos(String username);
    TodoDto findById(Long id);
    Long saveTodo(String username, TodoDto todoDto);
    Long deleteTodo(String username, Long id);
}
