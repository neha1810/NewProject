import React from 'react';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../Redux/reducers'
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../homeImages/homeProducts';

const store = createStore(rootReducer, applyMiddleware(thunk));
configure({ adapter: new Adapter() });

describe('HomePage', () => {
let wrapper;
beforeEach(()=> {
wrapper = shallow(
        <Provider store={store}><HomePage /></Provider>
    )
})


it('render the HomePage component', () => {
    expect(wrapper).toMatchSnapshot();
});
it('Button exists',()=> {

    expect(wrapper.find('.btn btn-primary')).toBeDefined();
})



})