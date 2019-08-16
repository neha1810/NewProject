import React from 'react';
import {shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Label from '../Label';

configure({ adapter: new Adapter() });

describe('label', () => {    
    let wrapper;
   beforeEach(() => {
    wrapper = shallow(<Label />)                                
  });
    it('label the component rendered', () => {
        expect(wrapper).toBeDefined();
    });
 
});