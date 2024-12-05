import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';



import './styles/index.css'

import PaginaActual from './components/PaginaActual';



function App() {
  

  return (
    <BrowserRouter>
    <PaginaActual />
    </BrowserRouter>
  )
}

export default App
