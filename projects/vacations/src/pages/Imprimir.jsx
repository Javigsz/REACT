import React,{useContext} from 'react'
import Contexto from '../contexto/Contexto';

const Imprimir = () => {
  const {misDatos} = useContext(Contexto);

  return (
    <div className="imprimir">
      <h3>Resumen:</h3>
      
      <div><img src={misDatos[0]}/></div>
        <div className="columnas">
        <div>Zona: {misDatos[1]}</div>
        <div>€ por día: {misDatos[2]}</div>
        {(misDatos[3]) && <div className="dato">Nombre: {misDatos[3]}</div>}
        {(misDatos[4]) && <div className="dato">Habitaciones: {misDatos[4]}</div>}
        {(misDatos[5]) && <div className="dato">Personas: {misDatos[5]}</div>}
        {(misDatos[6]) && <div className="dato">Días: {misDatos[6]}</div>}
        </div>
        {(misDatos[4]) && 
        <div>
          <h3>Total:  
          {Number(misDatos[2]) * Number(misDatos[4]||1) * Number(misDatos[5]||1) * Number(misDatos[6]||1)}€</h3></div>}
      
    </div>
  )
}

export default Imprimir
