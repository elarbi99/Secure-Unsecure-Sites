package com.secure.secureapp.Repository;

import com.secure.secureapp.Models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    UserModel findFirstByEmail(String email);

}
