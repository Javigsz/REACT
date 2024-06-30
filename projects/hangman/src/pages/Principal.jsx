/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Datos from '../data/Datos'
import alphabet from '../data/Alphabet'
import {useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto'

const Principal = () => {

    const [adivinado,setAdivinado] = useState('');
    const {errores,setErrores,randomElement,setRandomElement} = useContext(Contexto);
    const navigate = useNavigate();

    const aleatorio = () => {

        setRandomElement(Datos[Math.floor(Math.random() * Datos.length)]);

    }
    
    const pulso = (e) => {
        
        const theText = e.currentTarget.textContent;

        if (randomElement.palabro.indexOf(theText) > -1)
        {
            setAdivinado(adivinado + theText);
            e.target.style.backgroundColor = "#008000";
        }
        else{
            e.target.style.backgroundColor = "#FF0000";
            setErrores(errores+1);
        }
    }

    useEffect(() => {

        aleatorio();

    }, []);

    useEffect(() => {

        let noEncontrado = 0;

        // eslint-disable-next-line array-callback-return
        randomElement.palabro.split('').map(p => {
            if(adivinado.split('').find(e => e===p) === undefined){
                noEncontrado++;
            }
        })

        if (noEncontrado === 0){     
            setErrores(0)
            navigate('/resultado',{replace:true}) 
        }
    }, [adivinado]);

    useEffect(() => {
        if (errores === 7)
        {
            navigate('/resultado',{replace:true});
        }
    }, [errores]);

  return (
    <div className="to">
        <h1>HangMan</h1>
        <div className="pregunta">
            {randomElement.pregunta}
        </div>
        <div className="juego">
            {randomElement.palabro.split('').map(letter => (
                <div key={letter + Math.floor(Math.random() * 1110)}>
                    {adivinado.indexOf(letter) > -1 && <div className="letra">{letter}</div>}
                    {adivinado.indexOf(letter) === -1 && <div className="letra">&zwnj;</div>}
                    <div className="linea"></div>
                </div>
            ))} 
        </div>
        <div className="botones">
            {alphabet.map((item) => (
                <button key={item} value={item} onClick={pulso} id={item}>{item}</button>
            ))}
        </div>
        <div>
            <img src={"../images/el_ahorcado"+ errores +".png"} alt="hanged man"></img>
        </div>
    </div>
  )
}

export default Principal
