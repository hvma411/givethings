import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import store from './components/redux/store';
import './scss/main.scss';

import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import LoggedOut from './components/LoggedOut';
import GiveThingsBack from './components/GiveThingsBack';


const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/logowanie" component={ LogIn } />
                <Route path="/rejestracja" component={ Register } />
                <Route path="/wylogowano" component={ LoggedOut } />
                <Route path="/oddaj-rzeczy" component={ GiveThingsBack } />
            </Switch>
        </HashRouter>

    )
}

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, document.getElementById("app")
)