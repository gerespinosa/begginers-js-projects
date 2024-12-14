import React from 'react'
import Button from '../../../components/Button'
import { useNavigate } from 'react-router-dom'
import TresEnRaya from '../components/TresEnRaya'

const TresEnRayaPage = () => {

  const navigate = useNavigate()

    // Cuando hagamos click en el botón, volveremos al índice
    const handleBack = () => {
      navigate("/")
    }

  return (
    <div className="bg-black p-8 h-[100vh] w-full justify-center items-center flex flex-col gap-4">
        <TresEnRaya />
        <Button text='Volver' onClick={handleBack}/>
    </div>
  )
}

export default TresEnRayaPage