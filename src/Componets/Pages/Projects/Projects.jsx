import tabela from '../../assets/img/tabela-cutter.svg';
import embreve from '../../assets/img/Embreve.svg';
import '../Projects/Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Componets/../../src/index.css';
import Menu from '../../Header/Menu/Menu'

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
              <a href={siteLink} className="btn btn-primary" style={{ gridColumn: '1 / span 2', marginRight: '10px' }}>
                Visitar Site
              </a>
              <a href={githubLink} className="btn btn-secondary btn-block" style={{ gridColumn: '3' }}>
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
  aaa
          <div className="row justify-content-center">
            {/* Projeto 1 */}
            <ProjectCard
              imgSrc={tabela}
              title="Gerador de notação de autor com tabela Cutter"
              description="A Notação de Autor é uma parte essencial na catalogação e organização de bibliotecas e acervos. Uma ferramenta fundamental para isso é a Tabela Cutter, um sistema que permite criar códigos únicos para autores, facilitando a busca e localização de obras. Neste contexto, desenvolvi um gerador de Código de Notação de Autor utilizando JavaScript, que incorpora a lógica da Tabela Cutter."
              siteLink="https://www.tabelacutter.online/"
              githubLink="https://github.com/josevanderleineto/tebela-cutter"
            />
  
            {/* Projeto 2 */}
            <ProjectCard
              imgSrc={embreve}
              title="Projeto 2"
              description=" Descrição do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Descrição do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Descrição do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Descrição do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Descrição do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Descrição do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              siteLink="https://projeto2.com"
              githubLink="https://github.com/projeto2"
            />
  
            {/* Projeto 3 */}
            <ProjectCard
              imgSrc={embreve}
              title="Projeto 3"
              description="Descrição do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Descrição do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Descrição do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Descrição do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Descrição do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Descrição do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              siteLink=""
              githubLink=""
            />
  
            {/* Adicione mais cartões de projeto conforme necessário */}
            
          </div>
        </div>
      </div>
      </div>
  
    );
  };
  
  export default Projects;