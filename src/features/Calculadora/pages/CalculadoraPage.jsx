import React from 'react'
import { useNavigate } from 'react-router-dom'
import Calculadora from '../components/Calculadora'
import Button from '../../../components/Button'

const CalculadoraPage = () => {

  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className="bg-black p-8 h-[100vh] w-full items-center justify-center flex flex-col gap-4">
        <Calculadora />
        <Button text='Volver' onClick={handleBack} />
    </div>
  )
}

export default CalculadoraPage