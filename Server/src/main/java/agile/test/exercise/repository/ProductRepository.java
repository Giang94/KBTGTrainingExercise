package agile.test.exercise.repository;

import agile.test.exercise.model.Product;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, ObjectId>, ProductCustomRepository {

}
