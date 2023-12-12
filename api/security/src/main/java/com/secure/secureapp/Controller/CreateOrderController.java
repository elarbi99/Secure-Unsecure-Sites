package com.secure.secureapp.Controller;

import com.secure.secureapp.Models.UserModel;
import com.secure.secureapp.dto.CreateOrderDTO;
import com.secure.secureapp.dto.OrderDTO;
import com.secure.secureapp.dto.SignupDTO;
import com.secure.secureapp.dto.UserDTO;
import com.secure.secureapp.services.auth.AuthService;
import com.secure.secureapp.services.jwt.UserDetailsServiceImpl;
import com.secure.secureapp.services.order.OrderService;
import com.secure.secureapp.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class CreateOrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(@RequestBody CreateOrderDTO createOrderDTO) {
        UserModel user = userDetailsService.findByEmail(createOrderDTO.getEmail());

        if (user == null) {
            // User does not exist, return an error response
            return new ResponseEntity<>("User not found with the provided email.", HttpStatus.BAD_REQUEST);
        }

        String authToken = jwtUtil.generateToken(user.getEmail());

        OrderDTO orderDTO = orderService.createOrder(createOrderDTO);
        if (orderDTO == null) {
            return new ResponseEntity<>("Order not created, come again later!", HttpStatus.BAD_REQUEST);
        }

        Map<String, Object> response = new HashMap<>();
        response.put("order", orderDTO);
        response.put("authToken", authToken);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
