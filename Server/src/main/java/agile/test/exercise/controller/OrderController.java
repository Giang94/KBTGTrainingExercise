package agile.test.exercise.controller;

import agile.test.exercise.model.DeliveryAddress;
import agile.test.exercise.model.Order;
import agile.test.exercise.responseoject.GenericResponseObject;
import agile.test.exercise.services.OrderService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "/order", method = RequestMethod.POST)
    public GenericResponseObject order(@RequestBody Order order){
        return orderService.createOrder(order);
    }

    public static void main(String[] args) {
        ObjectMapper mapper = new ObjectMapper();
        Order order = new Order();
        DeliveryAddress deliveryAddress = new DeliveryAddress();
        order.setAddress(deliveryAddress);
        Map<String, Integer> items = new HashMap<>();
        items.put("dd", 10);
        order.setCartItems(items);
        try {
            System.out.println(mapper.writeValueAsString(order));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }
}
