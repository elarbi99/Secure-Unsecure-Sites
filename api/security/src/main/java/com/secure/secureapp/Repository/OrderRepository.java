package com.secure.secureapp.Repository;

import com.secure.secureapp.Models.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderModel, Long> {
    OrderModel findFirstByEmailAndOrderNumber(String email,long orderNumber);
}
