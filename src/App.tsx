import React, { useState } from 'react';
import Menu from './Componets/Menu/Menu';
import Home from './Componets/Home/Home';
import About from './Componets/About/About';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <header>
        <Menu />
        <Home />
        <About />
      </header>
    </>
  );
}

export default App;
