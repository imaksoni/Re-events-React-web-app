import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rooReducers from './rootReducer'
import thunk from 'redux-thunk'

export function ConfigureStore(){
    return createStore(rooReducers, composeWithDevTools(applyMiddleware(thunk)))
}   