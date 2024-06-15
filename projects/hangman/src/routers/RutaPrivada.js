import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import  Contexto  from '../context/Contexto';

const RutasPrivadas = ({children}) => {
    const {errores} = useContext(Contexto);
    
  return (errores === 7 || errores === 0)
    ? children
    : <Navigate to="/principal"/>
}

export default RutasPrivadas