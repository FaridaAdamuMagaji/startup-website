import React from 'react';
import featureImage from '../src/images/images/ceo.png';

const Features = () => {
    const featureList = [
        { imageUrl: '/images/ceo.png', names: 'Peg Legge', title: 'CEO' },
        { imageUrl: '/images/cto.png', names: 'Richard Guerra', title: 'CTO' },
        { imageUrl: '/images/designer.svg', names: 'Alexandra Stolz', title: 'DESIGNER' },
        { imageUrl: '/images/developer.png', names: 'Janet Bray', title: 'DEVELOPER' }
    ];

    return (
        <section id="features" className="features">
            <p className='part'>TEAM</p>
            <p className="our">Our Talents</p>
            <p className="dolor">
                Lorem ipsum, dolor sit amet consectetur <span className="elicit">adipisicing elit.</span>
            </p>
        <div className="feature-list">
            {featureList.map((feature, index) => (
            <div key={index} className="feature-item">
                <div className="team">
                    <img className="image" src={feature.imageUrl} alt={feature.title} />
                    <div className="border">
                    <p className="names">{feature.names}</p>
                    <p className="titles">{feature.title}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
        </section>
    );
};

export default Features;
