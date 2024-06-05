import React from 'react'
import { useNavigate } from 'react-router-dom'
import datos from '../data/datos.js'
import {useForm} from "react-hook-form"
import { useContext} from 'react'
import Contexto from '../contexto/Contexto.js'

const Principal = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {misDatos} = useContext(Contexto);

    const obtenerValores = (data) => {
      navigate('/resumen',{replace:true});
      const precio = datos.find(e => e.lugar === data.lugar).precio;
      const imagen = datos.find(e => e.lugar === data.lugar).imagen;
      misDatos.push(imagen);
      misDatos.push(data.lugar);
      misDatos.push(precio);
      console.log(misDatos);
    }

  return (
    <>
      <form onSubmit={handleSubmit(obtenerValores)}>
        <div className="inicio">
          Selecciona la zona a visitar:
          <input type="submit"/>
          {errors.lugar?.type === "required" && 
          <span className="aviso1">Debes seleccionar una opción</span>}
        </div>
        <div className="caja">
          {datos.map(e => 
            <div key={e.lugar} className="pregunta">
              <input value={e.lugar} type="radio" id={e.lugar} name="action" 
              {...register('lugar',
                {
                  required: true,
                }
              )}></input>
            <label htmlFor={e.lugar}>{e.lugar}:</label>
            ({e.precio})
            <img src={e.imagen} alt={e.lugar}/>
            </div>
        )}  
        </div> 
      </form>
    </>
  )
}

export default Principal

//<input type="radio">