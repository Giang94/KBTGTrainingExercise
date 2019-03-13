package agile.test.exercise.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;


/**
 * This is model of Product
 */

@Document(collection = Product.COLLECTION_NAME)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Product extends GenericModel<ObjectId> {

    public static final String COLLECTION_NAME = "Product";
    public static final String NAME_ATTR = "name";
    public static final String GENDER_NAME = "gender";
    public static final String PRICE_NAME = "price";

    private String name;
    private String brandName;
    private String gender;
    private String age;
    private int price;
    private ShippingMethdod shippingMethdod;
    private String imagePath;
    private ProductStatus status;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public ShippingMethdod getShippingMethdod() {
        return shippingMethdod;
    }

    public void setShippingMethdod(ShippingMethdod shippingMethdod) {
        this.shippingMethdod = shippingMethdod;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public ProductStatus getStatus() {
        return status;
    }

    public void setStatus(ProductStatus status) {
        this.status = status;
    }
}
