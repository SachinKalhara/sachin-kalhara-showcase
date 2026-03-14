package com.example.showcasebackend.service;

import com.example.showcasebackend.entity.Project;
import com.example.showcasebackend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository repository;

    public List<Project> findAll() {
        return repository.findAll();
    }

    public Optional<Project> findById(Long id) {
        return repository.findById(id);
    }

    public Project save(Project project) {
        if (project.getId() != null) {
            // Update logic if needed
        }
        return repository.save(project);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}