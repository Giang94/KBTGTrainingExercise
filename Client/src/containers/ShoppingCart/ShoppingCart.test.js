// ShoppingCart.test.js
import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCart from './ShoppingCart';
import TableComponent from '../../components/TableComponent/TableComponent';

describe("Shopping Cart", () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<ShoppingCart />));

  it("should render a title", () => {     
    expect(wrapper.find('.title').text()).toEqual('Shopping Cart');
  });

  it("should render a shopping list", () => {    
    expect(wrapper.containsMatchingElement(
      <TableComponent></TableComponent>
    )).toEqual(true);
  });  

});