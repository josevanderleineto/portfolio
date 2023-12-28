import React from "react";
import "../../styles.css"
import SocialMidia from "../SocialMidia/SocialMidia";

const Footer: React.FC = () => {
    

    return (
        <div className="text-center">
            <div className="Footer">
            <p >By Vanderlei Neto</p>
            <a href="mailto:jvn.neto@protonmail.com" className="email">
                jvn.neto@protonmail.com
            </a>
            <SocialMidia />
            </div>
        </div>
    );
}

export default Footer;
