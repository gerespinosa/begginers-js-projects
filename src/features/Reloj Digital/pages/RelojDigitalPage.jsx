import React from 'react'
import { useNavigate } from 'react-router-dom'

import RelojDigital from '../components/RelojDigital'
import Button from '../../../components/Button'

const RelojDigitalPage = () => {

    const navigate = useNavigate()

       // Cuando hagamos click en el botón, volveremos al índice
    const handleBack = () => {
        navigate("/")
    }

    return (
        <div className="bg-black p-8 h-[100vh] w-full justify-center flex flex-col gap-4">
            <RelojDigital />
            <Button text='Volver' onClick={handleBack}/>
        </div>
    )

}

export default RelojDigitalPage