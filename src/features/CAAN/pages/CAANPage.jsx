import React from 'react'
import { useNavigate } from 'react-router-dom'

import CuentaAtras from '../components/CuentaAtras'
import Button from '../../../components/Button'

const CAANPage = () => {

    const navigate = useNavigate()

    // Cuando hagamos click en el botón, volveremos al índice
    const handleBack = () => {
        navigate("/")
    }

  return (
    <div className="bg-black p-8 h-[100vh] w-full justify-center flex flex-col gap-4">
        <h1 className='text-center text-4xl'>Tiempo restante para Año Nuevo</h1>
        <CuentaAtras/>
        <Button text='Volver' onClick={handleBack}/>
    </div>
  )
}
export default CAANPage
