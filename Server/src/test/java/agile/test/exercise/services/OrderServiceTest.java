package agile.test.exercise.services;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import agile.test.exercise.model.Order;
import agile.test.exercise.repository.OrderRepository;
import agile.test.exercise.responseoject.GenericResponseObject;

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
}
