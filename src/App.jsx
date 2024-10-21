import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from "./Componentes/Pages/HomePage"
import CrearEspacioTrabajo from './Componentes/Pages/CrearEspacioTrabajo'
import './style.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<CrearEspacioTrabajo />} />
        <Route path='/workspace' element={<CrearEspacioTrabajo />} />
        <Route path='/formulario' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
