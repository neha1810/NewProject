import React from 'react';
import {shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../Image';

configure({ adapter: new Adapter() });

describe('image', () => {    
    let wrapper;
   beforeEach(() => {
    wrapper = shallow(<Image />)                                
  });
    it('image the component rendered', () => {
        expect(wrapper).toBeDefined();
    });
 
});