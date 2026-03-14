package com.example.showcasebackend.service;

import com.example.showcasebackend.entity.BlogPost;
import com.example.showcasebackend.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BlogPostService {

    @Autowired
    private BlogPostRepository repository;

    public List<BlogPost> findAll() {
        return repository.findAll();
    }

    public Optional<BlogPost> findById(Long id) {
        return repository.findById(id);
    }

    public BlogPost save(BlogPost blogPost) {
        if (blogPost.getId() != null) {
            blogPost.setUpdatedAt(java.time.LocalDateTime.now());
        }
        return repository.save(blogPost);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}