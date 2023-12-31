import React from "react";
import github from  "../../assets/img/github.svg";
import linkedin from "../../assets/img/linkedin.svg";
import bihance from "../../assets/img/behance.png";
import instagram from "../../assets/img/instagram.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SocialMidia/SocialMidia.css';
const SocialMidia: React.FC = () => {
    return (
        <div className="social-midia text-center">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/vanderleineto/"  target="blank"><img src={linkedin} alt="Linkedin" /></a>
                <a href="https://github.com/josevanderleineto" target="blank"><img src={github} alt="Github" /></a>
                <a href="https://www.behance.net/josvanderlei1" target="blank"><img src={bihance} alt="Bihance" /></a>
                <a href="https://www.instagram.com/josevanderleineto/" target="blank"><img src={instagram} alt="Instagram" /></a>
            </div>
        </div>

        
    )
}

export default SocialMidia;