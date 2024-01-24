import { useState } from 'react'
import AppRoutes from './Componets/AppRoutes/AppRoutes'
import Footer from './Componets/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
      <main>
        <AppRoutes />
          <Footer />
      </main>
  )
}

export default App
