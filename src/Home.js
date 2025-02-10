import React from 'react';
import Header from './Header';
import Partners from './partners';
import Network from './Network';
import Team from './Team';
import Footer from './footer';


const Home = () => {
    return (
        <div className="home">
            <Header />
            <Partners />
            <Network />
            <Team />
            <Footer />
            
        </div>
    );
}

export default Home;