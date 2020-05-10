import {combineReducers} from 'redux';
import movies from './movies_list';

const rootReducer = combineReducers({
    movies
});

export default rootReducer;