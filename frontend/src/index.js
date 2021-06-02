import React from 'react';
import {Provider} from 'react-redux';
import ReactDom from 'react-dom';
import App from './App.js';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Store.js';

ReactDom.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
     document.getElementById('root'));

     serviceWorker.unregister();