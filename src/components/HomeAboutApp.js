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
// import { Provider } from 'react-redux';
// import { connect } from 'react-redux';
// import store from './ReduxStore';

const HomeAboutApp = () => {

    return (
        <section className="about__app__section" id="about-app-section">
            <div className="about__app__section--three-columns">
                <div className="columns-container">
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
                <NavLink to="/oddaj-rzeczy">
                    <p>ODDAJ RZECZY</p>
                </NavLink>
            </div>
        </section>
    )
}

export default HomeAboutApp