package com.secure.secureapp.services.auth;

import com.secure.secureapp.dto.SignupDTO;
import com.secure.secureapp.dto.UserDTO;

public interface AuthService {
    UserDTO createUser(SignupDTO signupDTO);
}
