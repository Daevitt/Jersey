import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Homepage from './Pages/Homepage'
import Home from './Pages/Home'
import Events from './Pages/Events'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Event from './Pages/Event'
import Payment2 from './Pages/Payment2'
import CreateEvent from './Pages/CreateEvent'
import BillingPage2 from './Pages/BillingPage2'
import About from './Pages/About'

function App() {
  const [WalletProvider, setWalletProvider] = useState(null)

  useEffect(() => {
    // Carga WalletProvider SOLO en el navegador
    import('./walletProvide.jsx')
      .then((mod) => {
        setWalletProvider(() => mod.default)
      })
      .catch((err) => {
        console.error('Error loading WalletProvider', err)
      })
  }, [])

  const AppContent = (
    <div className='w-full min-h-screen'>
      <Routes>
        <Route path='/' element={<Homepage />}>
          <Route index element={<Home />} />
          <Route path='Events' element={<Events />} />
          <Route path='Signup' element={<SignUp />} />
          <Route path='Login' element={<Login />} />
          <Route path='CreateEvent' element={<CreateEvent />} />
          <Route path='Billing/:id' element={<BillingPage2 />} />
          <Route path='Event/:id' element={<Event />} />
          <Route path='About' element={<About />} />
          <Route path='Payment/:id' element={<Payment2 />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )

  // Mientras WalletProvider no está cargado, renderizamos igual
  if (!WalletProvider) {
    return AppContent
  }

  return <WalletProvider>{AppContent}</WalletProvider>
}

export default App
