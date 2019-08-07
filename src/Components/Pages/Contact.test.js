import React from 'react';
import Contact from './Contact';
import {shallow} from 'enzyme';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Contact', () => {
let wrapper;
beforeEach(()=> {
wrapper = shallow(
        <Contact />
    )
})


it('render the Contact component', () => {
    expect(wrapper).toMatchSnapshot();
});
it('Button exists',()=> {
    //wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('#Contact')).toBeDefined();
})



})