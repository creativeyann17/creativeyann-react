import article1Props from '../../Articles/article1.js';
import article1Content from '../../Articles/article1.md';

const initialState = {
    articles: [
        {
            props: article1Props,
            content: article1Content,
        }
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
    default:
        return state;
    } 
}