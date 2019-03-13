package agile.test.exercise.repository;

import agile.test.exercise.model.Product;

import java.util.List;
import java.util.Map;

public interface ProductCustomRepository {

    List<Product> find(Map<String, Object> params, String ... includedFields);
}
