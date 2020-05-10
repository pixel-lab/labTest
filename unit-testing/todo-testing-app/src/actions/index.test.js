//another intrigation test
import React from 'react';
import {storeFactory} from '../Tests/globalTestFuncitons'
import moxios from 'moxios';
import {getSecretWord} from './';

describe('`getSecretWord` intrigation test',()=>{
    const SecretWord = "party";
    
    let wrapper;
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    })

    it('should return the guessword', ()=>{
        const store = storeFactory();
        moxios.wait(()=> {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: SecretWord
            }).then(() => {
                
            });
        });

        return store.dispatch(getSecretWord()).then(() =>{
            const newState = store.getState();
            expect(newState.SecretWord).toBe(SecretWord);
        })

    });

}); 