import React, {useState} from 'react'

export default function Saludo({usuario, mensaje}) {
    const [mostrarMensaje, setMostrarMensaje] = useState(false)
    return (
        <div>
            <h1>{usuario}</h1>
            <button onClick={() => setMostrarMensaje(mostrarMensaje => !mostrarMensaje)}>Mostrar saludo</button>
            {
                mostrarMensaje ? <span>{mensaje}</span> : "Sin mensaje"
            }
        </div>
    )
}
