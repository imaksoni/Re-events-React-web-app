import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import rooReducers from './rootReducer'

export function ConfigureStore(){
    return createStore(rooReducers,devToolsEnhancer())
}   