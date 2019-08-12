import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from '../../Redux/reducers'
import Header from '../../Organisms/header/header'
import Category from '../../Organisms/displayCategory'
import Products from '../categories/categoryEcommerce'
import CategoryEntertainment from '../categories/categoryEntertainment'
import CategoryHealth from '../categories/categoryHealth'
import CategoryFood from '../categories/categoryFood'
import CategoryTravel from '../categories/categoryTravel'



const store = createStore(rootReducer, applyMiddleware(thunk));

configure({ adapter: new Adapter() });

describe('categoryEcom', () => {
    let wrapper,wrapper1,wrapper2,wrapper3,wrapper4;
    beforeEach(() => {
        wrapper = shallow(<Provider store={store}><Products /></Provider>);
        wrapper1=shallow(<Provider store={store}><CategoryEntertainment /></Provider>);
        wrapper2=shallow(<Provider store={store}><CategoryTravel/></Provider>);
        wrapper3=shallow(<Provider store={store}><CategoryHealth /></Provider>);
        wrapper4=shallow(<Provider store={store}><CategoryFood /></Provider>);
    });
    it('ecom page rendered', () => {
        expect(wrapper).toBeDefined();
        expect(wrapper1).toBeDefined();
        expect(wrapper2).toBeDefined();
        expect(wrapper3).toBeDefined();
        expect(wrapper4).toBeDefined();
    });

    it('input', () => {
        expect(wrapper.find('.vendor')).toBeDefined();
        expect(wrapper1.find('.vendor')).toBeDefined();
        expect(wrapper2.find('.vendor')).toBeDefined();
        expect(wrapper3.find('.vendor')).toBeDefined();
        expect(wrapper4.find('.vendor')).toBeDefined();
    });
    it('button', () => {
        expect(wrapper.find('.prodButton')).toBeDefined();
        expect(wrapper1.find('.prodButton')).toBeDefined();
        expect(wrapper2.find('.prodButton')).toBeDefined();
        expect(wrapper3.find('.prodButton')).toBeDefined();
        expect(wrapper4.find('.prodButton')).toBeDefined();
    });
    it('header', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Provider store={store}><Header /></Provider>)
            expect(wrapper.find('#head')).toBeDefined();
            expect(wrapper1.find('#head')).toBeDefined();
            expect(wrapper2.find('#head')).toBeDefined();
            expect(wrapper3.find('#head')).toBeDefined();
            expect(wrapper4.find('#head')).toBeDefined();
        });
    });
    it('category', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Provider store={store}><Category /></Provider>)
            expect(wrapper.find('.categories')).toBeDefined();
            expect(wrapper1.find('.categories')).toBeDefined();
            expect(wrapper2.find('.categories')).toBeDefined();
            expect(wrapper3.find('.categories')).toBeDefined();
            expect(wrapper4.find('.categories')).toBeDefined();
        });

    });


});
