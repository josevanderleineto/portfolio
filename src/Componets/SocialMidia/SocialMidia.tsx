import React from "react";
import dev from "../../assets/img/dev.svg";
import github from  "../../assets/img/github.svg";
import linkedin from "../../assets/img/linkedin.svg";
import bihance from "../../assets/img/bihance.svg";
import instagram from "../../assets/img/instagram.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SocialMidia/SocialMidia.css';
const SocialMidia: React.FC = () => {
    return (
        <div className="social-midia text-center">
            <div className="social-icons">
                <a href="" ><img src={linkedin} alt="" /></a>
                <a href=""><img src={github} alt="" /></a>
                <a href=""><img src={dev} alt="" /></a>
                <a href=""><img src={bihance} alt="" /></a>
                <a href=""><img src={instagram} alt="" /></a>
            </div>
        </div>

        
    )
}

export default SocialMidia;