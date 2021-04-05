package org.cart.api.user.controller;


import lombok.RequiredArgsConstructor;
import org.cart.api.user.domain.UserVo;
import org.cart.api.user.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
    private final UserService service;
    @PostMapping("")
    public ResponseEntity<String> save(@RequestBody UserVo user){
        System.out.println("save :"+user.toString());
        return ResponseEntity.ok(service.save(user));
    }
    @GetMapping("")
    public ResponseEntity<List<UserVo>> all(){
        System.out.println("all: ");
        return ResponseEntity.ok(service.all());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<UserVo>> one(@PathVariable long id){
        System.out.println("Item One Id: "+id);
        return ResponseEntity.ok(service.one(id));
    }
    @PutMapping("/{id}")
    public ResponseEntity<String> edit(@PathVariable long id, @RequestBody UserVo user){
        System.out.println("edit: "+user.toString());
        return ResponseEntity.ok(service.edit(user));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable long id){
        return ResponseEntity.ok(service.delete(id));
    }
}
