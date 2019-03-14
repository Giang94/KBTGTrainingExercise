// ShoppingCart.test.js
import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCart from './ShoppingCart';

describe('Shopping Cart', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<ShoppingCart />));

  it('should render a title', () => {     
    expect(wrapper.find('.title').text()).toEqual('Shopping Cart');
  });

  it('should render a shopping list', () => {
    expect(wrapper.find('TableComponent').length).toBe(1);
  });

  it('should render the shipping method', () => {    
    expect(wrapper.find('.shipping-method').length).toBe(1);
    expect(wrapper.find('.shipping-method-value').text()).toBe('Cash on Delivery');
  });

  it('should render the shipping fee', () => {    
    expect(wrapper.find('.shipping-fee').length).toBe(1);
    expect(wrapper.find('.shipping-fee-value').text()).toBe('50.00 THB');
  });

  it('should render the sub total info when there is no item', () => {    
    expect(wrapper.find('.sub-total').length).toBe(1);
    expect(wrapper.find('.sub-total-label').text()).toBe('Subtotal (0 items):');
    expect(wrapper.find('.sub-total-value').text()).toBe('0.00 THB');
  });

  it('should render the sub total info when there is 1 item', () => {
    const itemListFixture = [
      {name: 'abc', quantity: '1', price: '123'}
    ];

    // wrapper.setProps({itemList: itemListFixture});
    wrapper = shallow(<ShoppingCart itemList={itemListFixture}/>);

    expect(wrapper.find('.sub-total').length).toBe(1);
    expect(wrapper.find('.sub-total-label').text()).toBe('Subtotal (1 item):');
    expect(wrapper.find('.sub-total-value').text()).toBe('123.00 THB');
    expect(wrapper.find('.total-value').text()).toBe('173.00 THB');
  });

  it('should render the sub total info when there is 4 item', () => {
    const itemListFixture = [
      {name: 'abc', quantity: '1', price: '123'},
      {name: 'xyz', quantity: '1', price: '222'},
      {name: 'www', quantity: '2', price: '10'},
    ];

    // wrapper.setProps({itemList: itemListFixture});
    wrapper = shallow(<ShoppingCart itemList={itemListFixture}/>);

    expect(wrapper.find('.sub-total').length).toBe(1);
    expect(wrapper.find('.sub-total-label').text()).toBe('Subtotal (4 items):');
    expect(wrapper.find('.sub-total-value').text()).toBe('365.00 THB');
    expect(wrapper.find('.total-value').text()).toBe('415.00 THB');
  });

});