package com.example.showcasebackend.controller;

import com.example.showcasebackend.entity.BlogPost;
import com.example.showcasebackend.service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/blog")
@CrossOrigin(origins = "http://localhost:5173")
public class BlogController {

    @Autowired
    private BlogPostService service;

    @GetMapping
    public List<BlogPost> getAllBlogs() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BlogPost> getBlogById(@PathVariable Long id) {
        Optional<BlogPost> blog = service.findById(id);
        return blog.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<BlogPost> createBlog(@RequestBody BlogPost blogPost) {
        BlogPost saved = service.save(blogPost);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BlogPost> updateBlog(@PathVariable Long id, @RequestBody BlogPost blogPost) {
        blogPost.setId(id);
        BlogPost updated = service.save(blogPost);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlog(@PathVariable Long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}