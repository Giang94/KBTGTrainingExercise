package agile.test.exercise.controller;

import agile.test.exercise.model.Product;
import agile.test.exercise.responseoject.GenericResponseObject;
import agile.test.exercise.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/product", method = RequestMethod.GET)
    public GenericResponseObject getAllProduct(@RequestParam(value = "age", required = false) String age, @RequestParam(value = "gender", required = false) String gender){
        Map<String, Object> requestParams = new HashMap<>();
        if (age != null){
            requestParams.put("age", age);
        }

        if (gender != null){
            requestParams.put("gender", gender);
        }

        return productService.getProducts(requestParams);
    }

    @RequestMapping(value = "/product/{id}", method = RequestMethod.GET)
    public GenericResponseObject getProduct(@PathVariable String id){
        return productService.getProduct(id);
    }

    @RequestMapping(value = "/product", method = RequestMethod.POST)
    public String createProduct(@RequestBody Product product){
        productService.createProduct(product);
        return "OK!!!!";
    }
}
