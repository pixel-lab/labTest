import React from "react";
import {correctGuess, actionTypes} from './index';
import {shallow} from 'enzyme'


const setup = () => (
    shallow(<correctGuess/>)
)

describe('correctGuess should return load type', ()=>{
    it('should render without error', ()=> {
        expect(setup()).toEqual({type:actionTypes.CORRECT_GUESS.CORRECT_GUESS})
    });
});