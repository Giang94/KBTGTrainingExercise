// ShippingAddress.test.js
import React from 'react';
import { shallow } from 'enzyme';
import ShippingAddress from '../containers/ShippingAddress';

describe('Shipping Address', () => {
  let wrapper;
  let history = { push: jest.fn() };
  beforeEach(() => wrapper = shallow(<ShippingAddress />));

  it('should render a title', () => {     
    expect(wrapper.find('.title').text()).toEqual('Shipping Address');
  });

  it('should render a form', () => {     
    expect(wrapper.find('ShippingAddressForm').length).toBe(1);
  });


});