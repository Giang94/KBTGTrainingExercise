// ProductSearch.test.js
import React from 'react';
import { shallow } from 'enzyme';
import ProductSearch from './index';
describe("ProductSearch", () => {
  it("should render ProductSearch Component", () => {
    const wrapper = shallow(<ProductSearch />);
  });
});
