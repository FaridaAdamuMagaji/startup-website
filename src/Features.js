import React from 'react';
import featureImage from '../src/images/images/ceo.png';

const Features = () => {
    const featureList = [
        { imageUrl: '/images/ceo.png', names: 'Peg Legge', title: 'CEO' },
        { imageUrl: '/images/cto.png', names: 'Feature Two', title: 'CTO' },
        { imageUrl: '/images/designer.svg', names: 'Feature Three', title: 'DESIGNER' }
    ];

    return (
        <section id="features" className="features">
            <p className='part'>TEAM</p>
        <h1>Our Talents</h1>
        <div className="feature-list">
            {featureList.map((feature, index) => (
            <div key={index} className="feature-item">
                <img src={feature.imageUrl} alt={feature.title} className="feature-image" />
                <h2>{feature.names}</h2>
                <p>{feature.title}</p>
            </div>
        ))}
        </div>
        </section>
    );
};

export default Features;
