import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import ProductSearch from './ProductSearch'

describe('<App />', () => {
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<ProductSearch />)
    });
    it('renders children <ProductSearch /> components', () => {
        expect(wrapper.length).toEqual(1)
    });
});
