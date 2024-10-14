import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from "./Componentes/Pages/HomePage"
import CrearEspacioTrabajo from './Componentes/Pages/CrearEspacioTrabajo'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/workspace' element={<CrearEspacioTrabajo />} />
        <Route path='/formulario' element={<CrearEspacioTrabajo />} />
      </Routes>
    </div>
  )
}

export default App
