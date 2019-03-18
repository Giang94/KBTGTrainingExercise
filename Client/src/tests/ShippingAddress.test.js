// ShippingAddress.test.js
import React from 'react';
import { shallow } from 'enzyme';
import ShippingAddress from '../containers/ShippingAddress';

describe('Shipping Address', () => {
  let wrapper;
  let history = { push: jest.fn() };
  beforeEach(() => wrapper = shallow(<ShippingAddress />, { disableLifecycleMethods: true }));

  it('should render a title', () => {     
    expect(wrapper.find('.title').text()).toEqual('Shipping Address');
  });

  it('should render a form', () => {     
    expect(wrapper.find('ShippingAddressForm').length).toBe(1);
  });

  // it('should render a form', () => {     
  //   expect(wrapper.find('form').length).toBe(1);
  // });

  // it('should allow to input full name info', () => {
  //   const inputValue = 'Nathawat Thumthiwong';
  //   const input = wrapper.find('input').at(0);    
  //   input.simulate('focus');
  //   input.simulate('change', { target: { value: inputValue } });
    
  //   expect(wrapper.state('fullName')).toBe(inputValue);
  // });

  // it('should allow to input address 1 info', () => {
  //   const inputValue = '3 Poomtpan 3 Building';
  //   const input = wrapper.find('input').at(1);    
  //   input.simulate('focus');
  //   input.simulate('change', { target: { value: inputValue } });
    
  //   expect(wrapper.state('address1')).toBe(inputValue);
  // });

  // it('should allow to input address 2 info', () => {
  //   const inputValue = 'Ladpao 3, Jompon';
  //   const input = wrapper.find('input').at(2);    
  //   input.simulate('focus');
  //   input.simulate('change', { target: { value: inputValue } });
    
  //   expect(wrapper.state('address2')).toBe(inputValue);
  // });

  // it('should allow to input address City, Province and PostCode info', () => {
  //   const cityValue = 'Chatujak';
  //   const provineValue = 'Bangkok';
  //   const postCodeValue = '10140';
  //   const cityInput = wrapper.find('input').at(3);
  //   const provinceInput = wrapper.find('input').at(4);
  //   const postCodeInput = wrapper.find('input').at(5);

  //   cityInput.simulate('focus');
  //   cityInput.simulate('change', { target: { value: cityValue } });

  //   provinceInput.simulate('focus');
  //   provinceInput.simulate('change', { target: { value: provineValue } });

  //   postCodeInput.simulate('focus');
  //   postCodeInput.simulate('change', { target: { value: postCodeValue } });
    
  //   expect(wrapper.state('city')).toBe(cityValue);
  //   expect(wrapper.state('provine')).toBe(provineValue);
  //   expect(wrapper.state('postCode')).toBe(postCodeValue);
  // });
});