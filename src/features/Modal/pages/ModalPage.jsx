import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import Foto from '../components/Foto'
import Modal from '../components/Modal'
import Button from '../../../components/Button'

const ModalPage = () => {

  const [isActivo, setIsActivo] = useState(false)
  const [imagen, setImagen] = useState('')

  const navigate = useNavigate()

  // Recibimos por props la url de la imagen en la que clicamos en la galería. Establecemos el estado de imagen con esta url. 
  // Además, cambiamos el estado del modal a true para que lo podamos mostrar
  const reciboUrl = (value) => {
    setImagen(value)
    setIsActivo(true)
    console.log(imagen)
  }

      // Cuando hagamos click en el botón, volveremos al índice
      const handleBack = () => {
        navigate("/")
    }

  return (
  <div>
      {/* Creamos una pequeña galería */}
      <div className="bg-black p-8 h-[full] md:h-[100vh] w-full flex flex-col gap-4 justify-center items-center">
        <div className="bg-black p-8 h-[full] md:h-[100vh] w-full flex flex-col md:flex-row gap-4 justify-center items-center">
          <Foto url={'https://images.unsplash.com/photo-1721333084639-0f64b0583875?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} envioUrl={reciboUrl}/>
          <Foto url={'https://images.unsplash.com/photo-1726610930930-0e1af5f2d038?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} envioUrl={reciboUrl}/>
          <Foto url={'https://plus.unsplash.com/premium_photo-1664382465641-997aa3b73907?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} envioUrl={reciboUrl}/>
          <Foto url={'https://plus.unsplash.com/premium_photo-1715876268461-7d85ee7b1452?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} envioUrl={reciboUrl}/>
        </div>
      <Button text={'Volver'} onClick={handleBack} />
      </div>

    {/* Creamos nuestro modal, que recibirá la imagen en la que hagamos click, así como el manejo de estado para mostrarlo o no */}
    <Modal imagenRecibida={imagen} isActivo={isActivo} setIsActivo={setIsActivo} />

  </div>
  )
}

export default ModalPage
