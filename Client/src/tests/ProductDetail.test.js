import React from 'react';
import { shallow } from 'enzyme';
import ProductDetail from '../containers/ProductDetail';
import SelectBox from '../components/Select';

describe('Product Detail tests', () => {
  let wrapper;
  const QValue = ['1', '2', '3', '4', '5']

  beforeEach(()=>{
      wrapper = shallow(<ProductDetail />, { disableLifecycleMethods: true })
  });

  it('renders <ProductDetail /> components', () => {
      expect(wrapper.length).toEqual(1)
  });

  it("calls handleChange when select Quantity: 1", () => {
      // arrange
      const onChange = jest.fn();
      // given
      const qualitySelect = shallow(<SelectBox id="QValue" data={QValue} handleChange={onChange} />, { disableLifecycleMethods: true })
      expect(qualitySelect.find('select')).toBeDefined();

      const form = qualitySelect.find('select');
      form.props().onChange(QValue[0]);
      expect(onChange).toBeCalledWith('1');
  });
});
