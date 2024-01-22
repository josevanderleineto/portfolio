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
                <p><strong>Desenvolvedor Front End</strong></p>
                <img src={profile} alt="" id="profile" /> 
                <div>
                    <Link className="resume"><strong>CV</strong></Link>   
                </div>
            </section>
        </div>
    )
}

export default Home;
