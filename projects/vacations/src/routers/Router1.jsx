import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Principal from '../pages/Principal'
import Resumen from '../pages/Resumen'

const Router1 = () => {
  return (
    <>
      <Routes>
          <Route path="principal" element={<Principal/>}/>
          <Route path="resumen" element={<Resumen/>}/>
          <Route path="/*" element={<Principal/>}/>
      </Routes>
    </>
  )
}

export default Router1
