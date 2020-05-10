import {GetletterMatchingCount} from '../helpers';
import axios from 'axios';
export const actionTypes ={
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD:'GUESS_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD'
}
export const GussedWord = (gussedWord) =>{    
    return function(dispatch, getState){
        const SecretWord = getState().SecretWord;        
        const letterMatchingCount = GetletterMatchingCount(gussedWord, SecretWord);
        dispatch({
            type:actionTypes.GUESS_WORD,
            payloads: {gussedWord,letterMatchingCount}
        })
        if(gussedWord === SecretWord){
            dispatch({
                type:actionTypes.CORRECT_GUESS
            })
        }
    }
}

export const getSecretWord = ()=> {
    return function (dispatch){
       return axios.get('http://localhost:3030/').then(response => 
        dispatch({
            type:actionTypes.SET_SECRET_WORD,
            payloads: response.data
        })
       ).catch((err) => {
           
       })
    }
}