import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from '../../Redux/reducers'
import Checkout from '../../Pages/checkout/checkout'


const store = createStore(rootReducer, applyMiddleware(thunk));

configure({ adapter: new Adapter() });

describe('checkout', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><Checkout /></Provider>)
  });
  it('checkout rendered', () => {
    expect(wrapper).toBeDefined();
  });

});