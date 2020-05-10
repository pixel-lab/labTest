import {CONSTRAINT} from '../actions/movileList'

export default function(state={}, action){
    debugger;
    //console.log(CONSTRAINT.CONSTRAINT_MOVIELIST);
    switch(action.type){
        case CONSTRAINT.CONSTRAINT_MOVIELIST :
           return  {...state, movies:action.payloads, sankha:'designer'}
        default:
            return state
    }
    
}