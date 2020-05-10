import React, { Component } from 'react';
import {shallow} from 'enzyme';

import {ElementSearch,checkProps} from './Tests/globalTestFuncitons'
import Message from './message';


const setup  =(props={}) => (
    shallow(<Message {...props} />)
 )
  

describe('Render the Message Component', () => {
    it('Should Show message when success showing thrue',() => {
        const wrapper = setup({success:true});
       expect(ElementSearch(wrapper,'message-container').text().length).not.toBe(0);
    });
    it('Should not Show any message when the success return false',() => {
        const wrapper = setup({success:false});
       expect(ElementSearch(wrapper,'message-container').text()).toBe('');
    });
    it('propType should be Bool',() => {
       expect(checkProps(Message,{success: true})).toBeUndefined()
    });
})