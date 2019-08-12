import React from 'react';
import Header from './Header';
import {shallow} from 'enzyme';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header', () => {
let wrapper;
beforeEach(()=> {
wrapper = shallow(
        <Header />
    )
})


it('render the Header component', () => {
    expect(wrapper).toMatchSnapshot();
});
it('Button exists',()=> {
    //wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('#Header')).toBeDefined();
})



})