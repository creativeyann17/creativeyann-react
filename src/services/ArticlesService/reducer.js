import { ACTIONS } from './actions';

const initialState = {
    articles: []
};

export default function(state = initialState, action) {
    switch (action.type) {
    case ACTIONS.fetchArticles:
        return {...state, articles: action.articles}
    default:
        return state;
    } 
}