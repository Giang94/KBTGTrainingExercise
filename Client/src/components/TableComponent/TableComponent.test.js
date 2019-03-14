// ShoppingCart.test.js
import React from 'react';
import { shallow } from 'enzyme';
import TableComponent from './TableComponent';

describe("Table Component", () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<TableComponent />));

  // it("should render a table", () => {
  //   // expect(wrapper.containsMatchingElement(
  //   expect(wrapper.contains(
  //     <table className="order-list"></table>
  //   )).toEqual(true);
  // })
  it("should render a table", () => {
    expect(wrapper.find('table').length).toEqual(1);
  })
});
