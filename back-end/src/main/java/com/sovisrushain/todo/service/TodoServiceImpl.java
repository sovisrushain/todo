package com.sovisrushain.todo.service;

import com.sovisrushain.todo.dto.TodoDto;
import com.sovisrushain.todo.model.Todo;
import com.sovisrushain.todo.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;
    private final ModelMapper mapper;

    @Override
    public List<TodoDto> getAllTodos(String username) {
        return todoRepository.findAll()
                .stream()
                .map(todo -> mapper.map(todo, TodoDto.class))
                .toList();
    }

    @Override
    public Long saveTodo(String username, TodoDto todoDto) {
        return todoRepository.save(mapper.map(todoDto, Todo.class)).getId();
    }
}
