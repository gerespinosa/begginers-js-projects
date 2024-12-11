import React from 'react'
import { useNavigate } from 'react-router-dom'

import QR from '../components/QR'
import Button from '../../../components/Button.jsx'

const QRPage = () => {

    const navigate = useNavigate()

    // Cuando hagamos click en el botón, volveremos al índice
    const handleBack = () => {
    navigate("/")
    }

  return (
    <div className="bg-gray-700 p-8 h-[100vh] w-full justify-center items-center flex flex-col gap-4">
        <QR />
        <Button text='Volver' onClick={handleBack} />
    </div>
  )
}

export default QRPage