import React from 'react';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Share from '../share/share';

configure({ adapter: new Adapter() });

describe('Share', () => {
let wrapper;
beforeEach(()=> {
wrapper = shallow(
        <Share />
    )
})


it('render the Share component', () => {
    expect(wrapper).toMatchSnapshot();
});
// it('Button exists',()=> {
//     //wrapper.find('button').at(1).simulate('click');
//     expect(wrapper.find('#Share')).toBeDefined();
// })



})