import React from 'react'
import { useState } from 'react'

const GenerarCanal = () => {
    const [errorGenerador, setErrorGenerador] = useState({text:'', isErrorGenerador: false})

    const handleGenerateChannel = (e) => {
        e.preventDefault();
        const formulario = new FormData(e.target);
        const nombreCanal = formulario.get('canal')
        if(!nombreCanal) {
            setErrorGenerador({ isErrorGenerador: true, text: 'nombre del canal no puede estar vacio'})
        }
        else {
            setErrorGenerador({text: '', isErrorGenerador: false})
            navigate('/')
        }
    }

  return (
    <div>
        
    </div>
  )
}

export default GenerarCanal