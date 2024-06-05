import React from 'react'
import { useState } from 'react';
import Contexto from './Contexto';

const misDatos = [];

const Provider = ({children}) => {

    const [etapa,setEtapa] = useState(0);

  return (
    <Contexto.Provider value={{
            misDatos,
            etapa,
            setEtapa
        }}>
            {children}
        </Contexto.Provider>
  )
}

export default Provider
