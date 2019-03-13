package agile.test.exercise.repository;

import agile.test.exercise.model.DeliveryAddress;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeliveryAddressRepository extends MongoRepository<DeliveryAddress, ObjectId> {



}
