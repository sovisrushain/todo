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
    public TodoDto findById(Long id) {
        Todo todo = todoRepository.findById(id).get();
        return mapper.map(todo, TodoDto.class);
    }

    @Override
    public Long saveTodo(String username, String description) {
        TodoDto dto = TodoDto.builder()
                .username(username)
                .description(description)
                .isDone(false)
                .build();
        return todoRepository.save(mapper.map(dto, Todo.class)).getId();
    }

    @Override
    public Long updateTodo(String username, TodoDto todoDto, Long id) {
        Todo todo = mapper.map(todoDto, Todo.class);
        todo.setId(id);
        return todoRepository.save(todo).getId();
    }

    @Override
    public Long deleteTodo(String username, Long id) {
        todoRepository.deleteById(id);
        return id;
    }
}
