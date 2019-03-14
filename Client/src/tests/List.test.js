import React from 'react';
import { shallow } from '../enzyme';

import List from '../ProductSearch/List';

describe('Product Search List tests', () => {

  it('renders list-items', () => {
    const items = [
        {"id":"5c88ad8bb835e74a306db14e","name":"Iphone XS Max 64GB","price":1000},
        {"id":"5c88ad8bb835e732ba13221","name":"Iphone 6+ 64GB","price":1200}
    ];
    const wrapper = shallow(<List items={items} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(items.length);
  });

  it('renders a list item', () => {
    const items = ['Iphone 6+ 64GB'];
    const wrapper = shallow(<List items={items} />);

    // Check if an element in the Component exists
    expect(wrapper.contains(<li key='Iphone 6+ 64GB' className="item">Iphone 6+ 64GB</li >)).toBeTruthy();
  });

  it('renders correct text in item', () => {
    const items = ['Iphone XS Max 64GB', 'Iphone 6+ 64GB'];
    const wrapper = shallow(<List items={items} />);

    //Expect the child of the first item to be an array
    expect(wrapper.find('.item').get(0).props.children).toEqual('Iphone XS Max 64GB');
  });
});
