package agile.test.exercise.model;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;
import java.util.Map;

@Document (collection = Order.COLLECTION_NAME)
public class Order extends GenericModel<ObjectId> {

    public static final String COLLECTION_NAME = "Order";

    private DeliveryAddress address;
    private Map<String, Integer> cartItems = new HashMap<>();
    private String subTotal;
    private String shippingFee;

    public DeliveryAddress getAddress() {
        return address;
    }

    public void setAddress(DeliveryAddress address) {
        this.address = address;
    }

    public Map<String, Integer> getCartItems() {
        return cartItems;
    }

    public void setCartItems(Map<String, Integer> cartItems) {
        this.cartItems = cartItems;
    }

    public String getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(String subTotal) {
        this.subTotal = subTotal;
    }

    public String getShippingFee() {
        return shippingFee;
    }

    public void setShippingFee(String shippingFee) {
        this.shippingFee = shippingFee;
    }
}
