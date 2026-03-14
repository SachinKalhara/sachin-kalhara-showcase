package com.example.showcasebackend.repository;

import com.example.showcasebackend.entity.ContactSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactSubmissionRepository extends JpaRepository<ContactSubmission, Long> {
}