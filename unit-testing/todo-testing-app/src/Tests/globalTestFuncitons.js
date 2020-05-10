import React, { Component } from 'react';
import checkPropTypes from 'check-prop-types';

import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers'

import {middleware} from '../configureStore';

export const ElementSearch = (wrapper, tag) => (
    wrapper.find(`[data-test="${tag}"]`)
)

export const checkProps = (component, props) => {
    return  checkPropTypes(component.propTypes, props, 'prop', component.name);
}

export const storeFactory = (initialstate) => {
    const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore);
    return createStoreWithMiddleWare(rootReducer,initialstate);
}

