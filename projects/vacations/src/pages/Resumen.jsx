import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Imprimir from './Imprimir';
import {useForm} from "react-hook-form"
import datos2 from '../data/datos2.js'
import Contexto from '../contexto/Contexto';

const Resumen = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors},watch,reset} = useForm();
    const {etapa,setEtapa,misDatos} = useContext(Contexto);
    const masDatos = ['nombre','habitaciones','personas','dias'];

    const obtenerValores2 = (data) => {   
      misDatos.push(data.valor);
      console.log(misDatos);
      setEtapa(etapa+1);

      reset();
    }

    const volver = () => {
      navigate('/principal',{replace:true});
      setEtapa(0);
      misDatos.length = 0;
    }

    const imprime = () => {
      window.print();
    }

  return (
    <>
    <div className="to">
      {(etapa < 4) && <div>
        <form onSubmit={handleSubmit(obtenerValores2)}>
          <div className="final">
            <label htmlFor="valor">{datos2[etapa].texto}:</label>
            {watch('valor') && <span className="watch" > {watch('valor')} {datos2[etapa].sufijo}
            </span>}
            <div>
              <input id="valor" autoFocus
              {...register('valor', { 
                required: datos2[etapa].obligatorio,
                max: datos2[etapa].maximo,
                min: datos2[etapa].minimo
              }
              )}></input>
            </div>
            {errors.valor?.type === "required" && 
            <div className="aviso">El {masDatos[etapa]} es obligatorio
            </div>}
            {errors.valor?.type === "min" && 
            <div className="aviso">El {masDatos[etapa]} debe ser minimo {datos2[etapa].minimo}
            </div>}
            {errors.valor?.type === "max" && 
            <div className="aviso">El {masDatos[etapa]} debe ser maximo {datos2[etapa].maximo}
            </div>}
            <hr></hr>
            <input type="submit"></input>
          </div>
        </form>
      </div>}
      {etapa == 4 &&
      <div>
        ¿Quieres modificar los datos o finalizar e imprimir el pedido?
        <div>
          <button onClick={volver}>Volver</button>
          <button onClick={imprime}>Imprimir</button>
        </div>
      </div>}
      <div className="vertical">
        <Imprimir/>
      </div>
    </div>
    </>
  )
}

export default Resumen
