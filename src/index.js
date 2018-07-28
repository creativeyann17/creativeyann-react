import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DefaultLayout from './layouts/DefaultLayout';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
    <BrowserRouter>
        <DefaultLayout />
    </BrowserRouter>)
    , document.getElementById('root'));
registerServiceWorker();
