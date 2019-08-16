import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../Pages/login/login';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from '../../Redux/reducers'


const store = createStore(rootReducer, applyMiddleware(thunk));

configure({ adapter: new Adapter() });

describe('login', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Provider store={store}><Login /></Provider>)
    });
    it('login page rendered', () => {
        expect(wrapper).toBeDefined();
    });
    it('button', () => {
        expect(wrapper.find('#login-button')).toBeDefined();

    });
    it('button', () => {
        expect(wrapper.find('#gButton')).toBeDefined();
    });
    it('button', () => {
        expect(wrapper.find('.signup-button')).toBeDefined();
    });

    it('input', () => {
        expect(wrapper.find('.input-text-login')).toBeDefined();
    });
    it('label', () => {
        expect(wrapper.find('.login-label')).toBeDefined();
    });

    it('dialog', () => {
        expect(wrapper.find('.popup')).toBeDefined();
    });



});
