package com.secure.secureapp.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class UserDTO {

    private Long id;

    private String fName;
    private String lName;

    private String email;
    private String address;
    private String phone;
    private String city;
    private LocalDate createDate;
    private int zipCode;

    public String getFName() {return fName;}
    public String getLName() {return lName;}
    public String getEmail() {
        return email;
    }
    public Long getId() {
        return id;
    }
    public String getPhone(){return phone;}
    public String getAddress(){return address;}
    public String getCity(){return city;}
    public int getZipcode(){return zipCode;}
    public LocalDate getCreateDate(){return createDate;}


    public void setFName(String fName) {
        this.fName=fName;
    }
    public void setLName(String lName) {
        this.lName=lName;
    }

    public void setId(long id)
    {
        this.id=id;
    }

    public void setEmail(String email) {
        this.email=email;
    }
    public void setPhone(String phone){this.phone=phone;}
    public void setAddress(String address){this.address=address;}
    public void setCity(String city){this.city=city;}
    public void setCreateDate(LocalDate createDate){this.createDate=createDate;}
    public void setZipCode(int zipCode){this.zipCode=zipCode;}
}
