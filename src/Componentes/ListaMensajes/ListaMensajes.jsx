import React from 'react'

const ListaMensajes = ({ mensajes, titulo }) => {

    const mapeoDeMensajes = mensajes.map((mensaje) => {
        return (
            <div key={mensaje.id}>
                <p>{mensaje.nombre}</p>
                <p>{mensaje.hora}</p>
                <p>{mensaje.mensaje}</p>
            </div>
        )
    })

    return (
        <>
            <h1>{titulo}</h1>
            {mapeoDeMensajes}
        </>
    )
}

export default ListaMensajes