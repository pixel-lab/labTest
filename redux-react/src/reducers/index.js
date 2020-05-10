
import { combineReducers } from "redux";
import movies from './allReducers';
const rootReducers = combineReducers({
    movies
})

export default rootReducers;