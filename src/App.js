import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
// import { Provider } from 'react-redux'
// import { connect } from 'react-redux'
// import store from './ReduxStore';
import './scss/main.scss';

import Home from './components/Home';

const App = () => {
    return (
        <HashRouter>
            <Home />
        </HashRouter>

    )
}

ReactDOM.render(
    <App />, document.getElementById("app")
)