import React from 'react';
import {shallow} from 'enzyme';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../Redux/reducers'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../navbar/navBar';

const store = createStore(rootReducer, applyMiddleware(thunk));
configure({ adapter: new Adapter() });

describe('NavBar', () => {
let wrapper;
beforeEach(()=> {
wrapper = shallow(
        <Provider store={store}><NavBar /> </Provider>
    )
})


it('render the NavBar component', () => {
    expect(wrapper).toMatchSnapshot();
});




})