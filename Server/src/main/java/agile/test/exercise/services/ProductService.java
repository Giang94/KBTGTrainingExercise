package agile.test.exercise.services;

import agile.test.exercise.model.Product;
import agile.test.exercise.repository.ProductRepository;
import agile.test.exercise.responseoject.GenericResponseObject;
import agile.test.exercise.utils.Messages;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ProductService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ProductService.class);

    private static final String[] SHORT_FIELDS = {
            Product.NAME_ATTR,
            Product.PRICE_NAME,
            Product.ID_ATTR
    };

    @Autowired
    private ProductRepository productRepository;

    public GenericResponseObject getProducts(Map<String, Object> requestData){
        LOGGER.debug("Getting products by params...");
        GenericResponseObject responseObject = new GenericResponseObject();
        try {
            List<Product> products = productRepository.find(requestData, SHORT_FIELDS);
            responseObject.setData(products);
        } catch (Exception e){
            responseObject.setStatus("FAILED");
            responseObject.setMessageCode(Messages.SERVER_DATABASE_ERROR);
            LOGGER.error("Exception while getting products.", e);
        }
        return responseObject;
    }

    /**
     * Get product by Id
     * @param id
     * @return
     */
    public GenericResponseObject getProductById(String id){
        LOGGER.debug("Getting product by id: {}", id);
        GenericResponseObject responseObject = new GenericResponseObject();
        try {
            Optional<Product> existingProduct = productRepository.findById(new ObjectId(id));
            if (existingProduct != null && existingProduct.isPresent()) {
                responseObject.setData(existingProduct.get());
            } else {
                responseObject.setMessageCode(Messages.PRODUCT_ID_NOT_EXIST);
                responseObject.setMessageCode(Messages.SERVER_DATABASE_ERROR);
                LOGGER.warn("Product id {} doesn't exist", id);
            }
        } catch (Exception e){
            LOGGER.error("Exception while getting data", e);
        }
        return responseObject;
    }

    public void createProduct(Product product){
        LOGGER.info("Creating new product");
        try {
            productRepository.save(product);
        } catch (Exception e){
            LOGGER.error("Exception while creating product {} to DB", product, e);
        }
    }

}
