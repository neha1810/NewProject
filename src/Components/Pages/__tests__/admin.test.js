import React from 'react';
import {shallow } from 'enzyme';
import AddProduct from '../admin/addProduct';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from '../../Redux/reducers'



const store = createStore(rootReducer, applyMiddleware(thunk));

configure({ adapter: new Adapter() });

describe('admin', () => {    
    let wrapper;
   beforeEach(() => {
    wrapper = shallow(<Provider store={store}><AddProduct /></Provider>)                                
  });
    it('admin page rendered', () => {
        expect(wrapper).toBeDefined();
    });
    it('button',()=>{
         expect(wrapper.find('#admin-button')).toBeDefined();   
     });
     it('button',()=>{
        expect(wrapper.find('#admin-button')).toBeDefined();   
    });
  
    
    it('input',()=>{
        expect(wrapper.find('.input-text-admin')).toBeDefined();   
    });
    it('label',()=>{
        expect(wrapper.find('.admin-label')).toBeDefined();   
    });
  
    it('dialog',()=>{
        expect(wrapper.find('.popup')).toBeDefined();   
    });

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
    //     wrapper.find('#login-button').at(1).simulate('click');
    //     expect(wrapper).toBeDefined;
    // });

    //  it("should HandlequickFilter with button click", () => { 
    //     wrapper.setProps({}); 
    //     wrapper.setState({quickFilterObj:"test"}); 
    //     const button = wrapper.find('button#login-button') // find button based on id selector
    //         // make sure button is found
    //     button.simulate("click");                     // simulate click
    //     expect(wrapper.state().quickFilterObj.New.checked).toEqual(true);
    //   });
});
