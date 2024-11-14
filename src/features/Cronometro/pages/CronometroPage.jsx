import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../../components/Button'
import Cronometro from '../components/Cronometro'

const CronometroPage = () => {

    const navigate = useNavigate()

    // Cuando hagamos click en el botón, volveremos al índice
    const handleBack = () => {
        navigate("/")
    }

  return (
    <div className="bg-black p-8 h-[100vh] w-full justify-center flex flex-col gap-4">
        <Cronometro/>
        <Button text='Volver' onClick={handleBack} />
    </div>
  )
}

export default CronometroPage