import { Link } from "react-router-dom";
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
                            <Link className="lists" to="/Home">Home</Link>
                        </li>
                        <Link className="lists" to="/Portfolio">Portfolio</Link>
                    </ul>
                </nav>
            </div>
        </header>
        
    );
}
export default Navbar;
