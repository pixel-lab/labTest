
export default function(state={}, action){
    switch(action.type){
        case "movie_list" : 
            return {...state,movies: action.payloads}
        default: return state
    }
}