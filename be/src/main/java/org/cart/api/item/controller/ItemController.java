package org.cart.api.item.controller;
import lombok.RequiredArgsConstructor;
import org.cart.api.item.domain.Item;
import org.cart.api.item.service.ItemService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/items")
public class ItemController {
    private final ItemService service;
    @PostMapping("")
    public ResponseEntity<String> save(@RequestBody Item item){
        System.out.println("save :"+item.toString());
        return ResponseEntity.ok(service.save(item));
    }
    @GetMapping("")
    public ResponseEntity<List<Item>> all(){
        System.out.println("all :");
        return ResponseEntity.ok(service.all());

    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Item>> one(@PathVariable long id){
        System.out.println("Item One Id:"+id);
        return ResponseEntity.ok(service.one(id));

    }
    @PutMapping("/{id}")
    public ResponseEntity<String> edit(@PathVariable long id, @RequestBody Item item){
        System.out.println("edit :"+item.toString());
        return ResponseEntity.ok(service.edit(item));

    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable long id){
        return ResponseEntity.ok(service.delete(id));

    }
}