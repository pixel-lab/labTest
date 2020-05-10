// import React from 'react';
// import {shallow} from 'enzyme';
// import {storeFactory} from './Tests/globalTestFuncitons'

// import App from './App';


import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from  './Tests/globalTestFuncitons';
import App,{UnconnectedApp} from './App';

/**
 * @function setup
 * @param {object} state - State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (state={}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}

describe('redux properties', () => {
    test('has access to `success` state', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });
    test('`getSecretWord` should be a function', () => {    
        const wrapper = setup();
        const successProp = wrapper.instance().props.getSecretWord;
        expect(successProp).toBeInstanceOf(Function);
    });
    test('has access to `success` state', () => {
        const GussedWords = {gussedWord:"train", letterMatchingCount: 3}    
        const wrapper = setup({ GussedWords });
        const successProp = wrapper.instance().props.GussedWords;
        expect(successProp).toEqual(GussedWords);
    });
    test('has access to `success` state', () => {
        const SecretWord ='party';  
        const wrapper = setup({ SecretWord });
        const successProp = wrapper.instance().props.SecretWord;
        expect(successProp).toBe(SecretWord);
    });
    describe('`getsecretword` trigger result', () => {
        it('should return a call at `componentdismount`', () => {
            
            const mockFunc = jest.fn();
            const props ={
                success: false,
                GussedWords:[],
                getSecretWord:mockFunc
            }
            const wrapper = shallow(<UnconnectedApp {...props} />);
            wrapper.instance().componentDidMount();
            const MockLength = mockFunc.mock.calls.length;            
            expect(MockLength).toBe(1)
        })
    })
});

