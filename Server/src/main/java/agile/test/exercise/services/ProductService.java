package agile.test.exercise.services;

import agile.test.exercise.model.Product;
import agile.test.exercise.repository.ProductRepository;
import agile.test.exercise.responseoject.GenericResponseObject;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ProductService {

    private static final String[] SHORT_FIELDS = {
            Product.NAME_ATTR,
            Product.PRICE_NAME,
            Product.ID_ATTR
    };

    @Autowired
    private ProductRepository productRepository;

    public GenericResponseObject getProducts(Map<String, Object> requestData){
        GenericResponseObject responseObject = new GenericResponseObject();
        try {
            List<Product> products = productRepository.find(requestData, SHORT_FIELDS);
            responseObject.setData(products);
        } catch (Exception e){
            responseObject.setStatus("FAILED");
        }
        return responseObject;
    }

    /**
     * Get product by Id
     * @param id
     * @return
     */
    public GenericResponseObject getProduct(String id){
        GenericResponseObject responseObject = new GenericResponseObject();
        Optional<Product> product = productRepository.findById(new ObjectId(id));
        if (product.isPresent()) {
            responseObject.setData(product.get());
        }
        return responseObject;
    }

    public void createProduct(Product product){
        productRepository.save(product);
    }

}
