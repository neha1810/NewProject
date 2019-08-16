import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddBalance from '../addBalance/addBalance';

configure({ adapter: new Adapter() });

describe('AddBalance', () => {
    let wrapper, wrapper1, wrapper2;
    beforeEach(() => {
        wrapper = shallow(
            <AddBalance />
        );
        wrapper1 = shallow(<AddBalance />)
        wrapper2 = shallow(<AddBalance />)
    })


    it('render the AddBalance component', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('input', () => {
        expect(wrapper.find('amount')).toMatchSnapshot();
        expect(wrapper.find('.a-button-input')).toMatchSnapshot();
        expect(wrapper1.find('.a-button-input')).toMatchSnapshot();
        expect(wrapper2.find('.a-button-input')).toMatchSnapshot();
    });

})