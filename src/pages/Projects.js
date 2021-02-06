import sudokuPic from '../images/Capture.png'
import yourSpotPic from '../images/YourSpotCapture.PNG'
import mementoPicOne from '../images/memento1.PNG'
import mementoPicTwo from '../images/memento2.PNG'
import pluckPluckPic from '../images/PluckChooseCapture.PNG'
import floristaHomePic from '../images/floristahomepagecapture.PNG'
import floristaProfilePic from '../images/floristaprofilepagecapture.PNG'


export default () => {
    return (

        <article class="post">

            <header>
                <div class="title">
                    <h2>Projects</h2>
                    <p>would you like to try a sample?</p>
                </div>
            </header>

            <div id="main">

            <article class="post">
                    <header>
                        <div class="title">
                            <h2><a href="http://florista-dev.us-west-1.elasticbeanstalk.com/">Florista</a></h2>
                        </div>
                        <div class="meta">
                            <time class="published" datetime="2021-1-12">January 12, 2021</time>
                        </div>
                    </header>
                    <a href="http://florista-dev.us-west-1.elasticbeanstalk.com//" class="image featured">
                        <img src={floristaHomePic} alt="Florista Home Page Picture" />
                        <img src={floristaProfilePic} alt="Florista Profile Page Picture" />
                    </a>
                    <p>
                        Florista is a Full-Stack app using Postgresql, Express, React, and Node.js where Users can
                        track the plants they are growing, find information on them, and take the weather into consideration.
                        Users are also able to add friends. React Redux was used to control state on the front-end. Sequelize
                        was used to manage the SQL database on the backend.
                    </p>
                    <footer>
                        <ul class="actions">
                            <li><a href="https://github.com/mtrinh11/plant_care_social" class="button large">Code</a></li>
                        </ul>
                    </footer>
                </article>

                <article class="post">
                    <header>
                        <div class="title">
                            <h2><a href="https://pluck-pluck-choose.herokuapp.com/">Pluck Pluck Choose</a></h2>
                        </div>
                        <div class="meta">
                            <time class="published" datetime="2020-12-11">December 11, 2020</time>
                        </div>
                    </header>
                    <a href="https://pluck-pluck-choose.herokuapp.com/" class="image featured">
                        <img src={pluckPluckPic} alt="pluck pluck capture" />
                    </a>
                    <p>
                        Pluck Pluck Choose is a place to upload images and be able to pluck or chuck them. 
                        Each post has upvotes and downvotes. The upvotes and downvotes are then compared against each 
                        other to establish a score for the animal. A tinder clone of cute animals for users to upvote 
                        or downvote on.
                    </p>
                    <footer>
                        <ul class="actions">
                            <li><a href="https://github.com/mtrinh11/PluckPluckChoose" class="button large">Code</a></li>
                        </ul>
                    </footer>
                </article>

                <article class="post">
                    <header>
                        <div class="title">
                            <h2><a href="https://mementoapplication.herokuapp.com/">memento</a></h2>
                        </div>
                        <div class="meta">
                            <time class="published" datetime="2020-11-17">November 17, 2020</time>
                        </div>
                    </header>
                    <a href="https://mementoapplication.herokuapp.com/" class="image featured">
                        <img src={mementoPicOne} alt="memento capture" />
                        <img src={mementoPicTwo} alt="memento capture" />
                    </a>
                    <p>
                        A MongoDB, Express, React, and Node.js Full-Stack app where one can track and organize their life through journal entries. It can help you with reflection on the past, collecting the present, and planning with the future.
                        The 'm' in memento is lowercased on purpose!
                    </p>
                    <footer>
                        <ul class="actions">
                            <li><a href="https://github.com/mtrinh11/memento" class="button large">Code</a></li>
                        </ul>
                    </footer>
                </article>

                <article class="post">
                    <header>
                        <div class="title">
                            <h2><a href="http://yourspot.surge.sh/index.html">Your Spot</a></h2>
                        </div>
                        <div class="meta">
                            <time class="published" datetime="2020-10-19">October 19, 2020</time>
                        </div>
                    </header>
                    <a href="http://yourspot.surge.sh/index.html" class="image featured">
                        <img src={yourSpotPic} alt="YourSpot Capture" />
                    </a>
                    <p>
                        Developed using vanilla JS, HTML, CSS, and the Last.fm API.
                        With YourSpot, you will be able to better connect with music. It will show you the top Artists, Tags, and Tracks based off Last.fm's data.
                    </p>
                    <footer>
                        <ul class="actions">
                            <li><a href="https://github.com/mtrinh11/YourSpot" class="button large">Code</a></li>
                        </ul>
                    </footer>
                </article>

                <article class="post">
                    <header>
                        <div class="title">
                            <h2><a href="https://github.com/mtrinh11/Sudoku">Sudoku</a></h2>
                        </div>
                        <div class="meta">
                            <time class="published" datetime="2020-09-03">September 3, 2020</time>
                        </div>
                    </header>
                    <a href="https://github.com/mtrinh11/Sudoku" class="image featured">
                        <img src={sudokuPic} alt="Sudoku Example" />
                    </a>
                    <p>
                        Incorrect entries show up in red and correct entries are in black. You can selected from 3 different difficulties: easy, medium, and hard.
                        You move around the board by clicking or using your arrow keys. The active cell is highlighted in red. No penalties for incorrect entries.
                        Clicking new game resets the board with the previous difficulty set. The default difficult is easy. Unique
                        solutions are guaranteed by using a backtracking algorithm. 
                    </p>
                    <footer>
                        <ul class="actions">
                            <li><a href="https://github.com/mtrinh11/Sudoku" class="button large">Code</a></li>
                        </ul>
                    </footer>
                </article>

            </div>
        </article>
    )
}