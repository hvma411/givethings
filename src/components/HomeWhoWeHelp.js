import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
//   Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import { fire, db } from '../firebase-config/firebase';
import { Events } from "react-scroll";
// import { Provider } from 'react-redux'
// import { connect } from 'react-redux'
// import store from './ReduxStore';

const HomeWhoWeHelp = () => {

    const [showList, setShowList] = useState({
        foundations: true,
        organizations: false,
        locals: false
    })

    const handleClickFoundations = (e) => {
        setShowList({
            foundations: true,
            organizations: false,
            locals: false
        })
    }

    const handleClickOrganizations = (e) => {
        setShowList({
            foundations: false,
            organizations: true,
            locals: false
        })
    }

    const handleClickLocals = (e) => {
        setShowList({
            foundations: false,
            organizations: false,
            locals: true
        })
    }

    return (
        <section className="who__we__help__section" id="who-we-help-section">
            <div className="who__we__help__section--container">
                    <h2>Komu pomagamy?</h2>
                    <div className="decoration"></div>
                <ul className="section-organizations">
                    <li className="item"><button onClick={ handleClickFoundations }>Fundacjom</button></li>
                    <li className="item"><button onClick={ handleClickOrganizations }>Organizacjom pozarządowym</button></li>
                    <li className="item"><button onClick={ handleClickLocals }>Lokalnym zbiórkom</button></li>
                </ul>
                <p className="database-information">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <ListRender showList={ showList } />
            </div>
        </section>
    )
}

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    if (pageNumbers.length < 2) {
        return null
    } else {

        return (
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="pagination--number">
                        <button to="/" onClick={ () => paginate(number) }>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        )

    }
}


const FoundationsList = () => {

    const [foundationsItems, setFoundationsItems] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [currentFoundationsPage, setCurrentFoundationsPage] = useState(1);
    const [foundationsItemsPerPage, setFoundationsItemsPerPage] = useState(3);

    const getFoundationsData = async () => {
        const events = await fire.firestore().collection('foundations')
        const dataArr = []
        await events.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                dataArr.push({ id: doc.id, ...doc.data() })
            });
        });
        setFoundationsItems(dataArr);
    }

    useEffect( () => {
        getFoundationsData();
    }, [])

    const indexOfLastFoundationsItem = currentFoundationsPage * foundationsItemsPerPage;
    const indexOfFirstFoundationsItem = indexOfLastFoundationsItem - foundationsItemsPerPage;
    const currentFoundationsItems = foundationsItems.slice(indexOfFirstFoundationsItem, indexOfLastFoundationsItem)

    const paginate = (pageNumber) => setCurrentFoundationsPage(pageNumber)

    return (
        <>
            <div className="section-items">
            <ul className="section-items--container">
                {currentFoundationsItems.map(item => (
                    <li key={ item.id }>
                        <div className="left-box">
                            <h3 className="left-box--name">{ item.title }</h3>
                            <p className="left-box--mission">{ item.mission }</p>
                        </div>
                        <p className="necessary-things">{ item.necessaryThings }</p>
                    </li>
                ))}
            </ul>
            </div>
            <Pagination itemsPerPage={ foundationsItemsPerPage } totalItems={ foundationsItems.length } paginate={ paginate }/>
        </>
    )
    
}

const OrganizationsList = () => {
    const [organizationsItems, setOrganizationsItems] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [currentOrganizationsPage, setCurrentOrganizationsPage] = useState(1);
    const [organizationsItemsPerPage, setOrganizationsItemsPerPage] = useState(3);

    const getOrganizationsData = async () => {
        // setLoading(true);
        const events = await fire.firestore().collection('organizations')
        const dataArr = []
        await events.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                dataArr.push({ id: doc.id, ...doc.data() })
            });
        });
        setOrganizationsItems(dataArr);
        // setLoading(false);
    }

    useEffect( () => {
        getOrganizationsData();
    }, [])

    const indexOfLastOrganizationsItem = currentOrganizationsPage * organizationsItemsPerPage;
    const indexOfFirstOrganizationsItem = indexOfLastOrganizationsItem - organizationsItemsPerPage;
    const currentOrganizationsItems = organizationsItems.slice(indexOfFirstOrganizationsItem, indexOfLastOrganizationsItem)

    const paginate = (pageNumber) => setCurrentOrganizationsPage(pageNumber)

    return (
        <>
            <div className="section-items">
            <ul className="section-items--container">
                {currentOrganizationsItems.map(item => (
                    <li key={ item.id }>
                        <div className="left-box">
                            <h3 className="left-box--name">{ item.title }</h3>
                            <p className="left-box--mission">{ item.mission }</p>
                        </div>
                        <p className="necessary-things">{ item.necessaryThings }</p>
                    </li>
                ))}
            </ul>
            </div>
            <Pagination itemsPerPage={ organizationsItemsPerPage } totalItems={ organizationsItems.length } paginate={ paginate }/>
        </>
    )
}


const LocalsList = () => {
    const [localsItems, setLocalsItems] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [currentLocalsPage, setCurrentLocalsPage] = useState(1);
    const [localsItemsPerPage, setLocalsItemsPerPage] = useState(3);

    const getLocalsData = async () => {
        // setLoading(true);
        const events = await fire.firestore().collection('localCollections')
        const dataArr = []
        await events.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                dataArr.push({ id: doc.id, ...doc.data() })
            });
        });
        setLocalsItems(dataArr);
        // setLoading(false);
    }

    useEffect( () => {
        getLocalsData();
    }, [])


    const indexOfLastLocalsItem = currentLocalsPage * localsItemsPerPage;
    const indexOfFirstLocalsItem = indexOfLastLocalsItem - localsItemsPerPage;
    const currentLocalsItems = localsItems.slice(indexOfFirstLocalsItem, indexOfLastLocalsItem)

    const paginate = (pageNumber) => setCurrentLocalsPage(pageNumber)

    return (
        <>
            <div className="section-items">
            <ul className="section-items--container">
                {currentLocalsItems.map(item => (
                    <li key={ item.id }>
                        <div className="left-box">
                            <h3 className="left-box--name">{ item.title }</h3>
                            <p className="left-box--mission">{ item.mission }</p>
                        </div>
                        <p className="necessary-things">{ item.necessaryThings }</p>
                    </li>
                ))}
            </ul>
            </div>
            <Pagination itemsPerPage={ localsItemsPerPage } totalItems={ localsItems.length } paginate={ paginate }/>
        </>
    )
}

const ListRender = ({ showList }) => {
    console.log(showList)

    if (showList.foundations && !showList.organizations && !showList.locals) {
        console.log('works')
        return (
            <FoundationsList />
        )
    } else if (!showList.foundations && showList.organizations && !showList.locals) {
        return (
            <OrganizationsList />
        )
    } else if (!showList.foundations && !showList.organizations && showList.locals) {
        return (
            <LocalsList />
        )
    }
}

export default HomeWhoWeHelp