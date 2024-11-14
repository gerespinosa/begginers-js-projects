import React from 'react'

// Como props, recibimos url que es la url que tiene la imagen, y enviamos envioUrl con la url de la imagen en la que hacemos click
const Foto = ({url, envioUrl}) => {

    const handleUrl = (e) => {
        envioUrl(e.target.src)
    }

  return (
    <div className='flex flex-wrap'>
        <img 
        src={url} 
        alt={url}
        className='w-[400px] h-[400px] hover:scale-110' 
        onClick={handleUrl}/>
    </div>
  )
}

export default Foto