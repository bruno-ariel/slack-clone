import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { PiHandWaving } from "react-icons/pi";


const CrearEspacioTrabajo = () => {
    
    const initialCanal = [
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
    const [error, setError] = useState({ text: '', isError: false });
    const navigate = useNavigate(); 
    const storagedWorkspaces = JSON.parse(localStorage.getItem('workspaces')) || initialCanal
    const [workspaceName, setWorkspaceName] = useState(storagedWorkspaces);
    const [submit, setSubmit] = useState(false);

    const handletSubmitForm = (e) => {
        e.preventDefault(); 
        const formulario = new FormData(e.target);
        const nombreTrabajo = formulario.get("nombreTrabajo");
        const nombreCanal = formulario.get("nombreCanal");
        if (!nombreTrabajo || nombreTrabajo.length < 10) {
            setError({ isError: true, text: 'El nombre del trabajo debe tener al menos 10 caracteres' });
        } 
        if (!nombreCanal) {
            setError({ isError: true, text: 'El nombre del canal es requerido' });
        } else {
            
            const newCanal = {
                id: Date.now(),
                nombreCanal
            }
            setWorkspaceName([...workspaceName, newCanal])  
            setSubmit(true)
        }
    
    };

    useEffect(() => {
        localStorage.setItem('workspaces', JSON.stringify(workspaceName))
        if(submit) 
            navigate('/formulario')
    }, [workspaceName])

    return (
        <div>
            <div>
            <h1 className='titleForm'> <PiHandWaving /> ¡Hola de nuevo!</h1>
            <form onSubmit={handletSubmitForm} className='form'>
                {<div>
                    <h2> ¿Quieres usar Slack con otro equipo de trabajo? </h2>
                    <label htmlFor='nombreTrabajo'> En qué trabajara tu equipo ? </label>
                    <input className='inputCanal' id='nombreTrabajo' name='nombreTrabajo' type='text'></input>
                    {error.isError && <span>{error.text}</span>}
                </div>}
                <div>
                    <label htmlFor='nombreCanal'> Nombre del canal de trabajo </label>
                    <input className='inputCanal' id='nombreCanal' name='nombreCanal' type='text'></input>
                    {error.isError && <span>{error.text}</span>}
                </div>
                <button className='botonCreate' type='submit'> Crea un nuevo espacio de trabajo </button>
                <div className='spaceWorks'>
                    <h2> Espacios de trabajo para: pepe@example.com </h2>
                    <img className='imgWorks' src="https://a.slack-edge.com/613463e/marketing/img/homepage/bold-existing-users/create-new-workspace-module/woman-with-laptop-color-background.png" alt="" />
                    <button className='botonInitiation' onClick={() => navigate('/formulario')}> INICIAR SLACK </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default CrearEspacioTrabajo;