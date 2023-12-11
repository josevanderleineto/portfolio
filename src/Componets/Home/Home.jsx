import React from "react";
import profile from '../../assets/img/profile.jpeg';
const Home = () =>  {
    return (
        <div>
            <section id="home">
                <h1 id="titile">Vandelei Neto</h1>
                <p><strong>Front End Developer</strong></p>
                <img src={profile} alt=""  id="profile"/>
            </section>
        </div>
    )
}

export default Home;