import React, { useEffect } from 'react'
import ListaCanales from '../ListaCanales/ListaCanales'
import ListaMensajes from '../ListaMensajes/ListaMensajes'
import Chat from './Chat'
import { useState } from 'react'

const HomePage = () => {

    const canal = [
        {
            id: "1",
            nombreCanal: "Consultas"
        },
        {
            id: "2",
            nombreCanal: "General"
        },
        {
            id: "3",
            nombreCanal: "Social"
        },
        {
            id: "4",
            nombreCanal: "Utilidades"
        },
    ]

    const initialMensajes = [
        {
            nombre: "Jorge",
            hora: "10:00",
            mensaje: "Hola gente estoy preparando el trabajo final para frontend, vengo mas o menos, ustedes como vienen?",
            id: "1",
        },
        {
            nombre: "Julieta",
            hora: "10:23",
            mensaje: "hola Jorge, yo vengo muy bien la verdad, estoy un poco trabado en la parte del enrutamiento pero lo demas bien, y como te puedo ayudar? no dudes en consultarme",
            id: "2",
        },
        {
            nombre: "Kevin",
            hora: "10:40",
            mensaje: "Que tal chicos, yo ya he terminado mi trabajo para el final.. solo estoy dando los ultimos retoques y estare listo para subirlo",
            id: "3",
        },
        {
            nombre: "Juan Pablo",
            hora: "11:30",
            mensaje: "Hola, me encantaria saber si hay alguna duda en que puedo ayudarles",
            id: "4",
        },
    ]
    
    const [mensajes, setMensajes] = useState(initialMensajes)

    return (
        <>
            <ListaCanales canales={canal} titulo={"Canales"} />
            <ListaMensajes mensajes={mensajes} titulo={"Mensajes directos"} />
            <Chat mensajes={mensajes} setMensajes={setMensajes} />
        </>
    )
}

export default HomePage