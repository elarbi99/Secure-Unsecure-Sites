package com.secure.secureapp.Controller;

import com.secure.secureapp.dto.OrderDTO;
import com.secure.secureapp.services.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetOrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/get-order")
    public ResponseEntity<OrderDTO> getOrder(
            @RequestParam String email,
            @RequestParam Long orderNumber
    ) {
        // Validate inputs
        if (email == null || orderNumber == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        // Call the service to get the order details
        OrderDTO orderDTO = orderService.getOrderDetails(email, orderNumber);

        if (orderDTO == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(orderDTO, HttpStatus.OK);
    }
}
