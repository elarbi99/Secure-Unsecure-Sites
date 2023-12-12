package com.secure.secureapp.dto;

import lombok.Data;

@Data
public class AuthenticationDTO {

    private String email;

    private String password;
    private String orderNumber;

    public String getOrderNumber(){return orderNumber;}
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
}
