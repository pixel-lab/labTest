export default function(state={}, action){
    switch(action.type){
        case 'movie_list':
        return {...state, movies:action.payloads}
        case 'DIR_LIST':
        return {...state, directors:action.payload}
        default:
        return state
    }

} 