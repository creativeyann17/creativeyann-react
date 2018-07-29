import article1Props from '../../Articles/android-qt-chrono';
import article1Content from '../../Articles/android-qt-chrono.md';

import article2Props from '../../Articles/JAVALauncher';
import article2Content from '../../Articles/JAVALauncher.md';

import article3Props from '../../Articles/libconcurrent';
import article3Content from '../../Articles/libconcurrent.md';

import article4Props from '../../Articles/prime-c-java';
import article4Content from '../../Articles/prime-c-java.md';

const initialState = {
    articles: [
        {
            props: article1Props,
            content: article1Content,
        },
        {
            props: article2Props,
            content: article2Content,
        },
        {
            props: article3Props,
            content: article3Content,
        },
        {
            props: article4Props,
            content: article4Content,
        }
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
    default:
        return state;
    } 
}