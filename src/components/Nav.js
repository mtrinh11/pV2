import React from 'react';
import '../assets/css/main.css';

export default () => {

    return (
        <header id="header">
            <h1><a href="/">Minh Trinh</a></h1>
            <nav class="links">
                <ul>
                    <li><a href="whoiam">who i am</a></li>
                    <li><a href="resume">resume</a></li>
                    <li><a href="projects">projects</a></li>
                    <li><a href="contact">contact</a></li>
                </ul>
            </nav>
        </header>
    )
}