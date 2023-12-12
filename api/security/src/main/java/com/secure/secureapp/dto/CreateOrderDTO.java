package com.secure.secureapp.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;
@Data
public class CreateOrderDTO {
    private Long id;

    private String orderName;

    private LocalDate orderDate;
    private String email;
    private double price;
    private Long orderNumber;
    public String getOrderName(){return orderName;}
    public LocalDate getOrderDate(){return orderDate;}
    public String getEmail() {
        return email;
    }

    public Long getOrderNumber(){return orderNumber;}

    public double getPrice(){return price;}

}
