import React from 'react'

import Button from '../../../components/Button'

const CSSGeneratorParams = ({envioColor, envioAncho, envioAlto, envioRounded, reciboCopiar, setIsCopiado, isCopiado }) => {

    // Enviamos el color al elemento padre
    const cambioColor = (e) => {
        envioColor(e.target.value)
    }

    // Enviamos el ancho
    const cambioAncho = (e) => {
        envioAncho(e.target.value)
    }

    // Enviamos el alto
    const cambioAlto = (e) => {
        envioAlto(e.target.value)
    }

    // Enviamos el rounded
    const cambioRounded = (e) => {
        envioRounded(e.target.value)
    }

  return (
    <div className='w-fit h-50 flex justify-between'>
        <form className='flex gap-2'>
            {/* Color */}
            <input type="color" onChange={cambioColor}
            className='h-[40px]'/>

            {/* Ancho */}
            <input type='number' onChange={cambioAncho} 
            min={0} max={800} 
            className='text-black'
            placeholder='Ancho'/>

            {/* Alto */}
            <input type='number' onChange={cambioAlto} 
            min={0} max={800} 
            className='text-black'
            placeholder='Altura'/>

            {/* Rounded */}
            <input type="number" onChange={cambioRounded}
            min={0} max={100}
            className='text-black w-[100px]'
            placeholder='Rounded'/>

            {/* Botón para copiar en el portapapeles */}
            <div className='flex items-center gap-2'>
                <Button text={"Copiar"} onClick={reciboCopiar} />
                <h4 className={`${isCopiado ? 'flex' : 'hidden'} text-white`}>Elemento copiado</h4> 
            </div>
        </form>
    </div>
  )
}

export default CSSGeneratorParams