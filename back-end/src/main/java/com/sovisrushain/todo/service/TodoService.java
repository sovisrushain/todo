package com.sovisrushain.todo.service;

import com.sovisrushain.todo.dto.TodoDto;

import java.util.List;

public interface TodoService {
    List<TodoDto> getAllTodos(String username);
    TodoDto findById(Long id);
    Long saveTodo(String username, String description);
    Long updateTodo(String username, TodoDto todoDto, Long id);
    Long deleteTodo(String username, Long id);
}
