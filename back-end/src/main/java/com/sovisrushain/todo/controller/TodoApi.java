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

    @PostMapping(value = "/{username}/todos")
    public ResponseEntity<Long> saveTodo(@PathVariable String username, @RequestBody TodoDto todoDto) {
        Long id = todoService.saveTodo(username, todoDto);
        return ResponseEntity.ok(id);
    }

//    @PutMapping(value = "/{username}/todos/{id}")
//    public ResponseEntity<Long> updateTodo(@PathVariable String username, @RequestBody TodoDto todoDto, @PathVariable Long id) {
//        return null;
//    }
//
//    @DeleteMapping("/{username}/todos/{id}")
//    public ResponseEntity<Long> deleteTodo(@PathVariable String username, @PathVariable Long id) {
//        return null;
//    }
}
