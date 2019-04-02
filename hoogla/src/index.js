import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './MainPage/MainPage.js';
import * as serviceWorker from './serviceWorker';
import './assets/css/bootstrap.css';
import './assets/css/main.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

ReactDOM.render(
    <div id="container">
        <Header></Header>
        <MainPage />
        <Footer />
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
