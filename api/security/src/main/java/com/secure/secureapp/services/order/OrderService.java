package com.secure.secureapp.services.order;

import com.secure.secureapp.dto.CreateOrderDTO;
import com.secure.secureapp.dto.OrderDTO;

public interface OrderService {
    OrderDTO createOrder(CreateOrderDTO createOrderDTO);

    OrderDTO getOrderDetails(String email, Long orderNumber);
}
