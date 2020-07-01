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
        <>
            <HomeHeader />
            <HomeAboutApp />
        </>
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


const HomeAboutApp = () => {

    return (
        <section className="about__app__section">
            <div className="about__app__section--three-columns">
                <div className="column">
                    <h2>10</h2>
                    <h3>ODDANYCH WORKÓW</h3>
                    <p>lorem ipsum dolor sit amet, consectetur adipisc. Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat</p>
                </div>
                <div className="column">
                    <h2>5</h2>
                    <h3>WSPARTYCH ORGANIZACJI</h3>
                    <p>lorem ipsum dolor sit amet, consectetur adipisc. Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat</p>
                </div>
                <div className="column">
                    <h2>7</h2>
                    <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
                    <p>lorem ipsum dolor sit amet, consectetur adipisc. Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat</p>
                </div>
            </div>
            <div className="about__app__section--title">
                <div className="title">Wystarczą 4 proste kroki</div>
                <div className="bottom-img"></div>
            </div>
            <div className="about__app__section--steps">
                <div className="about__app__section--container">
                    <div className="step">
                        <div className="icons ico-1"></div>
                        <h4 className="step-title">Wybierz rzeczy</h4>
                        <span className="line"></span>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="step">
                        <div className="icons ico-2"></div>
                        <h4 className="step-title">Spakuj je</h4>
                        <span className="line"></span>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="step">
                        <div className="icons ico-3"></div>
                        <h4 className="step-title">Zdecyduj komu chcesz pomóc</h4>
                        <span className="line"></span>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="step">
                        <div className="icons ico-4"></div>
                        <h4 className="step-title">Zamów kuriera</h4>
                        <span className="line"></span>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <div className="about__app__section--btn">
                <Link to="/oddaj-rzeczy">
                    <p>ODDAJ RZECZY</p>
                </Link>
            </div>
        </section>
    )
}

export default Home;