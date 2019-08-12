import React from 'react';
import {shallow } from 'enzyme';
import Button from '../Button';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('button', () => {    
    let wrapper;
   beforeEach(() => {
    wrapper = shallow(<Button />)                                
  });
    it('button the component rendered', () => {
        expect(wrapper).toBeDefined();
    });
 
});
