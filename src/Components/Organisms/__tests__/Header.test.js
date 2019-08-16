import React from 'react';
import {shallow} from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../Redux/reducers'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux'
import Header from '../header/header';


const store = createStore(rootReducer, applyMiddleware(thunk));
configure({ adapter: new Adapter() });

describe('Header', () => {
let wrapper
beforeEach(()=> {
wrapper = shallow(
        <Provider store={store}><Header /></Provider>
    )
})


it('render the Header component', () => {
    expect(wrapper).toMatchSnapshot();
});
// it('Button exists',()=> {
//     //wrapper.find('button').at(1).simulate('click');
//     expect(wrapper.find('#Button')).toBeDefined();
// })



})