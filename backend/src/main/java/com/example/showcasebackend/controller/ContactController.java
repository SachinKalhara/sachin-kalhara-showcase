package com.example.showcasebackend.controller;

import com.example.showcasebackend.entity.ContactSubmission;
import com.example.showcasebackend.service.ContactSubmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    @Autowired
    private ContactSubmissionService service;

    @PostMapping
    public ResponseEntity<ContactSubmission> submitContact(@RequestBody ContactSubmission contactSubmission) {
        ContactSubmission saved = service.save(contactSubmission);
        return ResponseEntity.ok(saved);
    }
}