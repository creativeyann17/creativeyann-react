import { combineReducers } from 'redux';
import LangServiceReducer from './LangService/reducer'

const rootReducer = combineReducers({
    LangServiceReducer,
});

export default rootReducer;