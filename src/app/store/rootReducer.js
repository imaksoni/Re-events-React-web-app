import {combineReducers} from 'redux' ;
import eventReducers from '../../features/events/eventReducers';
import testReducer from '../../features/sandox/testReducer';

const rootReducers = combineReducers({
    test :testReducer,
    event : eventReducers
})

export default rootReducers;