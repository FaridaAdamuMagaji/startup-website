import networking from "./assets/networking.png"
import society from "./assets/society.png"

const Network = () => {
    return (
        <div className="tweet">
            <div className="group">
                <img className="group" src={society} alt="group"/>
            </div>
            <p className="net">
                Lorem ipsum dolor sit amet consectetur 
            </p>
            <p className="nets">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
            </p>
            <button className="more">
                <a className="bi">
                    Learn More
                </a>
            </button>
            <div className="group">
                <img className="group" src={networking} alt="network"/>
            </div>
            <p className="net">
                Lorem ipsum dolor sit amet consectetur 
            </p>
            <p className="nets">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?
            </p>
            <button className="more">
                <a className="bi">
                    Learn More
                </a>
            </button>
        </div>
    );
}

export default Network;