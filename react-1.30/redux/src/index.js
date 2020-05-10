import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//redux starting
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'


const storeWitmMiddleware = applyMiddleware()(createStore)



ReactDOM.render(
<Provider store={storeWitmMiddleware(reducers)}>
    <App />
</Provider>

, document.getElementById('root'));

