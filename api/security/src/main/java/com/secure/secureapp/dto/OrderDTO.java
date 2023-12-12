package com.secure.secureapp.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;
@Data
public class OrderDTO {
    private Long id;

    private String orderName;
    private double price;

    private LocalDate orderDate;
    private String email;
    private long orderNumber;
    public String getOrderName(){return orderName;}
    public LocalDate getOrderDate(){return orderDate;}
    public void setId(long id)
    {
        this.id=id;
    }
    public String getEmail() {
        return email;
    }
    public void setOrderName(String orderName){this.orderName=orderName;}
    public void setOrderDate(LocalDate orderDate){this.orderDate=orderDate;}
    public void setEmail(String email) {
        this.email=email;
    }
    public void setPrice(double price){this.price=price;}

    public void setOrderNumber(long orderNumber){this.orderNumber=orderNumber;}

    public long getId() {
        return id;
    }
}
