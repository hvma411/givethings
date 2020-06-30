import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
// import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// import { Provider } from 'react-redux'
// import { connect } from 'react-redux'
// import store from './ReduxStore';

const Home = () => {

    return (
        <HomeHeader />
    )
}

const HomeHeader = () => {

    return (
        <header className="header__section">
            <div className="main-container">
                <div className="header__section--left-column"></div>
                <div className="header__section--right-column">
                    <div className="top__part">
                        <div className="top__part__container">
                            <div className="top__part--login-register">
                                <Link to="/login" className="user-btn">Zaloguj</Link>
                                <Link to="/register" className="user-btn create-account">Załóż konto</Link>
                            </div>
                            <div className="top__part--nav">
                                <nav>
                                    <ul>
                                        <li><NavLink exact to="/" activeStyle={{ border: "1px solid #3C3C3C" }}>Start</NavLink></li>
                                        <li><NavLink to="/whatabout" activeStyle={{ border: "1px solid #3C3C3C" }}>O co chodzi?</NavLink></li>
                                        <li><NavLink to="/about" activeStyle={{ border: "1px solid #3C3C3C" }}>O nas</NavLink></li>
                                        <li><NavLink to="/foundationandorganization" activeStyle={{ border: "1px solid #3C3C3C" }}>Fundacja i organizacje</NavLink></li>
                                        <li><NavLink to="/contact" activeStyle={{ border: "1px solid #3C3C3C" }}>Kontakt</NavLink></li>
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
                                <li><Link to="/oddaj-rzeczy" className="header--btn">ODDAJ RZECZY</Link></li>
                                <li><Link to="zorganizuj-zbiorke" className="header--btn">ZORGANIZUJ ZBIÓRKĘ</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home;