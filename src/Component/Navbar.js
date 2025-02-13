import logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <header>
            <div className="head">
                <div className="start">
                    <img src={logo} alt="slide"/>
                    <p className="star">Start</p>
                </div>
                <button className="menu-button">
                    <span className="menu-icon"></span>
                </button>
                <nav className="menu">
                    <ul className="list">
                        <li>
                            <a className="lists" href="#">Home</a>
                        </li>
                        <li>
                            <a className="lists" href="#">Portfolio</a>
                        </li>
                        <li>
                            <a className="lists" href="#">Services</a>
                        </li>
                        <li>
                            <a className="lists" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        
    );
}
export default Navbar;
