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

const HomeWhoWeHelp = () => {

    return (
        <section className="who__we__help__section" id="who-we-help-section">
            <div className="who__we__help__section--container">
                    <h2>Komu pomagamy?</h2>
                    <div className="decoration"></div>
                <ul className="section-items">
                    <li className="item"><NavLink to="/foundations">Fundacjom</NavLink></li>
                    <li className="item"><NavLink to="/organizations">Organizacjom pozarządowym</NavLink></li>
                    <li className="item"><NavLink to="/locals">Lokalnym zbiórkom</NavLink></li>
                </ul>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <ul className="section-organizations">
                    <li>fff</li>
                    <li>fff</li>
                    <li>fff</li>
                </ul>
            </div>
        </section>
    )
}

export default HomeWhoWeHelp