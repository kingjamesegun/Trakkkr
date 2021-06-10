import React from 'react'
import Header from '../components/Header';

function Home() {
    return (
        <div className="home">
            <Header 
                title="Home Page"
            />
            <div className="home__intro">
                <h1>Make Discount of your Products</h1>
                <p>Online shopping gives me a reason to live up another 3-5 business days.</p>
            </div>
        </div>
    )
}

export default Home
