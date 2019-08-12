import React from 'react';
import {shallow } from 'enzyme';
import Label from '../Label';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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