import { combineReducers } from 'redux';
import patientsVN from './patientsVN';
import patientsWorld from './patientsWorld';
import declarers from './declarers';
import accounts from './accounts';

const appReducers = combineReducers({
    patientsVN,
    patientsWorld,
    declarers,
    accounts
});

export default appReducers;