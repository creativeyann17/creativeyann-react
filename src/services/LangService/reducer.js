import { ACTIONS } from './actions';
import { LANG_DEFAULT } from  '../../constants';

const initialState = {
    lang: LANG_DEFAULT
};

export default function(state = initialState, action) {
    switch (action.type) {
    case ACTIONS.CHANGE_LANG:
        return {...state, lang: action.lang}
    default:
        return state;
    } 
}