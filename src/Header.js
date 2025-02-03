const Header = () => {
    return (
        <nav className="title">
            <div className="head">
                <img src="/images/slide.svg" alt="slide"/>
                <h1>Start</h1>
                <img src="/images/ham-menu.svg" alt="menu"/>
            </div>
            <div>
                <img src="/images/people.png" alt="group"></img>
            </div>
            <div className="paragraph">
                <p>
                    WELCOME
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur               
                </p>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
                </p>
                <button>
                    <a href="">Explore</a>
                </button>
            </div>
        </nav>
    );
}

export default Header;