import React from 'react';
import {shallow } from 'enzyme';
import Category from '../displayCategory';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from '../../Redux/reducers'



const store = createStore(rootReducer, applyMiddleware(thunk));

configure({ adapter: new Adapter() });

describe('categorydisplay', () => {    
    let wrapper;
   beforeEach(() => {
    wrapper = shallow(<Provider store={store}><Category /></Provider>)                                
  });
    it('category display rendered', () => {
        expect(wrapper).toBeDefined();
    });
});