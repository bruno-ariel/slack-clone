import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CrearEspacioTrabajo = () => {
    const [error, setError] = useState({ text: '', isError: false });
    const navigate = useNavigate(); 

    const handletSubmitForm = (e) => {
        e.preventDefault(); 
        const formulario = new FormData(e.target);
        const nombreTrabajo = formulario.get("nombreTrabajo");
        const nombreCanal = formulario.get("nombreCanal");

        if (!nombreTrabajo || nombreTrabajo.length < 10) {
            setError({ isError: true, text: 'El nombre del trabajo debe tener al menos 10 caracteres' });
        } else if (!nombreCanal) {
            setError({ isError: true, text: 'El nombre del canal es requerido' });
        } else {
            setError({ text: '', isError: false });
            navigate('/');
        }
    };

    return (
        <>
            <h1>Crear espacio de trabajo</h1>
            <form onSubmit={handletSubmitForm}>
                <div>
                    <label htmlFor='nombreTrabajo'> Nombre de tu nuevo espacio de trabajo </label>
                    <input id='nombreTrabajo' name='nombreTrabajo' type='text'></input>
                    {error.isError && <span>{error.text}</span>}
                </div>
                <div>
                    <label htmlFor='nombreCanal'> Nombre de tu nuevo canal</label>
                    <input id='nombreCanal' name='nombreCanal' type='text'></input>
                    {error.isError && <span>{error.text}</span>}
                </div>
                <button type='submit'>Crear ahora</button>
            </form>
        </>
    );
};

export default CrearEspacioTrabajo;