import React from "react";
import profile from '../../assets/img/profile.jpeg';
import SocialMidia from "../SocialMidia/SocialMidia";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
       <Menu />
      <section id="home">
        <h1 id="titile">Vanderlei Neto</h1>
        <p><strong>Front End Developer</strong></p>
        <img src={profile} alt="" id="profile" />
        <div>
        <div className="d-grid gap- col-6 mx-auto">
       <a href="DDD" className="cv text-white">RESUME</a>
    </div>

          <SocialMidia />
          
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
