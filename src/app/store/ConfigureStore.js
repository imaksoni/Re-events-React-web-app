import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rooReducers from './rootReducer'
import thunk from 'redux-thunk'
import { verifyAuth } from '../../features/auth/authActions'
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

export function ConfigureStore(){

    const store =  createStore(rooReducers(history), composeWithDevTools(applyMiddleware(thunk)))

    store.dispatch(verifyAuth());

    return store;
}   