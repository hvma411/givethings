import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
//   Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import { Link } from "react-scroll";
// import { Provider } from 'react-redux'
// import { connect } from 'react-redux'
// import store from './ReduxStore';

const LoggedOut = () => {

    return (
        <section className="log-in-section">
            <div className="log-in-section--navigation">
                <div className="log-in-section--navigation--login-register">
                    <NavLink to="/logowanie" className="user-btn">Zaloguj</NavLink>
                    <NavLink to="/rejestracja" className="user-btn create-account">Załóż konto</NavLink>
                </div>
                <nav className="log-in-section--navigation--menu">
                    <ul>
                        <li><NavLink to="/" smooth="true" duration={1000} activeStyle={{ border: "1px solid #3C3C3C" }}>Start</NavLink></li>
                        <li><Link to="about-app-section" smooth="true" duration={1000} activestyle={{ border: "1px solid #3C3C3C" }}>O co chodzi?</Link></li>
                        <li><Link to="about-us-section" smooth="true" duration={1000} activestyle={{ border: "1px solid #3C3C3C" }}>O nas</Link></li>
                        <li><Link to="who-we-help-section" smooth="true" duration={1000} activestyle={{ border: "1px solid #3C3C3C" }}>Fundacja i organizacje</Link></li>
                        <li><Link to="footer-section" smooth="true" duration={1000} activestyle={{ border: "1px solid #3C3C3C" }}>Kontakt</Link></li>
                     </ul>
                </nav>
            </div>
            <div className="log-in-section--form">
                <h3 className="title">Wylogowanie nastąpiło pomyślnie!</h3>
                <span className="decoration"></span>
                <div className="form-btns logged-out">
                        <NavLink to="/" className="button-border">Strona główna</NavLink>
                </div>
            </div>
        </section>
    )
}

export default LoggedOut