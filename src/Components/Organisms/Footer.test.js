import React from 'react';
import Footer from './Footer';
import {shallow} from 'enzyme';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Footer', () => {
let wrapper;
beforeEach(()=> {
wrapper = shallow(
        <Footer />
    )
})


it('render the Footer component', () => {
    expect(wrapper).toMatchSnapshot();
});
it('Button exists',()=> {
    //wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('#Footer')).toBeDefined();
})



})