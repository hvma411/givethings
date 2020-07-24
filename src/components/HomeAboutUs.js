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

const HomeAboutUs = () => {

    return (
        <section className="about__us__section" id="about-us-section">
            <div className="main-container">
                <div className="about__us__section--left-column columns">
                    <h3>O nas</h3>
                    <div className="decoration"></div>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <div className="signature--position">
                        <div className="signature"></div>
                    </div>
                </div>
                <div className="about__us__section--right-column columns"></div>
            </div>
        </section>
    )
}

export default HomeAboutUs