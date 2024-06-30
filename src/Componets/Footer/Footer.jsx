import '../Footer/Footer.css';
import linkedin from '../../assets/img/linkedin.svg';
import github from '../../assets/img/github.svg';
import behance from '../../assets/img/behance.png';
import instagram from '../../assets/img/instagram.svg';
const Footer = () => {
    return(
        <footer className="Footer">
         <div className="social-icons">
                <a href="https://www.linkedin.com/in/josevanderleineto/"  target="blank"><img src={linkedin} alt="Linkedin" /></a>
                <a href="https://github.com/josevanderleineto" target="blank"><img src={github} alt="Github" /></a>
                <a href="https://www.behance.net/josvanderlei1" target="blank"><img src={behance} alt="Bihance" /></a>
                <a href="https://www.instagram.com/josevanderlei_neto/" target="blank"><img src={instagram} alt="Instagram" /></a>
            </div>

        <p >&copy; By Vanderlei Neto</p>

        </footer>
    )
}

// 

export default Footer;