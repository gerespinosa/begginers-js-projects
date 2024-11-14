import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../../components/Button'
import Ratings from '../components/Ratings'

const RatingsPage = () => {

  const navigate = useNavigate()

  // Cuando hagamos click en el botón, volveremos al índice
  const handleBack = () => {
    navigate("/")
  }

  return (
    <div className="bg-black p-8 h-full md:min-h-[100vh] w-full justify-center items-center flex flex-col gap-4">
        <Ratings />
        <Button text='Volver' onClick={handleBack}/>
    </div>
  )
}

export default RatingsPage