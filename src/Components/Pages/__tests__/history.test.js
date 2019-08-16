import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from '../../Redux/reducers'
import History from '../../Pages/history/history'


const store = createStore(rootReducer, applyMiddleware(thunk));

configure({ adapter: new Adapter() });

describe('history', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><History /></Provider>)
  });
  it('Detail History rendered', () => {
    expect(wrapper).toBeDefined();
  });

});
