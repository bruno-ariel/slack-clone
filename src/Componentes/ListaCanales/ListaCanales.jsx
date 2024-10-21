import React from 'react'
import { HiHashtag } from "react-icons/hi2";

const ListaCanales = (props) => {

    const mapeoDeCanales = props.canales.map((item) => {
        return (
            <div key={item.id}>
                <p><HiHashtag /> {item.nombreCanal}</p>
            </div>
        )
    })

    return (
        <div className='containerChannel'>
            <h1>{props.titulo}</h1>
            {mapeoDeCanales}
        </div>
    )
}

export default ListaCanales