import { useState } from 'react'
import AppRoutes from './Componets/AppRoutes/AppRoutes'
import Footer from './Componets/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
      <main>
        <AppRoutes />
        <header>
        </header>
          <Footer />

      </main>
  )
}

export default App
