package agile.test.exercise.repository;

import agile.test.exercise.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ProductRepositoryImpl implements ProductCustomRepository {

    @Autowired
    private MongoTemplate mongoTemplate;


    @Override
    public List<Product> find(Map<String, Object> params, String ...  includedFields) {

        Criteria criteria = new Criteria();
        Query query = new Query();
        query.addCriteria(criteria);
        params.forEach((k, v) -> {
            criteria.andOperator(Criteria.where(k).is(v));
        });

        if (includedFields != null && includedFields.length != 0){
            for (String field : includedFields){
                query.fields().include(field);
            }
        }

        List<Product> products = mongoTemplate.find(query, Product.class);
        return products == null ? new ArrayList<>() : products;
    }
}
