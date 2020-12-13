import React from 'react';
import '../assets/css/main.css';
import profPic from "../images/profpic.jpg";
import {Link} from 'react-router-dom';

export default () => {

    return (
        <section id="sidebar">

            <section id="intro">
                <Link to="/" class="logo">
                    <img src={profPic} alt="Profile Picture" />
                </Link>
                <header>
                    <h2>Minh Trinh</h2>
                    <p>mtrinh11@gmail.com</p>
                </header>
            </section>

            <section class="blurb">
                <h2>About</h2>
                <p>I am a systematically creative and solutions-oriented software engineer with a diverse background in entertainment, economics, and political science. I value having an open mind as it bolsters my passion to always improve and be proactive in my problem-solving. In my work, I utilize skills that I honed during my work as an assistant in entertainment to create the best product: quick adaptation, collaboration, communication, efficiency, and grit. </p>
                <ul class="actions">
                    <li><a href="whoiam" class="button">Learn More</a></li>
                </ul>
            </section>

            <section id="footer">
                <ul class="icons">
                    <li><a href="https://www.linkedin.com/in/m-trinh/" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
                    <li><a href="mailto:mtrinh11@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
                </ul>
                <p class="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>.</p>
            </section>

        </section>
    )
}