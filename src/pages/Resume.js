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
                        <div class="content">
                            <h3 style={{lineHeight: '100%', fontSize: '80%'}}>UNITED TALENT AGENCY - ASSISTANT TO THE HEAD OF COMEDY TOURING</h3>
                            <p style={{lineHeight: '1%', fontSize: '90%'}}>January 2020 - July 2020 </p>
                            <div class="row">
                                <resumelist>
                                    <li>Worked on stand-up comedy tours by working with the talent team and buyers across America. </li>
                                    <li>Provided support with scheduling, arranging travel, expenses, and adminstrative tasks.</li>
                                </resumelist>
                            </div>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="content">
                            <h3 style={{lineHeight: '100%', fontSize: '80%'}}>UNITED TALENT AGENCY - Sales operations</h3>
                            <p style={{lineHeight: '1%', fontSize: '90%'}}>February 2019 - February 2020 </p>
                            <div class="row">
                                <resumelist>
                                    <li>Reviewed and processed contracts for shows in our database.</li>
                                    <li>Executed contracts between UTA, purchaser, and artist in a timely matter.</li>
                                </resumelist>
                            </div>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="content">
                            <h3 style={{lineHeight: '100%', fontSize: '80%'}}>Mavrick Artist AGENCY - Administrative ASSISTANT</h3>
                            <p style={{lineHeight: '1%', fontSize: '90%'}}>September 2018 - December 2018 </p>
                            <div class="row">
                                <resumelist>
                                    <li> Managed over 500 client files using inEntertainment, LA Casting, Casting Frontier, and Breakdown Express</li>
                                    <li>Overlooked data entry, calendars, inter-database consistency, phone calls, client intake</li>
                                </resumelist>
                            </div>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="content">
                            <h3 style={{lineHeight: '100%', fontSize: '80%'}}> jericho! - Producer, Chief Financial Officer, Performer</h3>
                            <p style={{lineHeight: '1%', fontSize: '90%'}}>February 2016 - May 2018 </p>
                            <div class="row">
                                <resumelist>
                                    <li> Performed improv comedy for paying audience.  Wrote, produced, and edited live sketches and videos as well.</li>
                                    <li> Oversaw all parts of the club including: management of team operations, media production, publicity, and financials.</li>
                                </resumelist>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </article>

        </div>
    )
}