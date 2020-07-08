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
        formStep: 5,
        names: [],
        giveItTo: [],
        clothes: false,
        garbageClothes: false,
        toys: false,
        books: false,
        other: false,
        bagValue: 0,
        location: "",
        organizationName: "",
        street: "",
        city: "",
        postCode: "",
        phoneNumber: "",
        date: "",
        hour: "",
        notes: ""
    })

    const BagsValue = () => {
        if (formData.bagValue === 0) {
            return (
                <span>-- wybierz --</span>
            )
        } else {
            return (
                <span>{formData.bagValue}</span>
            )
        }
    }

    const LocationValue = () => {
        if (formData.location === "") {
            return (
                <span>-- wybierz --</span>
            )
        } else {
            return (
                <span>{formData.location}</span>
            )
        }
    }

    const handleInputChange = (e) => {
        e.persist();
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }))

        if (e.target.checked === true) {
            setFormData(prevState => ({
                ...prevState,
                names: [...prevState.names, e.target.dataset.name]
            }))
        } else if (e.target.checked === false) {
            let filteredArr = formData.names.filter(item => item !== e.target.dataset.name);
            setFormData(prevState => ({
                ...prevState,
                names: filteredArr
            }))
        }
    }

    const handleOrganizationChange = (e) => {
        e.persist();
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleAddressAndDateChange = (e) => {
        e.persist();
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
            
        }))
    }

    const handleBagsSelect = (e) => {
        e.persist();
        const arrow = document.querySelector('.arrow');
        const list = document.querySelector('.second-row > ul');
        setFormData(prevState => ({
            ...prevState,
            bagValue: e.target.value
        }))
        console.log(formData)
        arrow.classList.remove('select-opened');
        list.classList.remove('visible')
    }

    const handleLocationSelect = (e) => {
        e.persist();
        const arrow = document.querySelector('.arrow');
        const list = document.querySelector('.second-row > ul');
        setFormData(prevState => ({
            ...prevState,
            location: e.target.dataset.id
        }))
        console.log(formData)
        arrow.classList.remove('select-opened');
        list.classList.remove('visible')
    }

    const handleNextStepClick = (e) => {
        e.preventDefault();
        setFormData(prevState => ({
            ...prevState,
            formStep: formData.formStep + 1
        }))
        console.log(formData)
    }

    const handlePrevStepClick = (e) => {
        e.preventDefault();
        setFormData(prevState => ({
            ...prevState,
            formStep: formData.formStep - 1
        }))
        console.log(formData)
    }

    const handleSelectClick = (e) => {
        const arrow = document.querySelector('.arrow');
        const list = document.querySelector('.second-row > ul');
        if (arrow.classList.contains('select-opened')) {
            arrow.classList.remove('select-opened');
            list.classList.remove('visible')

        } else {
            arrow.classList.add('select-opened')
            list.classList.add('visible')
        }
        
    }

    const [selectedOption, setSelectedOption] = useState({
        option1: "none",
        option2: "none",
        option3: "none",
        option4: "none",
        option5: "none"
    })

    const handleOptionClick = (e) => {
        e.persist();
        if (e.target.style.background === "rgb(250, 214, 72)") {
            setSelectedOption(prevState => ({
                ...prevState,
                [e.target.dataset.name]: "none"
            }))
            setFormData(prevState => ({
                ...prevState,
                [e.target.dataset.name]: false
            }))
        } else if (e.target.style.background === "none") {
            setSelectedOption(prevState => ({
                ...prevState,
                [e.target.dataset.name]: "#FAD648"
            }))
            setFormData(prevState => ({
                ...prevState,
                [e.target.dataset.name]: true
            }))
        }

        if (e.target.style.background === "none") {
            setFormData(prevState => ({
                ...prevState,
                giveItTo: [...prevState.giveItTo, e.target.dataset.val]
            }))
            console.log(formData.giveItTo)
        } else if (e.target.style.background === "rgb(250, 214, 72)") {
            let filteredArr = formData.giveItTo.filter(item => item !== e.target.dataset.val);
            setFormData(prevState => ({
                ...prevState,
                giveItTo: filteredArr
            }))
            console.log(formData.giveItTo)
        }

    }

    if (formData.formStep === 1) {
        return (
            <div className="steps-box">
                <span className="counter">Krok {formData.formStep}/4</span>
                <h3 className="step-title">Zaznacz co chcesz oddać</h3>
                <form>
                    <div className="all-inputs">
                        <div className="input-box">
                            <label className="checkbox">
                                <input type="checkbox" id="option-1" name="clothes" data-name="ubrania w dobrym stanie" checked={ formData.clothes } onChange={ handleInputChange } />
                                <span></span>
                            </label>
                            <label htmlFor="option-1">ubrania, które nadają się do ponownego użycia</label>
                        </div>
                        <div className="input-box">
                            <label className="checkbox">
                                <input type="checkbox" id="option-2" name="garbageClothes" data-name="zniszczone ubrania" checked={ formData.garbageClothes } onChange={ handleInputChange } />
                                <span></span>
                            </label>
                            <label htmlFor="option-2">ubrania, do wyrzucenia</label>
                        </div>
                        <div className="input-box">
                            <label className="checkbox">
                                <input type="checkbox" id="option-3" name="toys" data-name="zabawki" checked={ formData.toys } onChange={ handleInputChange } />
                                <span></span>
                            </label>
                            <label htmlFor="option-3">zabawki</label>
                        </div>
                        <div className="input-box">
                            <label className="checkbox">
                                <input type="checkbox" id="option-4" name="books" data-name="książki" checked={ formData.books } onChange={ handleInputChange }  />
                                <span></span>
                            </label>
                            <label htmlFor="option-4">książki</label>
                        </div>
                        <div className="input-box">
                            <label className="checkbox">
                                <input type="checkbox" id="option-5" name="other" data-name="inne" checked={ formData.other } onChange={ handleInputChange }  />
                                <span></span>
                            </label>
                            <label htmlFor="option-5">inne</label>
                        </div>
                    </div>
                    <button onClick={handleNextStepClick}>Dalej</button>
                </form>
            </div>
        )
    } else if (formData.formStep === 2) {

        return (
            <div className="steps-box">
            <span className="counter">Krok {formData.formStep}/4</span>
            <h3 className="step-title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
            <form>
                <div className="all-inputs">
                    <div className="input-box step-2">
                        <div className="first-row">
                            <p>Liczba 60l worków:</p>
                            <div className="select" onClick={handleSelectClick}>
                                <BagsValue />
                                <span className="arrow"></span>
                            </div>
                        </div>
                        <div className="second-row">
                            <ul className="bags-list">
                                <li name="bagValue" onClick={handleBagsSelect} value={1}>1</li>
                                <li name="bagValue" onClick={handleBagsSelect} value={2}>2</li>
                                <li name="bagValue" onClick={handleBagsSelect} value={3}>3</li>
                                <li name="bagValue" onClick={handleBagsSelect} value={4}>4</li>
                                <li name="bagValue" onClick={handleBagsSelect} value={5}>5</li>
                            </ul>   
                        </div>
                    </div>
                </div>
                <button onClick={handlePrevStepClick}>Wstecz</button>
                <button onClick={handleNextStepClick}>Dalej</button>
            </form>
            </div>
        )
    } else if (formData.formStep === 3) {

        return (
            <div className="steps-box">
            <span className="counter">Krok {formData.formStep}/4</span>
            <h3 className="step-title">Lokalizacja:</h3>
            <form>
                <div className="all-inputs">
                    <div className="input-box step-2">
                        <div className="first-row">
                            <div className="select" onClick={handleSelectClick}>
                                <LocationValue />
                                <span className="arrow"></span>
                            </div>
                        </div>
                        <div className="second-row location-list">
                            <ul>
                                <li name="location" onClick={ handleLocationSelect } data-id="Poznań">Poznań</li>
                                <li name="location" onClick={ handleLocationSelect } data-id="Warszawa">Warszawa</li>
                                <li name="location" onClick={ handleLocationSelect } data-id="Kraków">Kraków</li>
                                <li name="location" onClick={ handleLocationSelect } data-id="Wrocław">Wrocław</li>
                                <li name="location" onClick={ handleLocationSelect } data-id="Katowice">Katowice</li>
                            </ul>   
                        </div>
                        <div className="third-row">
                            <h3>Komu chcesz pomóc?</h3>
                            <div className="select-options">
                                <div className="option" data-name="option1" data-val="dzieciom" onClick={ handleOptionClick } style={{ background: `${selectedOption.option1}` }}>dzieciom</div>
                                <div className="option" data-name="option2" data-val="samotnym matkom" onClick={ handleOptionClick } style={{ background: `${selectedOption.option2}` }}>samotnym matkom</div>
                                <div className="option" data-name="option3" data-val="bezdomnym" onClick={ handleOptionClick } style={{ background: `${selectedOption.option3}` }}>bezdomnym</div>
                                <div className="option" data-name="option4" data-val="niepełnosprawnym" onClick={ handleOptionClick } style={{ background: `${selectedOption.option4}` }}>niepełnosprawnym</div>
                                <div className="option" data-name="option5" data-val="osobom starszym" onClick={ handleOptionClick } style={{ background: `${selectedOption.option5}` }}>osobom starszym</div>
                            </div>
                        </div>
                        <div className="fourth-row">
                            <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                            <input type="text" name="organizationName" value={ formData.organizationName } onChange={ handleOrganizationChange }></input>
                        </div>
                    </div>
                </div>
                <button onClick={ handlePrevStepClick }>Wstecz</button>
                <button onClick={ handleNextStepClick }>Dalej</button>
            </form>
            </div>
        )
    } else if (formData.formStep === 4) {
        return (
            <div className="steps-box">
            <span className="counter">Krok {formData.formStep}/4</span>
            <h3 className="step-title">Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
            <form>
                <div className="address__date__form">
                    <div className="address-box">
                        <h4>Adres odbioru:</h4>
                        <div className="address-box--row">
                            <label htmlFor="street">Ulica:</label>
                            <input type="text" id="street" name="street" onChange={ handleAddressAndDateChange } value={ formData.street } />
                        </div>
                        <div className="address-box--row">
                            <label htmlFor="city">Miasto:</label>
                            <input type="text" id="city" name="city" onChange={ handleAddressAndDateChange } value={ formData.city } />
                        </div>
                        <div className="address-box--row">
                            <label htmlFor="postCode">Kod pocztowy:</label>
                            <input type="text" id="postCode" name="postCode" onChange={ handleAddressAndDateChange } value={ formData.postCode } />
                        </div>
                        <div className="address-box--row">
                            <label htmlFor="phoneNumber">Numer telefonu:</label>
                            <input type="text" id="phoneNumber" name="phoneNumber" onChange={ handleAddressAndDateChange } value={ formData.phoneNumber } />
                        </div>
                    </div>
                    <div className="date-box">
                        <h4>Termin odbioru:</h4>
                        <div className="date-box--row">
                            <label htmlFor="date">Data:</label>
                            <input type="date" id="date" name="date" onChange={ handleAddressAndDateChange } value={ formData.date } />
                        </div>
                        <div className="date-box--row">
                            <label htmlFor="hour">Godzina:</label>
                            <input type="text" id="hour" name="hour" onChange={ handleAddressAndDateChange } value={ formData.hour } />
                        </div>
                        <div className="address-box--row">
                            <label htmlFor="notes">Uwagi dla kuriera:</label>
                            <textarea id="notes" name="notes" onChange={ handleAddressAndDateChange } value={ formData.notes } />
                        </div>
                    </div>
                </div>
                <button onClick={ handlePrevStepClick }>Wstecz</button>
                <button onClick={ handleNextStepClick }>Dalej</button>
            </form>
            </div>
        )
    } else if (formData.formStep === 5) {

        return (
            <div className="steps-box">
                <h3 className="step-title summary">Podsumowanie Twojej darowizny</h3>
                <div className="summary--first-row">
                    <h3>Oddajesz:</h3>
                    <div className="summary-box">
                        <div className="items">
                            <span></span>
                            <p>{formData.bagValue} worki, { formData.names.join(", ") } i chcesz przekazać rzeczy { formData.giveItTo.join(", ") } </p>
                        </div>
                        <div className="location">
                            <span></span>
                            <p>dla lokalizacji: {formData.location} </p>
                        </div>
                        <div className="address-date">
                            <div className="address">
                                <h3>Adres odbioru:</h3>
                                <div>
                                    <span>Ulica:</span>
                                    <p>{ formData.street }</p>
                                </div>
                                <div>
                                    <span>Miasto:</span>
                                    <p>{ formData.city }</p>
                                </div>
                                <div>
                                    <span>Kod pocztowy:</span>
                                    <p>{ formData.postCode }</p>
                                </div>
                                <div>
                                    <span>Numer telefonu:</span>
                                    <p>{ formData.phoneNumber }</p>
                                </div>
                            </div>
                            <div className="date">
                                <h3>Termin odbioru:</h3>
                                <div>
                                    <span>Data:</span>
                                    <p>{ formData.date }</p>
                                </div>
                                <div>
                                    <span>Godzina:</span>
                                    <p>{ formData.hour }</p>
                                </div>
                                <div>
                                    <span>Uwagi dla kuriera:</span>
                                    <p>{formData.notes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="summary--second-row"></div>
                <button onClick={ handlePrevStepClick }>Wstecz</button>
                <button onClick={ handleNextStepClick }>Dalej</button>
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

