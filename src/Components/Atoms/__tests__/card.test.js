import React from 'react';
import {shallow } from 'enzyme';
import Card from '../card/Card';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Card', () => {    
    let wrapper;
   beforeEach(() => {
    wrapper = shallow(<Card />)                                
  });
    it('Card the component rendered', () => {
        expect(wrapper).toBeDefined();
    });
 
});