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
import Home from "./Home";
// import { Provider } from 'react-redux'
// import { connect } from 'react-redux'
// import store from './ReduxStore';

const HomeHeader = () => {

    return (
        <header className="header__section" id="header-section">
            <div className="main-container">
                <div className="header__section--left-column"></div>
                <div className="header__section--right-column">
                    <div className="top__part">
                        <div className="top__part__container">
                            <div className="top__part--login-register">
                                <NavLink to="/login" className="user-btn">Zaloguj</NavLink>
                                <NavLink to="/register" className="user-btn create-account">Załóż konto</NavLink>
                            </div>
                            <div className="top__part--nav">
                                <nav>
                                    <ul>
                                        <li><Link to="header-section" smooth={true} duration={1000} activestyle={{ border: "1px solid #3C3C3C" }}>Start</Link></li>
                                        <li><Link to="about-app-section" smooth={true} duration={1000} activestyle={{ border: "1px solid #3C3C3C" }}>O co chodzi?</Link></li>
                                        <li><Link to="about-us-section" smooth={true} duration={1000} activestyle={{ border: "1px solid #3C3C3C" }}>O nas</Link></li>
                                        <li><Link to="who-we-help-section" smooth={true} duration={1000} activestyle={{ border: "1px solid #3C3C3C" }}>Fundacja i organizacje</Link></li>
                                        <li><Link to="contact-section" smooth={true} duration={1000} activestyle={{ border: "1px solid #3C3C3C" }}>Kontakt</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="bottom__part">
                        <div className="bottom__part--title">
                            <h1>Zacznij pomagać!</h1>
                            <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                            <div className="bottom__part--img"></div>
                        </div>
                        
                        <div className="bottom__part--btns">
                            <ul>
                                <li><NavLink to="/oddaj-rzeczy" className="header--btn">ODDAJ RZECZY</NavLink></li>
                                <li><NavLink to="zorganizuj-zbiorke" className="header--btn">ZORGANIZUJ ZBIÓRKĘ</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader