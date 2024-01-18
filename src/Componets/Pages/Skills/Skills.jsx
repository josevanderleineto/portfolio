import '../Skills/Skills.css'
import html from "../../assets/img/file-type-html.svg";
import css from "../../assets/img/file-type-css.svg";
import js from "../../assets/img/javascript-js.svg"; 
import typescript from "../../assets/img/typescript-icon.svg";
import nodejs from "../../assets/img/nodejs.svg";
import reactjs from "../../assets/img/react.svg";
import angular from "../../assets/img/angularjs-original.svg";
import vue from "../../assets/img/vue.svg";
import bootstrep from "../../assets/img/bootstrap-plain.svg";
import tailwindcss from "../../assets/img/tailwind-css.svg";
import figma from "../../assets/img/figma.svg";
import Menu from '../../Header/Menu/Menu';


const Skills = () => {
    return (

        <div>
            <header>
                <Menu />
            </header>
        <section id="skills">
    <h2>Skills</h2>
        <div className="box-container">
        <div className="box-skill">
            <img src={html} alt=""/>
            <p>HTML5</p>
         </div>
         <div className="box-skill">
            <img src={css} alt="CSS"/>
            <p>CSS</p>
         </div>
         <div className="box-skill">
            <img src={js} alt="JavaScript"/>
            <p>JavaScript</p>
         </div>
         <div className="box-skill">
            <img src={typescript} alt="TypeScript"/>
            <p>TypeScript</p>
         </div>

         <div className="box-skill">
            <img src={nodejs} alt="CSS"/>
            <p>Node JS</p>
         </div>
         <div className="box-skill">
            <img src={reactjs} alt="React"/>
            <p>React</p>
         </div>
         <div className="box-skill">
            <img src={angular} alt="Angular"/>
            <p>Angular</p>
         </div>
         <div className="box-skill">
            <img src={vue} alt="Vue"/>
            <p>Vue</p>
         </div>
         <div className="box-skill">
            <img src={bootstrep} alt="Boostrept"/>
            <p>Bootstrep</p>
         </div>
         <div className="box-skill">
            <img src={tailwindcss} alt="Taiwindcss"/>
            <p>Taiwind</p>
         </div>
         <div className="box-skill">
            <img src={figma} alt="Figma"/>
            <p>Figma</p>
         </div>
        </div>
    </section>
        </div>
    )
}

export default Skills;