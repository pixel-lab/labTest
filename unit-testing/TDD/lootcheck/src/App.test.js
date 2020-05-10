import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

import {searchByAttr} from '../Test';


const setup = (state) => {
    return shallow(<App />)
}

describe('App component', ()=>{
    test('App should render without error', ()=>{});
    test('should have a header', ()=> {
        const wrapper = setup();
        expect(searchByAttr(wrapper,'heading').length).toBe(1);
    })
});