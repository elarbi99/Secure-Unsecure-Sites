package com.secure.secureapp.services.order;

import com.secure.secureapp.Models.OrderModel;
import com.secure.secureapp.Repository.OrderRepository;
import com.secure.secureapp.dto.CreateOrderDTO;
import com.secure.secureapp.dto.OrderDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class OrderServiceImpl implements OrderService{
    @Autowired
    private OrderRepository orderRepository;
    @Override
    public OrderDTO createOrder(CreateOrderDTO createOrderDTO)
    {
        OrderModel orderModel=new OrderModel();
        orderModel.setOrderName(createOrderDTO.getOrderName());
        orderModel.setOrderDate(LocalDate.now());
        orderModel.setEmail(createOrderDTO.getEmail());
        orderModel.setPrice(createOrderDTO.getPrice());
        orderModel.setOrderNumber();
        OrderModel createdOrder=orderRepository.save(orderModel);
        OrderDTO orderDTO=new OrderDTO();
        orderDTO.setId(createdOrder.getId());
        orderDTO.setOrderName(createdOrder.getOrderName());
        orderDTO.setOrderDate(createdOrder.getOrderDate());
        orderDTO.setEmail(createdOrder.getEmail());
        orderDTO.setPrice(createdOrder.getPrice());
        orderDTO.setOrderNumber(createdOrder.getOrderNumber());
        return orderDTO;
    }

    @Override
    public OrderDTO getOrderDetails(String email, Long orderNumber) {
        if (email == null || orderNumber == null) {
            return null;
        }

        // Retrieve the order from the repository
        OrderModel orderModel = orderRepository.findFirstByEmailAndOrderNumber(email, orderNumber);

        if (orderModel == null) {
            return null; // Order not found
        }

        // Convert the OrderModel to OrderDTO
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setId(orderModel.getId());
        orderDTO.setOrderName(orderModel.getOrderName());
        orderDTO.setOrderDate(orderModel.getOrderDate());
        orderDTO.setEmail(orderModel.getEmail());
        orderDTO.setPrice(orderModel.getPrice());
        orderDTO.setOrderNumber(orderModel.getOrderNumber());

        return orderDTO;
    }

}
