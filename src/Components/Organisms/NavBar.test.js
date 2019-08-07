import React from 'react';
import NavBar from './NavBar';
import {shallow} from 'enzyme';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('NavBar', () => {
let wrapper;
beforeEach(()=> {
wrapper = shallow(
        <NavBar />
    )
})


it('render the NavBar component', () => {
    expect(wrapper).toMatchSnapshot();
});
it('Button exists',()=> {
    //wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('#NavBar')).toBeDefined();
})



})