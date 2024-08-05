import '../About/About.css';
import Menu from "../../Header/Menu/Menu";
import dataTextBr from '../../../assets/dataTextBr.json'; // Importe o JSON
import "bootstrap/dist/css/bootstrap.min.css";


const About = () => {
    return (
        <div>
            <Menu />
            <div id="about">
            <h2>{dataTextBr.sobreTitle}</h2>
           <p className="text">{dataTextBr.sobreText1}</p>
           <p className="text">{dataTextBr.sobreText2}</p>
           <p className="text">{dataTextBr.sobreText3}</p>
          <p className="text">{dataTextBr.sobreText4}</p>
       </div>
        </div>
    )
}

export default About;