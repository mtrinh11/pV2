import '../assets/css/main.css'


export default () => {
    return (
        
        <div id="main">

            <article class="post">
                <header>
                    <div class="title">
                        <h2>Resume</h2>
                    </div>
                </header>

                <h2 style={{textAlign: 'center'}}>Education</h2>
                <h3 style={{lineHeight: '100%', fontSize: '80%', fontWeight: '400'}}>University of California, Berkeley, Class of 2018</h3>
                <h4 style={{fontWeight: '400', fontSize: '70%', Height: '100%'}}><i>B.A. Poltical Economy, Concentration in International Trade & Law</i></h4>

                <hr />

                <h2 style={{ textAlign: 'center'}}>Experience</h2>
                <div class="timeline">
                    <div class="container right">
                        <article className="jobs-container">
                            <div class="content" style={{paddingBottom: '1px'}}>
                                <header>
                                    <h4>Software Engineering Fellow</h4>
                                    <p>General Assembly Software Engineering Immersive </p>
                                </header>
                                <ul>
                                    <li>Participated in a full-time immersive, 3 month software engineering immersive, completing in-class projects, hackathons, and 
                                        personal projects focused on real-world applications of data science principles and best practices. Developed a portfolio of 
                                        individually and collaboratively focused in-class projects.</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div class="container right">
                        <article className="jobs-container">
                            <div class="content" style={{paddingBottom: '1px'}}>
                                <header>
                                    <h4>Agent Assistant</h4>
                                    <p> <a href="https://www.unitedtalent.com/">United Talent Agency</a> </p>
                                </header>
                                <ul>
                                    <li>Supported the department head for the comedy touring division.</li>
                                    <li>Organized live comedy tours for a roster of 30+ clients comprising A-list and Small Talent.</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div class="container right">
                        <article className="jobs-container">
                            <div class="content" style={{paddingBottom: '1px'}}>
                                <header>
                                    <h4>Contracts Administrator</h4>
                                    <p><a href="https://www.unitedtalent.com/">United Talent Agency</a></p>
                                </header>
                                <ul>
                                    <li>Reviewed and processed contracts for the entire department’s roster of 200 clients in a timely matter.</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div class="container right">
                        <article className="jobs-container">
                            <div class="content" style={{paddingBottom: '1px'}}>
                                <header>
                                    <h4>Administrative Assistant</h4>
                                    <p><a href="https://mavrickagency.com/">MAVRICK ARTIST AGENCY</a></p>
                                </header>
                                <ul>
                                    <li>Managed 500+ client files using inEntertainment, LA Casting, Casting Frontier, and Breakdown Express.</li>
                                    <li>Overlooked data entry, calendars, inter-database consistency, phone calls, and client intake.</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div class="container right">
                        <article className="jobs-container">
                            <div class="content" style={{paddingBottom: '1px'}}>
                                <header>
                                    <h4>Producer, CFO, Performer</h4>
                                    <p>jericho! Improv and Sketch Comedy</p>
                                </header>
                                <ul>
                                    <li>Managed a team of 12 to 15 improvisers that performed for live audiences of over 100 people Facilitated logistical fluidity and efficiency through the organization. </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div class="container right">
                        <article className="jobs-container">
                            <div class="content" style={{paddingBottom: '1px'}}>
                                <header>
                                    <h4>Writer, Producer, and Actor</h4>
                                    <p><a href="https://caltv.berkeley.edu/">caltv</a></p>
                                </header>
                                <ul>
                                <li>Organized, led and supplemented comedy-oriented video production Wrote, acted in, edited, and marketed comedic content that saw 1,000s of views</li>
                                </ul>
                            </div>
                        </article>
                    </div>

                </div>

                <hr />

            </article>

        </div>
    )
}