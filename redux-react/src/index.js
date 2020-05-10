import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import promiseMiddleware from 'redux-promise';

// import Redux depanddencies
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

//import reducers
import reducer from './reducers/index';


const createStoreWihMiddleware = applyMiddleware(promiseMiddleware)(createStore);







ReactDOM.render(
    <Provider store={createStoreWihMiddleware(reducer)}>
    <App />
    </Provider>
    , document.getElementById('root'));






