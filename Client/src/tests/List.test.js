import React from 'react';
import { shallow } from 'enzyme';
import List from '../containers/ProductSearch/List';
import ListItem from '../containers/ProductSearch/ListItem';

describe('Product Search List tests', () => {

  it('renders list-items', () => {
    const items = [
        {"id":"5c88ad8bb835e74a306db14e","name":"Iphone XS Max 64GB","price":1000},
        {"id":"5c88ad8bb835e732ba13221","name":"Iphone 6+ 64GB","price":1200}
    ];
    const wrapper = shallow(<List items={items} />, { disableLifecycleMethods: true });

    // Expect the wrapper object to be defined
    expect(wrapper.find('ListItem')).toBeDefined();
    expect(wrapper.find('ListItem')).toHaveLength(items.length);
  });
});
