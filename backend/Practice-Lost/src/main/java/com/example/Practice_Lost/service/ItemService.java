package com.example.Practice_Lost.service;

import com.example.Practice_Lost.model.user;
import com.example.Practice_Lost.respository.userRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ItemService {
    private userRepo repo;
    public Object addItem(user item) {
        return repo.save(item);
    }

    public List<user> getAllItems() {
        return repo.findAll();
    }
}
