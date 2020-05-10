import { createStore, applyMiddleware } from "redux";
import ReduxThunk  from 'redux-thunk'
import rootReducers from './reducers'


export const middleware = [ReduxThunk ];
const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore);

export default createStoreWithMiddleWare(rootReducers);



