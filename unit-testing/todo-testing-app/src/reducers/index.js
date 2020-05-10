import { combineReducers } from "redux";

import  success from "./successReducers";
import   GussedWords from "./gussedWordReducer";
import  SecretWord from "./secretWordReducer";
export default combineReducers({
    success,
    GussedWords,
    SecretWord
})