import React from 'react'
import Contexto from '../context/Contexto'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Resultado = () => {
  const {errores,randomElement,setErrores} = useContext(Contexto);

  const reset = () => {
    setErrores(1);
  }

  return (
    <div className="result">
      {errores === 7 && 
        <div>
          <h2>YOU LOST :/ The answer was: </h2>
          <h3>{randomElement.palabro}</h3>
          <img src="../images/el_ahorcado6.png" alt={randomElement.palabro}></img>
        </div>
      }
      {errores < 7 && 
        <div>
          <h2>YOU WON. Correct answer was: </h2>
          <h3>{randomElement.palabro}</h3>
        </div>
      }
      <button onClick={reset}>
        <Link to="/">Play again</Link>
      </button>
    </div>
  )
}

export default Resultado
