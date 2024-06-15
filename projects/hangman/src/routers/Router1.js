import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Principal from '../pages/Principal'
import RutasPrivadas from './RutaPrivada'
import Resultado from '../pages/Resultado'

const Router1 = () => {
  return (
    <div>
      <Routes>
          <Route path="principal" element={<Principal/>}/>
          <Route path="resultado" element={
            <RutasPrivadas>
                <Resultado/>
            </RutasPrivadas>
        }/>
          <Route path="/*" element={<Principal/>}/>
      </Routes>
    </div>
  )
}

export default Router1
