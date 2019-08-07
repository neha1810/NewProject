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
        expect(wrapper).toBeDefined;
    });
    // it('Table rendered ...',()=>{
    //     expect(wrapper.find('#regsearch-resulttable')).toBeDefined;   
    // });
    // it('Comment Box rendered ...',()=>{
    //     expect(wrapper.find('#cr_txt_additionalComments')).toBeDefined;     
    // });
    // it('accept button rendered ...',()=>{
    //     expect(wrapper.find('#accept')).toBeDefined;   
    // });
    // it('reject button rendered ...',()=>{
    //     expect(wrapper.find('#reject')).toBeDefined;   
    // });
    // it('should run handleClick function', function() {
    //     wrapper.find('#regapproved_dialog_toast').at(0).simulate('click');
    //     expect(wrapper).toBeDefined;
    // });
    // it('should run handleClick function', function() {
    //     wrapper.find('#accept').at(0).simulate('click');
    //     expect(wrapper).toBeDefined;
    // });
    // it('should run handleClick function', function() {
    //     wrapper.find('#reject').at(0).simulate('click');
    //     expect(wrapper).toBeDefined;
    // });
});
