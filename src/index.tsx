import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './components/context/AuthContext';
import NewsProvider from "src/components/context/NewsContext";
import {GlobalStyles} from "src/GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <NewsProvider>
                    <GlobalStyles/>
                    <App />
                </NewsProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
