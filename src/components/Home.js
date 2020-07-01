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

import HomeHeader from './HomeHeader';
import HomeAboutApp from './HomeAboutApp';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';

const Home = () => {

    return (
        <>
            <HomeHeader />
            <HomeAboutApp />
            <HomeAboutUs />
            <HomeWhoWeHelp />
        </>
    )
}

export default Home;