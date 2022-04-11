import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from "./globalStyles";
import { Provider } from 'react-redux';
import App from './indexApp';
import {store} from './store';

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
