package com.example.showcasebackend.service;

import com.example.showcasebackend.entity.ContactSubmission;
import com.example.showcasebackend.repository.ContactSubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactSubmissionService {

    @Autowired
    private ContactSubmissionRepository repository;

    @Autowired
    private JavaMailSender mailSender;

    public ContactSubmission save(ContactSubmission submission) {
        ContactSubmission saved = repository.save(submission);
        sendEmailNotification(submission);
        return saved;
    }

    private void sendEmailNotification(ContactSubmission submission) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("admin@yourdomain.com"); // Replace with admin email
        message.setSubject("New Contact Form Submission: " + submission.getSubject());
        message.setText(String.format(
            "Name: %s\nEmail: %s\nMessage: %s",
            submission.getName(),
            submission.getEmail(),
            submission.getMessage()
        ));
        mailSender.send(message);
    }
}