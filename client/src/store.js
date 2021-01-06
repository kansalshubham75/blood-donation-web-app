import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from './reducers/user';

const middleware=[thunk]

const store = createStore(
                userReducer,
                compose(
                    applyMiddleware(...middleware),
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
                );


export default store