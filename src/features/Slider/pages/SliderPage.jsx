import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import Slider from '../components/Slider';

const SliderPage = () => {

    const navigate = useNavigate()
    
    // Al hacer click, volveremos a la página de menú
    const handleBack = () => {
        navigate('/')
    }

  return (
    <div className="bg-black p-8 h-[100vh] w-full justify-center flex flex-col gap-4">
        <Slider />
        <Button text='Volver' onClick={handleBack} />
    </div>
  )
}

export default SliderPage