import tabela from '../../../assets/img/tabela-cutter.svg';
import embreve from '../../../assets/img/Embreve.svg';
import '../Projects/Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Componets/../../src/index.css';
import Menu from '../../Header/Menu/Menu';
import blog from '../../../assets/img/CapaBlog.svg';
import organo from '../../../assets/img/best.png';


// eslint-disable-next-line react/prop-types
const ProjectCard = ({ imgSrc, title, description, siteLink, githubLink }) => {
    return (
      <div className="col-md-4 mb-4 projects">
        <div className="card text-center project-card">
          <img src={imgSrc} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-center">
              <a target='__blank' href={siteLink} className="btn btn-primary" style={{ gridColumn: '1 / span 2', marginRight: '10px' }}>
                Visitar Site
              </a>
              <a target='__blank' href={githubLink} className="btn btn-secondary btn-block" style={{ gridColumn: '3' }}>
                Repositório
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const Projects = () => {
    return (
      <div> 
        <Menu />     
      <div id="projects" className="d-flex flex-column min-height-100vh">
        <h2 className='text-center text-white'>Projetos</h2>
        <div className="container flex-grow-1 mt-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">{/* Conteúdo opcional para a parte superior da sua página */}</div>
          </div>
  
          <div className="row justify-content-center">
            {/* Projeto 1 */}
            <ProjectCard
              imgSrc={tabela}
              title="Tabela Cutter"
              description="Gerador de notação de autor Cutter feito com JavaScript, HTML5 e CSS3"
              siteLink="https://www.tabelacutter.online/"
              githubLink="https://github.com/josevanderleineto/tebela-cutter"
            />
  
            {/* Projeto 2 */}
            <ProjectCard
              imgSrc={blog}
              title="Blog"
              description="Blog sobre desevolvimento Web Front-End feito com JavaScript, Angular e CSS3"
              siteLink="https://blog-vanderlei.vercel.app/"
              githubLink="https://github.com/josevanderleineto/blog"
            />
  
            {/* Projeto 3 */}
            <ProjectCard
              imgSrc={organo}
              title="Organo Time de Fortinite"
              description="Esse site lista os Plyas do time de Fortinite feito com React HTML5 e CSS3"
              siteLink="https://organo-fortinite.vercel.app/"
              githubLink="https://github.com/josevanderleineto/organo-fortinite"
            />
  
            {/* Adicione mais cartões de projeto conforme necessário */}
            
          </div>
        </div>
      </div>
      </div>
  
    );
  };
  
  export default Projects;