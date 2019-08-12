import React from 'react';
import {shallow } from 'enzyme';
import Input from '../Input';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('input', () => {    
    let wrapper;
   beforeEach(() => {
    wrapper = shallow(<Input/>)                                
  });
    it('input the component rendered', () => {
        expect(wrapper).toBeDefined();
    });
 
});