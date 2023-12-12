package com.secure.secureapp.Models;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;
import java.util.Random;

@Entity
@Data
public class OrderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String orderName;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate orderDate;
    private String email;
    @Column(unique = true)
    private Long orderNumber;
    private double price;
    public String getOrderName(){return orderName;}
    public LocalDate getOrderDate(){return orderDate;}
    public String getEmail() {
        return email;
    }
    public void setOrderName(String orderName){this.orderName=orderName;}
    public void setOrderDate(LocalDate orderDate){this.orderDate=orderDate;}
    public void setEmail(String email) {
        this.email=email;
    }

    public double getPrice() {
        return price;
    }
    public long getOrderNumber(){return orderNumber;}


    public void setOrderNumber() {
        this.orderNumber = generateOrderNumber();
    }

    private Long generateOrderNumber() {
        Random random = new Random();
        long max = 9007199254740991L;
        long generatedOrderNumber;
        do {
            generatedOrderNumber = random.nextLong();
        } while (generatedOrderNumber < 0 || generatedOrderNumber > max);

        return generatedOrderNumber;
    }



    public void setPrice(double price) {
        this.price = price;
    }
    public long getId() {
        return id;
    }
}
