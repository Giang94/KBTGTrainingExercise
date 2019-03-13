package agile.test.exercise.repository;

import agile.test.exercise.model.Order;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, ObjectId> {

}
