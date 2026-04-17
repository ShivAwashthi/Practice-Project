package com.example.Practice_Lost.controller;

import com.example.Practice_Lost.model.user;
import com.example.Practice_Lost.service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/item")
@AllArgsConstructor
@CrossOrigin(
        origins = "http://localhost:5173",
        allowedHeaders = "*",
        methods = {
                RequestMethod.GET,
                RequestMethod.POST,
                RequestMethod.PUT,
                RequestMethod.DELETE,
                RequestMethod.OPTIONS
        }
)
public class ItemController {

    private ItemService itemService;

    @PostMapping
    public ResponseEntity<?> addItem(@RequestBody user item) {
        return ResponseEntity.ok(itemService.addItem(item));
    }

    @GetMapping
    public ResponseEntity<List<user>> getAllItems() {
        return ResponseEntity.ok(itemService.getAllItems());
    }
}