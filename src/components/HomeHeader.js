import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
//   Link,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';
import { Link } from "react-scroll";
import { connect } from 'react-redux'
import { fire } from "../firebase-config/firebase";
import store from './redux/store'


const HomeHeader = (props) => {
    console.log(props.isUserLogged)

    const handleLogOut = (e) => {
        fire.auth().signOut().then(() => {
            store.dispatch({ type: 'USER_LOGGED_OUT' })
            store.dispatch({ type: 'USER_EMAIL', email: "" })
            // return <Route exact path="/" render={() => (<Redirect to="/items" />)} />
        }).catch((err) => {
            console.log(err)
        });
    }

    const UserBtns = ({isUserLogged}) => {
        console.log(isUserLogged)
        if (isUserLogged === true) {
            return (
                <div className="top__part--login-register">
                    <div className="hello-user">Cześć, {props.userEmail}</div>
                    <NavLink to="/oddaj-rzeczy" className="user-btn create-account">Oddaj rzeczy</NavLink>
                    <NavLink to="/wylogowano" onClick={handleLogOut} className="user-btn">Wyloguj</NavLink>
                </div>
            )
        } else if (isUserLogged === false) {
            return (
                <div className="top__part--login-register">
                    <NavLink to="/logowanie" className="user-btn">Zaloguj</NavLink>
                    <NavLink to="/rejestracja" className="user-btn create-account">Załóż konto</NavLink>
                </div>
            )

        }
    }

    return (
        <header className="header__section" id="header-section">
            <div className="main-container">
                <div className="header__section--left-column"></div>
                <div className="header__section--right-column">
                    <div className="top__part">
                        <div className="top__part__container">
                            <UserBtns isUserLogged={props.isUserLogged} />
                            <div className="top__part--nav">
                                <nav>
                                    <ul>
                                        <li><NavLink to="/" smooth="true" duration={1000} activeStyle={{ border: "1px solid #3C3C3C" }}>Start</NavLink></li>
                                        <li><Link to="about-app-section" smooth="true" duration={1000} activestyle={{ border: "1px solid #3C3C3C" }}>O co chodzi?</Link></li>
                                        <li><Link to="about-us-section" smooth="true" duration={1000} activestyle={{ border: "1px solid #3C3C3C" }}>O nas</Link></li>
                                        <li><Link to="who-we-help-section" smooth="true" duration={1000} activestyle={{ border: "1px solid #3C3C3C" }}>Fundacja i organizacje</Link></li>
                                        <li><Link to="footer-section" smooth="true" duration={1000} activestyle={{ border: "1px solid #3C3C3C" }}>Kontakt</Link></li>
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

const mapStateToProps = state  => ({
    isUserLogged: state.isUserLogged,
    adminPermissions: state.adminPermissions,
    userEmail: state.userEmail
})

export default connect(mapStateToProps, {}) (HomeHeader)