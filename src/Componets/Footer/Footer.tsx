import React from "react";
import "../../styles.css"
import SocialMidia from "../SocialMidia/SocialMidia";

const Footer: React.FC = () => {
    

    return (
        <div className="text-center">
            <div className="Footer">
            <SocialMidia />
            <a href="mailto:jvn.neto@protonmail.com" className="email text-light text-decoration-none

">
                jvn.neto@protonmail.com
            </a>

            <p >&copy; By Vanderlei Neto</p>

            </div>
        </div>
    );
}

export default Footer;
