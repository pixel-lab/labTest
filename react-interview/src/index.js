import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReduxThunk from 'redux-thunk'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import Reducer from './reducers'



const createStroreWithMiddleWare = applyMiddleware(ReduxThunk)(createStore);


ReactDOM.render(
    <Provider store={createStroreWithMiddleWare(Reducer)}>
        <App />
    </Provider>
    , document.getElementById('root'));

