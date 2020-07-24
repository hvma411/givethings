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

    const [userMessage, setUserMessage] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [validateInfo, setValidateInfo] = useState({
        nameInfo: "none",
        emailInfo: "none",
        textInfo: "none",
        allInfo: "none",
    })

    const handleUserMessageChange = (e) => {
        e.persist();
        setUserMessage(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,   
            } 
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        validateForm(userMessage)
    } 

    const validateForm = (userMessage) => {
        const emailValidate = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const emailTest = emailValidate.test(userMessage.email);
        const nameValidate = userMessage.name.trim().split(/\s+/).length;
        const validateErrors = [];

        if(nameValidate > 1) {
            validateErrors.push("Twoje imię powinno być jednym wyrazem")
            setValidateInfo(prevState => ({
                ...prevState,
                nameInfo: "block"
            }))
        } else {
            setValidateInfo(prevState => ({
                ...prevState,
                nameInfo: "none"
            }))
        }

        if (userMessage.name === "") {
            validateErrors.push("Wpisz swoje imię.")
            setValidateInfo(prevState => ({
                ...prevState,
                nameInfo: "block"
            }))
        } else {
            setValidateInfo(prevState => ({
                ...prevState,
                nameInfo: "none"
            }))
        }

        if (!emailTest) {
            validateErrors.push("Popraw swój adres email")
            setValidateInfo(prevState => ({
                ...prevState,
                emailInfo: "block"
            }))
        } else {
            setValidateInfo(prevState => ({
                ...prevState,
                emailInfo: "none"
            }))
        }

        if (userMessage.message.length < 120) {
            validateErrors.push("Wiadomość powinna mieć minimum 120 znaków")
            setValidateInfo(prevState => ({
                ...prevState,
                textInfo: "block"
            }))
        } else {
            setValidateInfo(prevState => ({
                ...prevState,
                textInfo: "none"
            }))
        }

        if (userMessage.name === "" || userMessage.email === "" || userMessage.message === "") {
            validateErrors.push("Pola nie mogą być puste")
            setValidateInfo(prevState => ({
                ...prevState,
                allInfo: "initial"
            }))
        } else {
            setValidateInfo(prevState => ({
                ...prevState,
                allInfo: "none"
            }))
        }

        if (validateErrors.length < 1) {
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( userMessage )
            }).then(status => {
                console.log(status);
            }).catch(error => {
                console.log(error);
            });
        } else {
            console.log('popraw błędy')
        }
    }

    return (
        <footer className="footer__section" id="footer-section">
            <div className="main-container">
                <div className="form-box">
                    <h3 className="form-box--title">Skontaktuj się z nami</h3>
                    <span className="form-box--decoration"></span>
                    <form className="contact-form" id="contact-form" onSubmit={ formSubmit } >
                        <div className="contact-form--first-row">
                            <div className="name-box">
                                <label htmlFor="name">Wpisz swoje imię</label>
                                <input type="text" value={ userMessage.name } placeholder="Imię" name="name" id="name" onChange={ handleUserMessageChange } />
                                <div className="validation-info"><p style={{ display: `${ validateInfo.nameInfo }` }}>Imię powinno być jednym wyrazem</p></div>
                            </div>
                            <div className="email-box">
                                <label htmlFor="email">Wpisz swój email</label>
                                <input type="text" value={ userMessage.email } placeholder="Email" name="email" id="email" onChange={ handleUserMessageChange } />
                                <div className="validation-info"><p style={{ display: `${ validateInfo.emailInfo }` }}>Popraw adres email</p></div>
                            </div>
                        </div>
                        <div className="contact-form--second-row">
                            <div className="text-box">
                                <label htmlFor="text">Wpisz swoją wiadomość</label>
                                <textarea value={ userMessage.message } form="contact-form" name="message" id="text" onChange={ handleUserMessageChange } placeholder="Cupcake ipsum dolor sit amet chupa chups muffin topping cake. Muffin caramels sweet apple pie marzipan croissant lemon drops caramels icing. Chocolate bar cheesecake cake chocolate bar jelly beans gingerbread chocolate cake chocolate bar." />
                                <div className="validation-info"><p style={{ display: `${ validateInfo.textInfo }` }}>Wiadomość powinna mięc minimum 120 znaków</p></div>
                            </div>
                        </div>
                        <div className="submit-box">
                        <div className="validation-info all-inputs">
                            <p style={{ display: `${ validateInfo.allInfo }`}} className="empty-inputs">Pola nie mogą być puste</p>
                        </div>
                            <button type="submit">Wyślij</button>
                        </div>

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