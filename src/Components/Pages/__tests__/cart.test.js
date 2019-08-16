import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from '../../Redux/reducers'
import ProducList from '../../Pages/cart/cartList'
import Header from '../../Organisms/header/header'
import Total from '../../Organisms/total'


const store = createStore(rootReducer, applyMiddleware(thunk));

configure({ adapter: new Adapter() });

describe('cart', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Provider store={store}><ProducList /></Provider>)
    });
    it('cart page rendered', () => {
        expect(wrapper).toBeDefined();
    });
    it('button', () => {
        expect(wrapper.find('#checkout')).toBeDefined();
    });
    it('button', () => {
        expect(wrapper.find('#admin-button')).toBeDefined();
    });


    it('input', () => {
        expect(wrapper.find('.input-text-admin')).toBeDefined();
    });
    it('label', () => {
        expect(wrapper.find('.admin-label')).toBeDefined();
    });

    it('dialog', () => {
        expect(wrapper.find('.popup')).toBeDefined();
    });
    it('header', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Provider store={store}><Header /></Provider>)
            expect(wrapper.find('.head')).toBeDefined();
        });
    });
    it('total', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Provider store={store}><Total /></Provider>)
            expect(wrapper.find('.myTotal')).toBeDefined();
        });
    });

});
