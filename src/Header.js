import menu from "./assets/menu.svg"
import logo from "./assets/logo.svg"
<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
</style>


const Header = () => {
    return (
        <nav className="title">
            <div className="head">
                <div className="start">
                    <img src={logo} alt="slide"/>
                    <p className="star">Start</p>
                </div>
                <div className="menu">
                    <img className="menu" src={menu} alt="menu"/>
                </div>
            </div>      
            <div className="people">
                <img src="/images/people.png" alt="group"></img>
            </div>
            <div className="paragraph">
                <p className="first">
                    WELCOME
                </p >
                <p className="lorem">
                    Lorem ipsum dolor sit amet consectetur               
                </p>
                <p className="ipsum">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
                </p>
                <button className="one">
                    <a className="text" href="#">Explore</a>
                </button>
            </div>
        </nav>
    );
}

export default Header;