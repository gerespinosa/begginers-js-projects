import React, {useRef, useState} from 'react'
import Qrious from 'qrious'

const QR = () => {

    const [color, setColor] = useState('white')
    const [front, setFront] = useState('black')
    const [size, setSize] = useState(150)
    const [url, setUrl] = useState('www.gerespinosa.com')

    const canvasRef = useRef(null)
    // Iniciamos la instancia de Qrious
    const qr = new Qrious({
        element: canvasRef.current,
        background: color,
        foreground: front,
        size: size,
        value: url
    })

    // Ajustamos el color del back
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }
    // Ajustamos el color del front
    const handleFrontChange = (e) => {
        setFront(e.target.value)
    }
    // Ajustamos el tamaño
    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }
    // Ajustamos el destino o URL
    const handleUrlChange = (e) => {
        setUrl(e.target.value)
    }
   

  return (
    <div className='flex flex-col justify-center items-center gap-8'>
        <div className='flex flex-col gap-2 bg-slate-500 p-10 rounded-md shadow-md'>
            <div className='flex gap-2'>
                <div className='flex gap-2'>
                    <h3>Color fondo: </h3>
                    <input type="color" onChange={handleColorChange} />
                </div>
                <div className='flex gap-2'>
                    <h3>Color: </h3>
                    <input type="color" onChange={handleFrontChange} />
                </div>
            </div>
            <div className='flex gap-2 '>
                <h3>Tamaño: </h3>
                <input type="number" onChange={handleSizeChange} className='w-[50px] ' />
            </div>
            <div className='flex gap-2 '>
                <h3>URL: </h3>
                <input type="text" onChange={handleUrlChange} className='w-[200px]' />
            </div>
        </div>
    <canvas ref={canvasRef} className="bg-gray-700 w-[200px] h-[200px]">{QR}</canvas>
    </div>
  )
}

export default QR