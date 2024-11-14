import React from 'react'

const Modal = ({imagenRecibida, isActivo, setIsActivo}) => {

    // Nos hemos traido también setIsActivo para poder manejar el cierre al hacer click en el modal
    const handleModal = () => {
        setIsActivo(false)
    }

  return (
    // Nuestro modal
    <div 
    className={`absolute left-0 top-0 w-[100%] h-[100%] backdrop-blur-lg ${isActivo ? 'block' : 'hidden'}`}
    style={{ backgroundImage: `url(${imagenRecibida})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}
    onClick={handleModal}
    />
  )
}

export default Modal