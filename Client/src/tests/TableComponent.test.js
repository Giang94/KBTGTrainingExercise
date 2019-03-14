// ShoppingCart.test.js
import React from 'react';
import { shallow } from 'enzyme';
import TableComponent from '../components/TableComponent';

describe('Table Component', () => {
  let wrapper;
  const fixtureColumns = [
    {name: 'Column One', key: 'key1'},
    {name: 'Column Two', key: 'key2'}
  ];
  const fixtureData = [
    {key1: 'valueA1', key2: 'valueA2'},
    {key1: 'valueB1', key2: 'valueB2'}
  ];

  beforeEach(() => wrapper = shallow(<TableComponent />));
  
  it('should have a table element after being rendered', () => {
    expect(wrapper.find('table').length).toEqual(1);
  });

  it('should have 1 default column after being rendered', () => {    
    expect(wrapper.find('table thead tr th').length).toBe(1);
  });

  it('should have 2 columns if the "columns" property is a 2-item array', () => {    
    wrapper.setProps({columns: fixtureColumns});
    expect(wrapper.find('table thead tr th').length).toBe(2);
  });

  it('should have no row after being rendered', () => {
    expect(wrapper.find('table tbody tr').length).toBe(0);
  });

  it('should have 2 rows if the "data" property is a 2-item array', () => {
    wrapper.setProps({data: fixtureData});
    expect(wrapper.find('table tbody tr').length).toBe(2);
  });

  it('should display data correcly in the first row and the second row', () => {
    wrapper.setProps({
      columns: fixtureColumns, 
      data: fixtureData
    });
    
    expect(wrapper.find('table tbody tr').first().find('td').first().text()).toBe('valueA1');
    expect(wrapper.find('table tbody tr').first().find('td').last().text()).toBe('valueA2');

    expect(wrapper.find('table tbody tr').last().find('td').first().text()).toBe('valueB1');
    expect(wrapper.find('table tbody tr').last().find('td').last().text()).toBe('valueB2');
  });

  it('should display data correcly in the first row and the second row, even if the data return functions', () => {
    wrapper.setProps({
      columns: fixtureColumns, 
      data: [
        {key1: () => ('valueA1'), key2: 'valueA2'},
        {key1: () => ('valueB1'), key2: 'valueB2'}
      ]
    });
    
    expect(wrapper.find('table tbody tr').first().find('td').first().text()).toBe('valueA1');
    expect(wrapper.find('table tbody tr').first().find('td').last().text()).toBe('valueA2');

    expect(wrapper.find('table tbody tr').last().find('td').first().text()).toBe('valueB1');
    expect(wrapper.find('table tbody tr').last().find('td').last().text()).toBe('valueB2');
  });
});
