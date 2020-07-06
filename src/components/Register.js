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
import { register } from "react-scroll/modules/mixins/scroller";
import { fire } from "../firebase-config/firebase";
import store from './redux/store';

const Register = () => {

    const [registerForm, setRegisterForm] = useState({
        email: "",
        password: "",
        password2: "",
    })

    const [validateInfo, setValidateInfo] = useState({
        emailInfo: "none",
        passwordInfo: "none",
        password2Info: "none"
    })

    const handleFormChange = (e) => {
        e.persist();
        setRegisterForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        validateRegister();
        console.log(registerForm)
    }

    const registerUser = () => {
        fire.auth().createUserWithEmailAndPassword(registerForm.email, registerForm.password).catch(err => {
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorCode);
            console.log(errorMessage);
        }).then( () => {
            fire.auth().onAuthStateChanged((user) => {
                if (user) {
                    store.dispatch({ type: 'USER_LOGGED' })
                    store.dispatch({ type: 'USER_EMAIL', email: registerForm.email })
                    window.location = '/'

                }
            })
        })
    }

    const validateRegister = () => {
        const emailValidate = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const emailTest = emailValidate.test(registerForm.email);
        const validateErrors = [];

        if (!emailTest) {
            setValidateInfo(prevState => ({
                ...prevState,
                emailInfo: "block"
            }))
            validateErrors.push('err')
        } else {
            setValidateInfo(prevState => ({
                ...prevState,
                emailInfo: "none"
            }))
        }

        if (registerForm.password.length < 6) {
            setValidateInfo(prevState => ({
                ...prevState,
                passwordInfo: "block"
            }))
            validateErrors.push('err')
        } else {
            setValidateInfo(prevState => ({
                ...prevState,
                passwordInfo: "none"
            }))
        }
        if (registerForm.password !== registerForm.password2) {
            setValidateInfo(prevState => ({
                ...prevState,
                password2Info: "block"
            }))
            validateErrors.push('err')
        } else {
            setValidateInfo(prevState => ({
                ...prevState,
                password2Info: "none"
            }))
        }

        if (validateErrors.length > 0) {
            console.log(validateErrors);
        } else {
            registerUser();
        }
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
                <h3 className="title">Zarejestruj się</h3>
                <span className="decoration"></span>
                <form className="log-in-form" id="register-form" onSubmit={ handleFormSubmit }>
                    <div className="log-in-form--first-box">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" onChange={ handleFormChange } value={ registerForm.email } />
                        <div className="validate-info">
                            <p style={{ display: `${ validateInfo.emailInfo }`}}>Wpisz poprawny email</p>
                        </div>
                    </div>
                    <div className="log-in-form--second-box">
                        <label htmlFor="password">Hasło</label>
                        <input type="password" name="password" id="password" onChange={ handleFormChange } value={ registerForm.password } />
                        <div className="validate-info">
                            <p style={{ display: `${ validateInfo.passwordInfo }`}}>Hasło jest za krótkie</p>
                        </div>
                    </div>
                    <div className="log-in-form--third-box">
                        <label htmlFor="password2">Powtórz hasło</label>
                        <input type="password" name="password2" id="password2" onChange={ handleFormChange } value={ registerForm.password2 } />
                        <div className="validate-info">
                            <p style={{ display: `${ validateInfo.password2Info }`}}>Hasła nie są identyczne</p>
                        </div>
                    </div>
                </form>
                <div className="form-btns">
                        <NavLink to="/logowanie">Zaloguj się</NavLink>
                        <button form="register-form" className="button-border">Zarejestruj się</button>
                    </div>
            </div>
        </section>
    )
}

export default Register