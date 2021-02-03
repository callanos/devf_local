import React from 'react';
import { useState } from 'react';

function HolaMundo(props){

    const[texto,setTexto] = useState( props.texto );
    const[edad,setEdad] = useState( 0 );

    return(
        <>
            <h1>Componente Hola Mundo...{edad}</h1>
            <h2>{texto}</h2>
            <input 
                placeholder='Cambia el texto'
                type='text'
                onChange={ e => setTexto(e.target.value) }
            />
            <input 
                placeholder='Cambia la edad!'
                type='number'
                onChange={ e => setEdad(e.target.value) }
            />

        </>
    )
}

export default HolaMundo;