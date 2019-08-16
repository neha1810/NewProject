import React from 'react';
import {shallow } from 'enzyme';
import { configure } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16';
import rootReducer from '../../Redux/reducers'
import Card from '../card/Card';


const store = createStore(rootReducer, applyMiddleware(thunk));

configure({ adapter: new Adapter() });

describe('card', () => {    
    let wrapper;
   beforeEach(() => {
    wrapper = shallow(<Provider store={store}><Card /></Provider>)                                
  });

    it('Card the component rendered', () => {
        expect(wrapper).toBeDefined();
    });
 
});