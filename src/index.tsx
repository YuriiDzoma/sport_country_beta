import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { setupStore } from 'store/store';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from "react-intl";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <IntlProvider locale='en' defaultLocale="en">
                    <App/>
                </IntlProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
