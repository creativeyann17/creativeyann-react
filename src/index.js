import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import DefaultLayout from './layouts/DefaultLayout';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './services';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <DefaultLayout />
        </BrowserRouter>    
    </Provider>
    )
    , document.getElementById('root'));
registerServiceWorker();
