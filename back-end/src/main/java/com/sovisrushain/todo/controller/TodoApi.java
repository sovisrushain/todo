package com.sovisrushain.todo.controller;

import com.sovisrushain.todo.dto.TodoDto;
import com.sovisrushain.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/users")
@RequiredArgsConstructor
public class TodoApi {

    private final TodoService todoService;

    @GetMapping(value = "/{username}/todos")
    public ResponseEntity<List<TodoDto>> getAllTodos(@PathVariable String username) {
        List<TodoDto> allTodos = todoService.getAllTodos(username);
        return ResponseEntity.ok(allTodos);
    }

    @GetMapping(value = "/{username}/todos/{id}")
    public ResponseEntity<TodoDto> findById(@PathVariable String username, @PathVariable Long id) {
        TodoDto todo = todoService.findById(id);
        return ResponseEntity.ok(todo);
    }

    @PostMapping(value = "/{username}/todos/{description}")
    public ResponseEntity<Long> saveTodo(@PathVariable String username, @PathVariable String description) {
        Long id = todoService.saveTodo(username, description);
        return ResponseEntity.ok(id);
    }

    @PutMapping(value = "/{username}/todos/{id}")
    public ResponseEntity<Long> updateTodo(@PathVariable String username, @RequestBody TodoDto todoDto, @PathVariable Long id) {
        Long upId = todoService.updateTodo(username, todoDto, id);
        return ResponseEntity.ok(upId);
    }

    @DeleteMapping("/{username}/todos/{id}")
    public ResponseEntity<Long> deleteTodo(@PathVariable String username, @PathVariable Long id) {
        Long delId = todoService.deleteTodo(username, id);
        return ResponseEntity.ok(delId);
    }
}
