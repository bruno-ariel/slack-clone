import React from 'react'
const ListaCanales = (props) => {

    const mapeoDeCanales = props.canales.map((item) => {
        return (
            <div key={item.id}>
                <p>{item.nombreCanal}</p>
            </div>
        )
    })

    return (
        <>
            <h1>{props.titulo}</h1>
            {mapeoDeCanales}
        </>
    )
}

export default ListaCanales