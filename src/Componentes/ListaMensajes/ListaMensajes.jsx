import React from 'react'

const ListaMensajes = ({ mensajes, titulo }) => {

    const mapeoDeMensajes = mensajes.map((mensaje) => {
        return (
            <div className='containerMessages' key={mensaje.id}>
                <span className='nameMensaje'>{mensaje.nombre} </span>
                <span>{mensaje.hora} </span>
                <p>{mensaje.mensaje}</p>
            </div>
        )
    })

    return (
        <div className='containerChat'>
            <h1>{titulo}</h1>
            {mapeoDeMensajes}
        </div>
    )
}

export default ListaMensajes