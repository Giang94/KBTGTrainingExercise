// ProductSearch.test.js
import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductSearch from '../containers/ProductSearch';
import SelectBox from '../components/Select';
import sinon from 'sinon';

describe('<ProductSearch />', () => {
    let wrapper;
    const ageValue = ['0-5', '5-10', '10-20', '20-30', '30-50', '50+']

    beforeEach(()=>{
        wrapper = shallow(<ProductSearch />)
    });

    it('should render its self', () => {
        expect(wrapper.length).toEqual(1)
    });

    it("calls handleChange when select Age: 0-5", () => {
        // arrange
        const onChange = jest.fn();
        // given
        const ageSelect = shallow(<SelectBox id="ageVAlue" data={ageValue} handleChange={onChange} />)
        expect(ageSelect.find('select')).toBeDefined();

        const form = ageSelect.find('select');
        form.props().onChange(ageValue[0]);
        expect(onChange).toBeCalledWith('0-5');
    });

    it("must call the mock method with button click", () => {
        const btn = wrapper.find("#searchBtn")
        btn.simulate("click", true)
        wrapper.setState({ isClickedSearch: 'clicked' });
        expect(wrapper.state('isClickedSearch')).toEqual('clicked')
    })

});
