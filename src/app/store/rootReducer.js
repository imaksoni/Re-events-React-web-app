import {combineReducers} from 'redux' ;
import authReducer from '../../features/auth/authReducer';
import eventReducers from '../../features/events/eventReducers';
import testReducer from '../../features/sandox/testReducer';
import modalReducer from '../common/modals/modalReducer';

const rootReducers = combineReducers({
    test :testReducer,
    event : eventReducers,
    modals : modalReducer,
    auth : authReducer
})

export default rootReducers;