package com.secure.secureapp.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class SignupDTO {

    private String fName;
    private String lName;

    private String email;
    private LocalDate createDate;

    private String password;
    private String address;
    private String phone;
    private String city;
    private int zipCode;


    public String getFName() {return fName;}
    public String getLName() {return lName;}
    public String getEmail() {
        return email;
    }
    public LocalDate getCreateDate(){return createDate;}
    public String getPassword() {
        return password;
    }
    public String getPhone(){return phone;}
    public String getAddress(){return address;}
    public String getCity(){return city;}
    public int getZipCode(){return zipCode;}
    public void setCreateDate(LocalDate createDate){this.createDate=createDate;}

}
