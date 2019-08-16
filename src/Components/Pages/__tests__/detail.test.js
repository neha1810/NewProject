import React from 'react';
import {shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from '../../Redux/reducers'
import Detail from '../../Pages/detail/detail'


const store = createStore(rootReducer, applyMiddleware(thunk));

configure({ adapter: new Adapter() });

describe('cart', () => {    
    let wrapper;
   beforeEach(() => {
    wrapper = shallow(<Provider store={store}><Detail /></Provider>)                                
  });
    it('Detail page rendered', () => {
        expect(wrapper).toBeDefined();
    });
    it('button',()=>{
         expect(wrapper.find('#product-addtocart-button')).toBeDefined();   
     });
  
    it('dialog',()=>{
        expect(wrapper.find('.alert-dialog-description')).toBeDefined();   
    });

});
