import React from 'react';
import '../assets/css/main.css';
import Nav from './Nav'
import { Switch, Route } from 'react-router-dom';

import Sidebar from './Sidebar'

import Homepage from '../pages/HomePage'
import Whoiam from '../pages/Whoiam'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'


export default () => {

    return (
        <div id="wrapper">
            <Nav />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={ (props) => (
                        <Homepage />
                    )}
                />
                <Route
                    path="/whoiam"
                    component={ (props) => (
                        <Whoiam />
                    )}
                />
                <Route
                    exact
                    path="/resume"
                    component={ (props) => (
                        <Resume />
                    )}
                />
                <Route
                    exact
                    path="/contact"
                    component={ (props) => (
                        <Contact />
                    )}
                />
                <Route
                    exact
                    path="/projects"
                    component={ (props) => (
                        <Projects />
                    )}
                />
            </Switch>
            <Sidebar />  
        </div>
    )
}