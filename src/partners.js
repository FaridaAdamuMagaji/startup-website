

const Partners = () => {
    return (
        <div className="partners">
            <div className="second">
                <p className="part">
                    PARTNERS
                </p>
                <p className="bold">
                    Lorem ipsum Dolor
                </p>
                <p className="dolor">
                    Lorem ipsum, dolor sit amet consectetur <span className="elicit">adipisicing elit.</span>
                </p>
            </div>
            <div>
                <img src="/images/googles.svg" alt="microsoft"/>
            </div>
            <div>
                <div>
                    <img src="/images/images/red.svg" alt="red" />
                    <img src="/images/microsoft.png" alt="microsoft"/>
                </div>
            </div>
            <div className="socials">
                <img className="bnb" src="/images/airbnb.png" alt="airbnb" id="bnb"/>
                <div><img src="/images/facebook.png" alt="facebook" id="face"/></div>
                <img src="/images/spotify.png" alt="spotify" id="spot"/>     
            </div>
            <button className="learn">
                <a className="lean" href="#">Learn More</a>
            </button>
        </div>
    );
}

export default Partners;