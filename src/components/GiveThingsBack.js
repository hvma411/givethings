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
import HomeFooter from './HomeFooter';


const GiveThingsBack = (props) => {
    console.log(props)

    const handleLogOut = (e) => {
        fire.auth().signOut().then(() => {
            store.dispatch({ type: 'USER_LOGGED_OUT' })
            store.dispatch({ type: 'USER_EMAIL', email: "" })
            // return <Route exact path="/" render={() => (<Redirect to="/items" />)} />
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <>
            <header className="header__section" id="header-section">
                <div className="main-container">
                    <div className="header__section--left-column form-section-background"></div>
                    <div className="header__section--right-column form-section">
                        <div className="top__part">
                            <div className="top__part__container">
                                <div className="top__part--login-register">
                                    <div className="hello-user">Cześć, {props.userEmail}</div>
                                    <NavLink to="/oddaj-rzeczy" className="user-btn create-account">Oddaj rzeczy</NavLink>
                                    <NavLink to="/wylogowano" onClick={handleLogOut} className="user-btn">Wyloguj</NavLink>
                                </div>
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
                                <h1>Oddaj rzeczy, których już nie chcesz</h1>
                                <h2>POTRZEBUJĄCYM</h2>
                                <div className="bottom__part--img"></div>
                                <h3>Wystarczą 4 proste kroki:</h3>
                            </div>
                            <div className="bottom__part--btns">
                                <div className="main-box">
                                    <div className="rotated-box"></div>
                                    <div className="rotated-box"></div>
                                    <div className="rotated-box"></div>
                                    <div className="rotated-box"></div>
                                    <div className="text-box">
                                    <div className="step-box">
                                        <h3>1</h3>
                                        <span>Wybierz rzeczy</span>
                                    </div>
                                    <div className="step-box">
                                        <h3>2</h3>
                                        <span>Spakuj je w worki</span>
                                    </div>
                                    <div className="step-box">
                                        <h3>3</h3>
                                        <span>Wybierz fundację</span>
                                    </div>
                                    <div className="step-box">
                                        <h3>4</h3>
                                        <span>Zamów kuriera</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="give__things__back__section">
                <div className="important__info">
                    <div className="info-box">
                        <h3>Ważne!</h3>
                        <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                    </div>
                </div>
                <div className="form__part">
                    <div className="form__part--container">
                        <GiveThingsBackForm />
                    </div>
                </div>
            </section>
            <HomeFooter />
        </>
    )
}

const GiveThingsBackForm = () => {
    const [formData, setFormData] = useState({
        formStep: 1,
        clothes: false,
        garbageClothes: false,
        toys: false,
        books: false,
        other: false,
        bagsValue: 0
    })

    const handleInputChange = (e) => {
        e.persist();
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }))
    }

    const handleNextStepClick = (e) => {
        e.preventDefault();
        setFormData(prevState => ({
            ...prevState,
            formStep: formData.formStep + 1
        }))
        console.log(formData)
    }

    const handleSelectClick = (e) => {
        const arrow = document.querySelector('.arrow');
        if (arrow.classList.contains('select-opened')) {
            arrow.classList.remove('select-opened');
        } else {
            arrow.classList.add('select-opened')
        }
        
    }

    if (formData.formStep === 1) {
        return (
            <div className="steps-box">
                <span className="counter">Krok {formData.formStep}/4</span>
                <h3 className="step-title">Zaznacz co chcesz oddać</h3>
                <form>
                    <div className="input-box">
                        <label className="checkbox">
                            <input type="checkbox" id="option-1" name="clothes" checked={ formData.clothes } onChange={ handleInputChange } />
                            <span></span>
                        </label>
                        <label htmlFor="option-1">ubrania, które nadają się do ponownego użycia</label>
                    </div>
                    <div className="input-box">
                        <label className="checkbox">
                            <input type="checkbox" id="option-2" name="garbageClothes" checked={ formData.garbageClothes } onChange={ handleInputChange } />
                            <span></span>
                        </label>
                        <label htmlFor="option-2">ubrania, do wyrzucenia</label>
                    </div>
                    <div className="input-box">
                        <label className="checkbox">
                            <input type="checkbox" id="option-3" name="toys" checked={ formData.toys } onChange={ handleInputChange } />
                            <span></span>
                        </label>
                        <label htmlFor="option-3">zabawki</label>
                    </div>
                    <div className="input-box">
                        <label className="checkbox">
                            <input type="checkbox" id="option-4" name="books" checked={ formData.books } onChange={ handleInputChange }  />
                            <span></span>
                        </label>
                        <label htmlFor="option-4">książki</label>
                    </div>
                    <div className="input-box">
                        <label className="checkbox">
                            <input type="checkbox" id="option-5" name="other" checked={ formData.other } onChange={ handleInputChange }  />
                            <span></span>
                        </label>
                        <label htmlFor="option-5">inne</label>
                    </div>
                    <button onClick={handleNextStepClick}>Dalej</button>
                </form>
            </div>
        )
    } else if (formData.formStep > 1) {

        return (
            <div className="steps-box">
            <span className="counter">Krok {formData.formStep}/4</span>
            <h3 className="step-title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
            <form>
                <div className="input-box">
                    <p>Liczba 60l worków:</p>
                    <div className="select" onClick={handleSelectClick}>
                        <span>-- wybierz --</span>
                        <span className="arrow"></span>
                    </div>
                </div>
                <div className="list-box">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>       
                </div>
                <button onClick={handleNextStepClick}>Dalej</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state  => ({
    isUserLogged: state.isUserLogged,
    adminPermissions: state.adminPermissions,
    userEmail: state.userEmail
})

export default connect(mapStateToProps, {}) (GiveThingsBack)

