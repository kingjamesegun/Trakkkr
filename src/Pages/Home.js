import React from 'react'
import HomeImage from '../assets/illu.jpg';
import '../styles/Pages/Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__intro">
                <h1>Track your favourite</h1>
                <h1>items' price movement</h1>
                <h1>on <span>Jumia.</span></h1>
            </div>
            <div className="home__cta">
                <button>
                    Start Now
                </button>
                <div className="cta__shorttip">
                    <h3>What's Inside?</h3>
                    <p>
                        Get to monitor the price movement of your desired products on Jumia. You immediately
                        get notified on your email as the price hits the desired target price, initially set by you.
                        Trakker can now help you get that gadget or apparel at amore frindly price.
                    </p>
                </div>
                <div className="home__image">
                    <img src={HomeImage} alt="HomeImage"/>
                </div>
            </div>
            <div className="home__socails">
                <div className="socail__networks">
                </div>
            </div>
        </div>
    )
}

export default Home
