import React, { useState } from 'react'

const Chat = ({ mensajes, setMensajes }) => {
    const [errorChat, setErrorChat] = useState({ text: '', isErrorChat: false })
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const formulario = new FormData(e.target);
        const mensaje = formulario.get('mensaje')
        if (!mensaje) {
            setErrorChat({ isErrorChat: true, text: 'No hay mensaje' })
        }
        else {
            setErrorChat({ text: '', isError: false })
            const actualDate = new Date()
            const hours = actualDate.getHours();
            const minutes = actualDate.getMinutes();
            const nuevoMensaje = { nombre: 'yo', mensaje, id: actualDate, hora: hours + ':' + minutes }
            setMensajes([...mensajes, nuevoMensaje])
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input placeholder='Escriba su mensaje' name='mensaje' />
                {errorChat.isErrorChat && <span>{errorChat.text}</span>}
                <button type='submit'> Enviar </button>
            </form>
        </div>
    )

}

export default Chat