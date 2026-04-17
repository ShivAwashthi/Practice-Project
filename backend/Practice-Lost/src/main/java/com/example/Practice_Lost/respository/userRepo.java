package com.example.Practice_Lost.respository;

import com.example.Practice_Lost.model.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepo extends JpaRepository<user, Long> {
}
