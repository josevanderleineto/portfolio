import React, { useState } from 'react';
import Menu from './Componets/Menu/Menu';
import Home from './Componets/Home/Home';
import About from './Componets/About/About';
import Skills from './Componets/Skills/Skills';
import Projects from './Componets/Projects/Projects';
import Footer from './Componets/Footer/Footer';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <header>
        <Menu />
        </header>
        <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        </main>
        <footer>
        <Footer />
        </footer>

    </>
  );
}

export default App;
