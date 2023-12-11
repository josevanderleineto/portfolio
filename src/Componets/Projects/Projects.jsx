import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Projects/Projects.css';

const Projets = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          {/* Conteúdo opcional para a parte superior da sua página */}
        </div>
      </div>

      <div className="row justify-content-center">
        {/* Projeto 1 */}
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img
              src="https://placehold.it/300x200"
              className="card-img-top"
              alt="Projeto 1"
            />
            <div className="card-body">
              <h5 className="card-title">Projeto 1</h5>
              <p className="card-text">
                Descrição do Projeto 1. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="https://projeto1.com"
                  className="btn btn-primary"
                  style={{ gridColumn: '1 / span 2', marginRight: '10px' }}
                >
                  Visitar Site
                </a>
                <a
                  href="https://github.com/projeto1"
                  className="btn btn-secondary btn-block"
                  style={{ gridColumn: '3' }}
                >
                  Repositório no GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Projeto 2 */}
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img
              src="https://placehold.it/300x200"
              className="card-img-top"
              alt="Projeto 2"
            />
            <div className="card-body">
              <h5 className="card-title">Projeto 2</h5>
              <p className="card-text">
                Descrição do Projeto 2. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="https://projeto2.com"
                  className="btn btn-primary"
                  style={{ gridColumn: '1 / span 2', marginRight: '10px' }}
                >
                  Visitar Site
                </a>
                <a
                  href="https://github.com/projeto2"
                  className="btn btn-secondary btn-block"
                  style={{ gridColumn: '3' }}
                >
                  Repositório no GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Adicione mais cartões de projeto conforme necessário */}
      </div>
    </div>
  );
};

export default Projets;
