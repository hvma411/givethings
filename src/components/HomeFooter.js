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


const HomeFooter = () => {

    return (
        <footer className="footer__section" id="footer-section">
            <div className="main-container">
                <div className="form-box">
                    <h3 className="form-box--title">Skontaktuj się z nami</h3>
                    <span className="form-box--decoration"></span>
                    <form className="contact-form" id="contact-form">
                        <div className="contact-form--first-row">
                            <div className="name-box">
                                <label for="name">Wpisz swoje imię</label>
                                <input type="text" placeholder="Imię" name="name" id="name" />
                            </div>
                            <div className="email-box">
                                <label for="email">Wpisz swój email</label>
                                <input type="email" placeholder="Email" name="email" id="email" />
                            </div>
                        </div>
                        <div className="contact-form--second-row">
                            <div className="text-box">
                                <label for="text">Wpisz swoją wiadomość</label>
                                <textarea form="contact-form" name="text" id="text" placeholder="Cupcake ipsum dolor sit amet chupa chups muffin topping cake. Muffin caramels sweet apple pie marzipan croissant lemon drops caramels icing. Chocolate bar cheesecake cake chocolate bar jelly beans gingerbread chocolate cake chocolate bar." />
                            </div>
                        </div>
                        <button type="submit">Wyślij</button>
                    </form>
                </div>
                <div className="footer-info">
                    <h3>Copyright by Coders Lab</h3>
                </div>
            </div>
    </footer>
    )
}

export default HomeFooter