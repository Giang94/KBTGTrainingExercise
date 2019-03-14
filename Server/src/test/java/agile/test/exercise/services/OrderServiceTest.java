package agile.test.exercise.services;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import agile.test.exercise.model.Order;
import agile.test.exercise.repository.OrderRepository;
import agile.test.exercise.responseoject.GenericResponseObject;

import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class OrderServiceTest {

	@Mock
	private OrderRepository orderRepository;

	@InjectMocks
	private OrderService orderService;

	@Test
	public void save_order_should_be_successful() {
		Order order = new Order();
		when(orderRepository.save(order)).thenReturn(order);

		GenericResponseObject response = orderService.createOrder(order);
		assertEquals("SUCCESS", response.getStatus());
	}
	
	@Test
	public void save_null_order_should_be_failed() {
		Order order = null;
		when(orderRepository.save(order)).thenThrow(new IllegalArgumentException());

		GenericResponseObject response = orderService.createOrder(order);
		assertEquals("FAILED", response.getStatus());
	}

	@Test
	public void get_all_order_should_return_data(){
		List<Order> expectedOrders = new ArrayList<>();
		expectedOrders.add(new Order());
		when(orderRepository.findAll()).thenReturn(expectedOrders);

		GenericResponseObject responseObject = orderService.getAllOrders();

		assertTrue(responseObject.getData() != null);
		assertFalse(((List)responseObject.getData()).isEmpty());
	}
}
