import React from 'react'
import { useNavigate } from 'react-router-dom'

import RelojAnalogico from '../components/RelojAnalogico'
import Button from '../../../components/Button'

const RelojAnalogicoPage = () => {

    const navigate = useNavigate()

       // Cuando hagamos click en el botón, volveremos al índice
    const handleBack = () => {
        navigate("/")
    }

    return (
        <div className="bg-black p-8 h-[100vh] w-full justify-center items-center flex flex-col gap-4">
            <RelojAnalogico />
            <Button text='Volver' onClick={handleBack}/>
        </div>
    )

}

export default RelojAnalogicoPage