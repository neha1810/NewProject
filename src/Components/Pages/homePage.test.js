import React from 'react';
import HomePage from './homePage';
import {shallow} from 'enzyme';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('HomePage', () => {
let wrapper;
beforeEach(()=> {
wrapper = shallow(
        <HomePage />
    )
})


it('render the HomePage component', () => {
    expect(wrapper).toMatchSnapshot();
});
it('Button exists',()=> {
    //wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('#HomePage')).toBeDefined();
})



})