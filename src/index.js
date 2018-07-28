import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

// global CSS
import './index.css';

// i18n
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_fr from 'react-intl/locale-data/fr';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './services';

// heroku things ...
import registerServiceWorker from './registerServiceWorker';

// layouts
import DefaultLayout from './layouts/DefaultLayout';

const createStoreWithMiddleware = applyMiddleware()(createStore);
addLocaleData([...locale_en, ...locale_fr]);

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <DefaultLayout />
        </BrowserRouter>    
    </Provider>
    )
    , document.getElementById('root'));
registerServiceWorker();
