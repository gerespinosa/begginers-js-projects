import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../../components/Button.jsx'
import NotasAnadir from '../components/NotasAnadir'
import NotasContenedor from '../components/NotasContenedor'

const NotasPage = () => {

  const [notas, setNotas] = useState([])

  const navigate = useNavigate()

    // Cuando hagamos click en el botón, volveremos al índice
    const handleBack = () => {
      navigate("/")
  }

  const reciboNota = (value) => {
    setNotas([...notas, value])
  }

  return (
    <div className="bg-black p-8 h-[100vh] w-full justify-start flex flex-col gap-4">
        <NotasAnadir envioNota={reciboNota}/>
        {/* Pasamos las notas recibidas desde NotasAnadir hasta el otro componente child mediante props */}
        <NotasContenedor notasRecibidas={notas} /> 
        <Button text='Volver' onClick={handleBack}/>
    </div>
  )
}

export default NotasPage