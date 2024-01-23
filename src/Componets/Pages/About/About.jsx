import '../About/About.css';
import Menu from "../../Header/Menu/Menu";
import "bootstrap/dist/css/bootstrap.min.css";


const About = () => {
    return (
        <div>
            <Menu />
            <section id="about">
            <h2>Sobre Mim</h2>
           <p className="text">Sou um entusiasta da tecnologia e desenvolvedor front-end com uma paixão por criar experiências digitais envolventes. Minha jornada começou com HTML, CSS e JavaScript, e ao longo do tempo, aprimorei minhas habilidades com uso do React, Angular e Vue, adicionando profundidade e dinamismo aos meus projetos.
           </p>
           <p className="text">Atualmente, faço parte do Grupo de Pesquisa Onda Digital na Universidade Federal da Bahia (UFBA), onde integro a equipe de desenvolvimento web. Este ambiente acadêmico tem sido fundamental para expandir meu conhecimento e explorar soluções inovadoras para desafios específicos. Como estudante de Biblioteconomia e Documentação na UFBA, tenho dedicado meu tempo ao desenvolvimento de ferramentas que contribuem para a área da Biblioteconomia e Ciência da Informação.
           </p>
           <p className="text">Um dos meus projetos em destaque é um Gerador de Notação de Autor, onde utilizei a tabela Cutter como base. Além disso, estou em fase de desenvolvimento de uma aplicação semelhante, utilizando tabelas PHA com JavaScript. Essas soluções tecnológicas têm como objetivo otimizar processos e oferecer recursos inovadores no campo da Biblioteconomia.
          </p>
          <p className="text">Além do meu envolvimento acadêmico, atuo como freelancer, colaborando com diversos clientes para transformar ideias em realidade digital. Minha abordagem equilibra criatividade e funcionalidade, resultando em produtos web que não apenas impressionam visualmente, mas também oferecem uma experiência intuitiva aos usuários.
         </p>
       </section>
        </div>
    )
}

export default About;