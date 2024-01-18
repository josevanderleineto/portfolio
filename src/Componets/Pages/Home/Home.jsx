import profile from "../../assets/img/profile.jpeg";
import Menu from "../../Header/Menu/Menu";
import '../Home/Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <header><Menu/></header>
            <section id="home">
                <h1 id="title">Vanderlei Neto</h1>
                <p><strong>Front End Developer</strong></p>
                <img src={profile} alt="" id="profile" /> 
                <div>
                    <Link className="resume">RESUME</Link>   
                </div>
            </section>
        </div>
    )
}

export default Home;
