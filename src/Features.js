import React from 'react';
import featureImage from '../src/images/images/ceo.png';

const Features = () => {
    const featureList = [
        { imageUrl: '/images/ceo.png', title: 'Feature One', description: 'Description of feature one.' },
        { imageUrl: '/images/cto.png', title: 'Feature Two', description: 'Description of feature two.' },
        { imageUrl: '/images/designer.png', title: 'Feature Three', description: 'Description of feature three.' }
    ];

    return (
        <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
            {featureList.map((feature, index) => (
            <div key={index} className="feature-item">
                <img src={feature.imageUrl} alt={feature.title} className="feature-image" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
            </div>
        ))}
        </div>
        </section>
    );
};

export default Features;
