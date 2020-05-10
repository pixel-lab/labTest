import {correctGuess, actionTypes} from '../actions';
import  succerootReducerss from "./successReducers"




describe ('succerootReducerss', ()=> {
    it('initially the state should return `false`',()=> {
        expect(succerootReducerss(undefined,{})).toBe(false);
    });

    it('shold return `true` when actioncreator passed',()=> {
        expect(succerootReducerss(undefined,{type:actionTypes.CORRECT_GUESS})).toBe(true);
    })
})
