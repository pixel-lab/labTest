import {storeFactory} from './Tests/globalTestFuncitons';
import {GussedWord} from './actions';

describe('guess word intrigation test', ()=>{
    const SecretWord = 'party';// this should be same as reducerName
    const unsuccessfulGuseed = "train";
   
    describe('No word Gussed', ()=>{    
        let store;    
        const initialState = {SecretWord};
        beforeEach(()=>{
            store = storeFactory(initialState);            
        })
        it('update State correctly for unsuccesful guess',()=>{
            
            store.dispatch(GussedWord(unsuccessfulGuseed));
            const newState = store.getState();
            
            const expectState ={
                ...initialState,
                success:false,
                GussedWords: [
                    {gussedWord:unsuccessfulGuseed, letterMatchingCount:3}
                ]
            }            
            expect(newState).toEqual(expectState);
        });
        it('update State correctly for succesful guess',()=>{

            store.dispatch(GussedWord(SecretWord));
            const newState = store.getState();
            
            const expectState ={
                ...initialState,
                success:true,
                GussedWords: [
                    {gussedWord:SecretWord, letterMatchingCount:5}
                ]
            }            
            expect(newState).toEqual(expectState);
        }); 
    });
    
    describe('Some word Gussed', ()=>{
        let store;    
        const GussedWords =[{gussedWord:'agile', letterMatchingCount:1}];
        const initialState = {GussedWords,SecretWord}        
        beforeEach(()=>{
            store = storeFactory(initialState);            
        })

        it('update State correctly for unsuccesful guess',()=>{            
            store.dispatch(GussedWord(unsuccessfulGuseed));
            const newState = store.getState();            
            const expectState ={
                SecretWord,
                success:false,
                GussedWords: [
                    ...GussedWords,
                    {gussedWord:unsuccessfulGuseed, letterMatchingCount:3}
                ]
            }            
            expect(newState).toEqual(expectState);
        });
        it('update State correctly for succesful guess',()=>{
            store.dispatch(GussedWord(SecretWord));
            const newState = store.getState();            
            const expectState ={
                SecretWord,
                success:true,
                GussedWords: [
                    ...GussedWords,
                    {gussedWord:SecretWord, letterMatchingCount:5}
                ]
            }            
            expect(newState).toEqual(expectState);
        });
    })
})

