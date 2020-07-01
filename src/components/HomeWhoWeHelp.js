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

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    const getData = async () => {
        setLoading(true);
        const events = await fire.firestore().collection('foundations')
        const dataArr = []
        await events.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                dataArr.push({ id: doc.id, ...doc.data() })
            });
        });
        setPosts(dataArr);
        setLoading(false);
    }

    useEffect( () => {
        getData();
    }, [])

    useEffect( () => {
        console.log(posts)
    }, [posts])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <section className="who__we__help__section" id="who-we-help-section">
            <div className="who__we__help__section--container">
                    <h2>Komu pomagamy?</h2>
                    <div className="decoration"></div>
                <ul className="section-organizations">
                    <li className="item"><NavLink to="/foundations">Fundacjom</NavLink></li>
                    <li className="item"><NavLink to="/organizations">Organizacjom pozarządowym</NavLink></li>
                    <li className="item"><NavLink to="/locals">Lokalnym zbiórkom</NavLink></li>
                </ul>
                <p className="database-information">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <div className="section-items">
                    <ul className="section-items--container">
                        {currentPosts.map(post => (
                            <li key={ post.id }>
                                <div className="left-box">
                                    <h3 className="left-box--name">{ post.title }</h3>
                                    <p className="left-box--mission">{ post.mission }</p>
                                </div>
                                <p className="necessary-things">{ post.necessaryThings }</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <Pagination postsPerPage={ postsPerPage } totalPosts={ posts.length } paginate={ paginate }/>
            </div>
        </section>
    )
}

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
        console.log(pageNumbers)
    }

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

export default HomeWhoWeHelp