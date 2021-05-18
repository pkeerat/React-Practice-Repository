import {combineReducers} from 'redux';

import {changeTheNumber} from './Reducer1';

const rootReducer = combineReducers({
    changeTheNumber
});

export default rootReducer;