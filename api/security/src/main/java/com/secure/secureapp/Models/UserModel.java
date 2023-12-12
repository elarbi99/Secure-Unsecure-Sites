package com.secure.secureapp.Models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Entity
@Data
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fName;
    private String lName;
    @Column(unique = true)
    private String email;
    private String password;
    @Column(unique = true)
    private String phone;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate createDate;
    private String address;
    private String city;
    private int zipCode;
    public String getFName() {return fName;}
    public String getLName() {return lName;}
    public LocalDate getCreateDate(){return createDate;}
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    public String getPhone(){return phone;}
    public String getAddress(){return address;}
    public String getCity(){return city;}
    public int getZipcode(){return zipCode;}

    public void setPassword(String password) {
        this.password=password;
    }

    public void setEmail(String email) {
        this.email=email;
    }

    public void setFName(String fName) {
        this.fName=fName;
    }
    public void setLName(String lName) {
        this.lName=lName;
    }

    public void setPhone(String phone){this.phone=phone;}
    public void setAddress(String address){this.address=address;}
    public void setCreateDate(LocalDate createDate){this.createDate=createDate;}
    public void setCity(String city){this.city=city;}
    public void setZipCode(int zipCode){this.zipCode=zipCode;}

    public long getId() {
        return id;
    }
}
