import React from 'react';
import '../assets/css/main.css';
import {Link} from 'react-router-dom'

export default () => {

    return (
        <header id="header">
            <h1><a href="/">Minh Trinh</a></h1>
            <nav class="links">
                <ul>
                    <li><Link to="/whoiam">who i am</Link></li>
                    <li><Link to="/resume">resume</Link></li>
                    <li><Link to="/projects">projects</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}