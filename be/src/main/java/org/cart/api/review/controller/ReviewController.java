package org.cart.api.review.controller;

import lombok.RequiredArgsConstructor;
import org.cart.api.review.domain.Review;
import org.cart.api.review.service.ReviewService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/reviews")
public class ReviewController {
    private final ReviewService service;
    @PostMapping("")
    public ResponseEntity<String> save(@RequestBody Review review){
        System.out.println(("save :"+review.toString()));
        return ResponseEntity.ok(service.save(review));
    }
    @GetMapping("")
    public ResponseEntity<List<Review>> all(){
        System.out.println("all :");
        return ResponseEntity.ok(service.all());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Review>> one(@PathVariable long id){
        System.out.println("Review One Id:"+id);
        return ResponseEntity.ok(service.one(id));
    }
    @PutMapping("/{id}")
    public ResponseEntity<String> edit(@PathVariable long id, @RequestBody Review review){
        System.out.println("edit :"+review.toString());
        return ResponseEntity.ok(service.edit(review));

    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable long id){
        return ResponseEntity.ok(service.delete(id));
    }

}
