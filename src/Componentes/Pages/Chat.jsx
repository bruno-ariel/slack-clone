import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import { VscAdd, VscCaseSensitive, VscDeviceCameraVideo, VscLinkExternal, VscMention, VscMic, VscSmiley } from "react-icons/vsc";
import { FaB, FaItalic } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { AiOutlineOrderedList } from "react-icons/ai";
import { MdFormatListBulleted } from "react-icons/md";
import { BsBlockquoteRight } from "react-icons/bs";
import { IoCodeSlashSharp } from "react-icons/io5";
import { RiCodeBlock } from "react-icons/ri";


const Chat = ({ mensajes, setMensajes }) => {
    const [errorChat, setErrorChat] = useState({ text: '', isErrorChat: false })
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const formulario = new FormData(e.target);
        const mensaje = formulario.get('mensaje')
        if (!mensaje) {
            setErrorChat({ isErrorChat: true, text: '' })
        }
        else {
            setErrorChat({ text: '', isError: false })
            const actualDate = new Date()
            const hours = actualDate.getHours();
            const minutes = actualDate.getMinutes();
            const nuevoMensaje = { nombre: 'me : ', mensaje, id: actualDate, hora: hours + ':' + minutes }
            setMensajes([...mensajes, nuevoMensaje])
        }
    }

    return (
        <div className='containerMessaje'>
            <div className='iconTopChat'>
                <FaB />
                <FaItalic />
                <FiLink />
                <AiOutlineOrderedList />
                <MdFormatListBulleted />
                <BsBlockquoteRight />
                <IoCodeSlashSharp />
                <RiCodeBlock />
            </div>
            <form onSubmit={handleSubmitForm}>
                <input className='inputChat' placeholder=' Escribe un mensaje' name='mensaje' />
                {errorChat.isErrorChat && <span>{errorChat.text}</span>}
                <div className='iconBottomChat'>
                    <VscAdd/>
                    <VscCaseSensitive />
                    <VscSmiley />
                    <VscMention />
                    <VscDeviceCameraVideo />
                    <VscMic />
                    <VscLinkExternal />
                    <button className='buttonSend' type='submit'> <IoMdSend /> </button>
                </div>
            </form>
        </div>
    )

}

export default Chat