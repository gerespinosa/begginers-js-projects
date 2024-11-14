import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../../components/Button.jsx'
import CSSGenerator from '../components/CSSGenerator'
import CSSGeneratorParams from '../components/CSSGeneratorParams'

const CSSGeneratorPage = () => {

    const [color, setColor] = useState('white')
    const [ancho, setAncho] = useState(300)
    const [alto, setAlto] = useState(300)
    const [rounded, setRounded] = useState(0)
    const [isCopiado, setIsCopiado] = useState(false)

    const navigate = useNavigate()

    // Establecemos el color
    const reciboColor = (value) => {
        setColor(value)
    }

    // Establecemos el ancho
    const reciboAncho = (value) => {
        setAncho(value)
    }

    // Establecemos el alto
    const reciboAlto = (value) => {
        setAlto(value)
    }

    // Establecemos el rounded
    const reciboRounded = (value) => {
        setRounded(value)
    }

    // Cuando hagamos click en el botón, volveremos al índice
    const handleBack = () => {
        navigate("/")
    }

    const handleCopiar = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(`<div style={{
            backgroundColor:${color}, 
            width:${ancho}px, 
            height:${alto}px,
            borderRadius:${rounded}%
            }}></div>`)
        setIsCopiado(true)
        setInterval(() => {
            setIsCopiado(false)
        },2000)
    }
    
  return (
    <div className="bg-black p-8 h-[100vh] w-full justify-center flex flex-col gap-4">
        <CSSGeneratorParams envioColor={reciboColor} envioAncho={reciboAncho} envioAlto={reciboAlto} envioRounded={reciboRounded} reciboCopiar={handleCopiar} setIsCopiado={setIsCopiado} isCopiado={isCopiado}/>
        <CSSGenerator colorRecibido={color} anchoRecibido={ancho} altoRecibido={alto} roundedRecibido={rounded} />
        <Button text={"Volver"} onClick={handleBack}  />
    </div>
  )
}

export default CSSGeneratorPage