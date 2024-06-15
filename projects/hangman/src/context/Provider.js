import React from 'react'
import { useState } from 'react';
import Contexto from './Contexto';
import Datos from '../data/Datos'

const Provider = ({children}) => {

    const [errores,setErrores] = useState(1);
    const [randomElement,setRandomElement] = useState(Datos[0]);

  return (
    <Contexto.Provider value={{
            errores,
            setErrores,
            randomElement,
            setRandomElement
        }}>
        {children}
        </Contexto.Provider>
  )
}

export default Provider