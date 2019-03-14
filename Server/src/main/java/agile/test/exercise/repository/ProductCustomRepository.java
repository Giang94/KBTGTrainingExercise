package agile.test.exercise.repository;

import agile.test.exercise.model.Product;

import java.util.List;
import java.util.Map;

public interface ProductCustomRepository {

    /**
     * Find products by query params and return data with included fields
     * @param params
     * @param includedFields
     * @return
     */
    List<Product> find(Map<String, Object> params, String ... includedFields);
}
