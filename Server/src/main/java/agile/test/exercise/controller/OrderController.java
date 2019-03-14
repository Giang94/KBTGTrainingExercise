package agile.test.exercise.controller;

import agile.test.exercise.model.Order;
import agile.test.exercise.responseoject.GenericResponseObject;
import agile.test.exercise.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "/order", method = RequestMethod.POST)
    public GenericResponseObject order(@RequestBody Order order){
        return orderService.createOrder(order);
    }

}
