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
import { fire } from "../firebase-config/firebase";
import store from './redux/store';
import { connect } from 'react-redux'


const LogIn = (props) => {

    const [logInForm, setLogInForm] = useState({
        email: "",
        password: "",
    });

    const [validateInfo, setValidateInfo] = useState({
        display: "none"
    })


    const handleFormChange = (e) => {
        e.persist();
        setLogInForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const logInUser = () => {
        fire.auth().signInWithEmailAndPassword(logInForm.email, logInForm.password).catch(err => {
            const errorCode = err.code;
            const errorMessage = err.message;
            if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-email') {

                setValidateInfo({
                    display: "block"
                })
            } else {
                console.log(errorCode)
                setValidateInfo({
                    display: "none"
                })
            }
        }).then( () => {
            fire.auth().onAuthStateChanged((user) => {
                if (user) {
                    store.dispatch({ type: 'USER_LOGGED' })
                    store.dispatch({ type: 'USER_EMAIL', email: logInForm.email })
                    window.location = '/'
                }
            })
        })
    }

    const handleSubmitLogIn = (e) => {
        e.preventDefault();
        logInUser();
    }


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
                <h3 className="title">Zaloguj się</h3>
                <span className="decoration"></span>
                <form className="log-in-form" id="log-in-form" onSubmit={ handleSubmitLogIn }>
                    <div className="log-in-form--first-box">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" value={ logInForm.email } onChange={ handleFormChange } />
                        <div className="validate-info">
                            <p style={{ display: `${validateInfo.display}` }}>Email lub hasło są nieprawidłowe</p>
                        </div>
                    </div>
                    <div className="log-in-form--second-box">
                        <label htmlFor="password">Hasło</label>
                        <input type="password" name="password" id="password" value={ logInForm.password } onChange={ handleFormChange } />
                        <div className="validate-info">
                            <p style={{ display: `${validateInfo.display}` }}>Email lub hasło są nieprawidłowe</p>
                        </div>
                    </div>

                </form>
                <div className="form-btns">
                        <NavLink to="/rejestracja">Załóż konto</NavLink>
                        <button form="log-in-form" type="submit" className="button-border">Zaloguj się</button>
                    </div>
            </div>
        </section>
    )
}

const mapStateToProps = state  => ({
    isUserLogged: state.isUserLogged,
    adminPermissions: state.adminPermissions
})


export default connect(mapStateToProps, {}) (LogIn)