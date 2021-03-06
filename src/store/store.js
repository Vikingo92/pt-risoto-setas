import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { LoginReducers } from '../reducers/LoginReducers';
import { registerReducers } from '../reducers/registerReducers';
import { usersReducer } from '../reducers/usersReducers';
import ShoppingReducer from '../reducers/ShoppingReducer';

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    login: LoginReducers,
    register: registerReducers,
    users: usersReducer,
    shop: ShoppingReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)