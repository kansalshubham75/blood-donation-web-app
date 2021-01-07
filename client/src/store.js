import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { alertReducer } from './reducers/alert';
import { userReducer } from './reducers/user';

const middleware = [thunk]

const store = createStore(
    combineReducers({ user : userReducer , alert : alertReducer}),
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);


export default store