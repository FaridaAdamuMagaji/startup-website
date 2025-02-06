import React from 'react';
import Header from './Header';
import Partners from './partners';
import Network from './Network';
import Features from './Features';
import Footer from './footer';


const Home = () => {
    return (
        <div className="home">
            <Header />
            <Partners />
            <Network />
            <Features />
            <Footer />
            
        </div>
    );
}

export default Home;