package agile.test.exercise.services;

import agile.test.exercise.model.Order;
import agile.test.exercise.repository.OrderRepository;
import agile.test.exercise.responseoject.GenericResponseObject;
import agile.test.exercise.utils.Messages;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrderService.class);

    @Autowired
    private OrderRepository repository;

    /**
     * Store order to DB
     * @param order
     * @return
     */
    public GenericResponseObject createOrder(Order order) {
        LOGGER.debug("Creating new order ...");
        GenericResponseObject responseObject = new GenericResponseObject();
        try {
            repository.save(order);
        } catch (Exception e){
            responseObject.setStatus("FAILED");
            responseObject.setMessageCode(Messages.PRODUCT_SAVE_FAILED);
            LOGGER.error("Exception while creating product", e);
        }
        return responseObject;
    }
}
