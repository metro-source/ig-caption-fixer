import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from 'react-intl';
import messages from "./locale.json";

const defaultLocale = 'en';
const availableLanguages = Object.keys(messages);
const userLanguages = navigator.languages || ['en'];

const language = userLanguages.find(lang => availableLanguages.indexOf(lang) !== -1) || defaultLocale;

ReactDOM.render(
<IntlProvider messages={messages[language]} defaultLocale={defaultLocale} locale={language} >
    <App />
</IntlProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
