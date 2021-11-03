import React from 'react'
import '../styles/Pages/Home.css'
import '../styles/Pages/Home.css';
import TeamPic from '../assets/image 85.png'

function Home() {
    return (
        <div className="home">
            <div className="hero" style={{"color": "red"}}>
                <div className="hero__pad">
                    <h1 className="hero__h1">
                        Track your PRODUCT 
                        <br/>
                        on Jumia & get notified.
                    </h1>
                    <button className="hero__btn">Get Started</button>
                </div>
            </div>

            {/* About section */}
            <div className="home__about">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="home__section">
                            About
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <p className="section__p ">
                            Track your PRODUCT 
                            on Jumia and get notifiedTrack your PRODUCT  on Jumia and get notifiedTrack your PRODUC on Jumia and get notified.
                            
                            on Jumia your PRODUCT  on Jumia and get notifiedTrack your PRODUC on Jumia and get notified.

                            
                        </p>
                        <p className="section__p">
                            Track your PRODUCT 
                            on Jumia and get notifiedTrack your PRODUCT  on Jumia and get notifiedTrack your PRODUC on Jumia and get notified.
                            
                            on Jumia your PRODUCT  on Jumia and get notifiedTrack your PRODUC on Jumia and get notified.

                            
                        </p>
                    </div>
                </div>
            </div>

            {/* Team section */}
            <div className="home__team">
                <div className="home__section">
                    Team
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team__members">
                            <div className="circle">
                                <img src={TeamPic} alt=""/>
                            </div>
                            <div className="team__details">
                                <p className="team__name">
                                    James Okunola
                                </p>
                                <p className="team__title">
                                    Web Developer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="footer">

            </div>

        </div>
    )
}

export default Home;
