// eslint-disable-next-line no-unused-vars
import React from 'react';
import Menu from '../../Header/Menu/Menu';
import '../Home/Home.css';
import { Link } from 'react-router-dom';
import profile from '../../../assets/img/profile.jpeg';
import resumePdf from '../../../assets/Curriculo.pdf'; // Certifique-se de substituir pelo caminho real do seu arquivo PDF
import dataTextBr from '../../../assets/dataTextBr.json'; // Importe o JSON

const Home = () => {
    const handleResumeClick = () => {
        // Inicie o download do PDF quando o link "RESUME" for clicado
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'Curriculo.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <header>
                <Menu />
            </header>
            <section id="home">
                <h1 id="title">{dataTextBr.title}</h1>
                <p>
                    <strong>{dataTextBr.subtitle}</strong>
                </p>
                <img src={profile} alt="" id="profile" />
                <div>
                    {/* Adicione o manipulador de clique para iniciar o download */}
                    <Link className="resume" onClick={handleResumeClick}>
                        {dataTextBr.cvText}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
