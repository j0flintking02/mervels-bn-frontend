import { combineReducers } from 'redux';
import user from './signupReducer';
import reverifyData from './reverifyReducer';
import verifyData from './verifyReducer';
import profileReducer from './profileReducer';
import loginReducer from './login';
import requestsReducers from './requestsReducers';

export default combineReducers({
    user,
    reverifyData,
    verifyData,
    profile: profileReducer,
    loginReducer,
    requests: requestsReducers
});