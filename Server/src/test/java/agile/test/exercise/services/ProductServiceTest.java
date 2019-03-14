package agile.test.exercise.services;

import agile.test.exercise.model.Product;
import agile.test.exercise.repository.ProductRepository;
import agile.test.exercise.responseoject.GenericResponseObject;
import agile.test.exercise.utils.Messages;
import org.bson.types.ObjectId;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    /**
     * Case 1: get products by age should return empty data in case of there is no product in server
     */
    @Test
    public void get_product_by_age_return_an_empty_list_data(){
        when(productRepository.find(anyMap(), any())).thenReturn(new ArrayList<>());
        GenericResponseObject responseObject = productService.getProducts(new HashMap<>());

        assertTrue(responseObject.getData() != null);
        assertTrue(((List)responseObject.getData()).isEmpty());
    }

    /**
     * Case 2: get products by age should return a list of products
     */
    @Test
    public void get_product_by_age_return_a_list_data(){
        List<Product> expectedData = new ArrayList<>();
        expectedData.add(new Product());
        Map<String, Object> mapData = new HashMap<>();
        mapData.put("age", "0-5");

        when(productRepository.find(anyMap(), any())).thenReturn(expectedData);
        GenericResponseObject responseObject = productService.getProducts(mapData);

        assertTrue(responseObject.getData() != null);
        assertFalse(((List)responseObject.getData()).isEmpty());
    }


    /**
     * Case 3: get all product should return a list of product
     */
    @Test
    public void get_product_with_no_params_return_a_list_data(){
        List<Product> expectedData = new ArrayList<>();
        expectedData.add(new Product());

        when(productRepository.find(anyMap(), any())).thenReturn(expectedData);
        GenericResponseObject responseObject = productService.getProducts(new HashMap<>());

        assertTrue(responseObject.getStatus().equals("SUCCESS"));
        assertTrue(responseObject.getData() != null);
        assertFalse(((List)responseObject.getData()).isEmpty());
    }

    /**
     * get all product should return empty data in case of there is no product in server
     */
    @Test
    public void get_product_with_no_params_return_empty_data(){
        when(productRepository.find(anyMap(), any())).thenReturn(new ArrayList<>());
        GenericResponseObject responseObject = productService.getProducts(new HashMap<>());

        assertTrue(responseObject.getStatus().equals("SUCCESS"));
        assertTrue(responseObject.getData() != null);
        assertTrue(((List)responseObject.getData()).isEmpty());
    }

    /**
     * get products by gender should return empty data in case of there is no product in server
     */
    @Test
    public void get_product_by_gender_return_empty_data(){
        Map<String, Object> mapData = new HashMap<>();
        mapData.put("gender", "Male");

        when(productRepository.find(anyMap(), any())).thenReturn(new ArrayList<>());
        GenericResponseObject responseObject = productService.getProducts(mapData);

        assertTrue(responseObject.getStatus().equals("SUCCESS"));
        assertTrue(responseObject.getData() != null);
        assertTrue(((List)responseObject.getData()).isEmpty());
    }

    /**
     * get product by gender should return a list of products
     */
    @Test
    public void get_product_by_gender_return_a_list_data(){
        Map<String, Object> mapData = new HashMap<>();
        mapData.put("gender", "Male");
        List<Product> expectedData = new ArrayList<>();
        expectedData.add(new Product());

        when(productRepository.find(anyMap(), any())).thenReturn(expectedData);
        GenericResponseObject responseObject = productService.getProducts(mapData);

        assertTrue(responseObject.getStatus().equals("SUCCESS"));
        assertTrue(responseObject.getData() != null);
        assertFalse(((List)responseObject.getData()).isEmpty());
    }

    /**
     * get product details should return a full fill product
     */
    @Test
    public void get_product_details_should_return_full_fill_result(){
        Product product = new Product();
        product.setName("Apple Iphone XS MAX 64GB");
        product.setGender("Male");
        product.setBrandName("Apple");
        product.setAge("20-30");
        product.setPrice(30000);
        Optional<Product> expectedRs = Optional.of(product);

        when(productRepository.findById(any(ObjectId.class))).thenReturn(expectedRs);
        GenericResponseObject responseObject = productService.getProduct("5c88ad8bb835e74a306db14e");

        assertTrue(responseObject.getData() != null);
    }

    /**
     * get product details should return empty data in case of product id doesn't exist
     */
    @Test
    public void get_product_details_should_return_empty(){
        when(productRepository.findById(any(ObjectId.class))).thenReturn(Optional.empty());
        GenericResponseObject responseObject = productService.getProduct("5c88ad8bb835e74a306db14e");

        assertTrue(responseObject.getMessageCode().equals(Messages.PRODUCT_ID_NOT_EXIST));
    }
}