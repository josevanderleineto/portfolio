import React from "react";
import "../../styles.css"
import SocialMidia from "../SocialMidia/SocialMidia";
import "../Footer/Footer.css"

const Footer: React.FC = () => {
    

    return (
        <div className="text-center">
            <div className="Footer">
            <SocialMidia />
            <a href="mailto:jvn.neto@protonmail.com" className="email

">
                jvn.neto@protonmail.com
            </a>

            <p >&copy; By Vanderlei Neto</p>

            </div>
        </div>
    );
}

export default Footer;
