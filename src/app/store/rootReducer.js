import {combineReducers} from 'redux' ;
import authReducer from '../../features/auth/authReducer';
import eventReducers from '../../features/events/eventReducers';
import ProfileReducer from '../../features/profiles/profileReducer';
import testReducer from '../../features/sandox/testReducer';
import asyncReducer from '../async/asyncReducer';
import modalReducer from '../common/modals/modalReducer';

const rootReducers = combineReducers({
    test :testReducer,
    event : eventReducers,
    modals : modalReducer,
    auth : authReducer,
    async: asyncReducer,
    profile: ProfileReducer
})

export default rootReducers;