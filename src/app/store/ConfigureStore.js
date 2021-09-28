import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rooReducers from './rootReducer'
import thunk from 'redux-thunk'
import { verifyAuth } from '../../features/auth/authActions'

export function ConfigureStore(){
    const store =  createStore(rooReducers, composeWithDevTools(applyMiddleware(thunk)))

    store.dispatch(verifyAuth());

    return store;
}   