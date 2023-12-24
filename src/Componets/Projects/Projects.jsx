import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Projects/Projects.css';

// Componente de Projeto Reutilizável
const ProjectCard = ({ imgSrc, title, description, siteLink, githubLink }) => {
  return (
    <div className="col-md-4 mb-4">
  
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
              Repositório no GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="d-flex flex-column min-height-100vh">
      <h2 className='text-center text-white'>Projects</h2>
      <div className="container flex-grow-1 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">{/* Conteúdo opcional para a parte superior da sua página */}</div>
        </div>

        <div className="row justify-content-center">
          {/* Projeto 1 */}
          <ProjectCard
            imgSrc="https://placehold.it/300x200"
            title="Projeto 1"
            description="Descrição do Projeto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            siteLink="https://projeto1.com"
            githubLink="https://github.com/projeto1"
          />

          {/* Projeto 2 */}
          <ProjectCard
            imgSrc="https://placehold.it/300x200"
            title="Projeto 2"
            description="Descrição do Projeto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            siteLink="https://projeto2.com"
            githubLink="https://github.com/projeto2"
          />

          {/* Projeto 3 */}
          <ProjectCard
            imgSrc="https://placehold.it/300x200"
            title="Projeto 3"
            description="Descrição do Projeto 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            siteLink="https://projeto3.com"
            githubLink="https://github.com/projeto3"
          />

          {/* Adicione mais cartões de projeto conforme necessário */}
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
