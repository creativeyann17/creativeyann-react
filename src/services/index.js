import { combineReducers } from 'redux';
import LangServiceReducer from './LangService/reducer'
import ArticlesServiceReducer from './ArticlesService/reducer'

const rootReducer = combineReducers({
    LangServiceReducer,
    ArticlesServiceReducer,
});

export default rootReducer;