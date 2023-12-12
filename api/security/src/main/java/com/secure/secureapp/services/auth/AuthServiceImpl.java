package com.secure.secureapp.services.auth;

import com.secure.secureapp.dto.SignupDTO;
import com.secure.secureapp.dto.UserDTO;
import com.secure.secureapp.Models.UserModel;
import com.secure.secureapp.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDTO createUser(SignupDTO signupDTO) {
        UserModel user = new UserModel();
        user.setFName(signupDTO.getFName());
        user.setLName(signupDTO.getLName());
        user.setEmail(signupDTO.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(signupDTO.getPassword()));
        user.setPhone(signupDTO.getPhone());
        user.setCreateDate(LocalDate.now());
        user.setAddress(signupDTO.getAddress());
        user.setCity(signupDTO.getCity());
        user.setZipCode(signupDTO.getZipCode());
        UserModel createdUser = userRepository.save(user);
        UserDTO userDTO = new UserDTO();
        userDTO.setId(createdUser.getId());
        userDTO.setEmail(createdUser.getEmail());
        userDTO.setFName(createdUser.getFName());
        userDTO.setLName(createdUser.getLName());
        userDTO.setPhone(createdUser.getPhone());
        userDTO.setAddress(createdUser.getAddress());
        userDTO.setCity(createdUser.getCity());
        userDTO.setZipCode(createdUser.getZipcode());
        userDTO.setCreateDate(createdUser.getCreateDate());

        return userDTO;
    }
}
