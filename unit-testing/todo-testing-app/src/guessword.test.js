import React from 'react'
import {shallow} from 'enzyme'
import {ElementSearch} from './Tests/globalTestFuncitons'

import GuessWord from './guessword'

const setup = (props={}) => {
    return shallow( <GuessWord {...props} />);
}


describe('Guess word testing', () => {    
    it('Initially show the title',()=> {
        const wrapper = setup();
        expect(
            ElementSearch(wrapper, 'guess-title').length
        ).toBe(1);
    })
    describe('after the gussed', () => { 
        const GussedWords =[
            {guessWord:'tank', letterCount: 3},
            {guessWord:'water', letterCount: 2},
            {guessWord:'life', letterCount: 3},
        ]
        let  wrapper 

        beforeEach(() => {
            wrapper = setup({GussedWords});
        });
       

        it('gussed count title should show', ()=>{
            //console.log(wrapper.debug());
             expect(
                 ElementSearch(wrapper, 'gussed-words-title').length
             ).toBe(1)
        });
        it('TR length should increase', ()=>{            
             expect(
                 ElementSearch(wrapper, 'result-count').length
             ).toBe(GussedWords.length)
        })
    })
})