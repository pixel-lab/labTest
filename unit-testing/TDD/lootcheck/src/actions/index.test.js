import React from 'react';
import {actionTypes,currentBalance} from './';

describe('`currentBalance` testing', ()=> {
    test('Return balance currectly',()=>{
        const Balance = 0;
        const expectedReturn = {type:actionTypes.CURRENT_BALANCE, currentBalance:Balance};
        expect(currentBalance(Balance)).toEqual(expectedReturn);
    })
});