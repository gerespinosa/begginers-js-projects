import React, { useState } from 'react'
import PassGenerator from '../components/PassGenerator'
import PassParams from '../components/PassParams'

import { useNavigate } from 'react-router-dom'

import Button from '../../../components/Button'

const PassGeneratorPage = () => {

  const [letrasActivadas, setLetrasActivadas] = useState(false)
  const [numerosActivados, setNumerosActivados] = useState(false)
  const [simbolosActivados, setSimbolosActivados] = useState(false)

  const navigate = useNavigate()

  const reciboLetras = (value) => {
    setLetrasActivadas(value)
  }

  const reciboNumeros = (value) => {
    setNumerosActivados(value)
  }

  const reciboSimbolos = (value) => {
    setSimbolosActivados(value)
  }

  // Cuando hagamos click en el botón, volveremos al índice
  const handleBack = () => {
    navigate("/")
}

  return (
    <div className="bg-black p-8 h-[100vh] w-full justify-center items-center flex flex-col gap-4">
        <PassGenerator letrasActivadas={letrasActivadas} numerosActivados={numerosActivados} simbolosActivados={simbolosActivados} />
        <PassParams envioLetras={reciboLetras} envioNumeros={reciboNumeros} envioSimbolos={reciboSimbolos} />
        <Button text='Volver' onClick={handleBack} />
    </div>
  )
}

export default PassGeneratorPage