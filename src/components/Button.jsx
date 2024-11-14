import React from 'react'

// Creamos un botón que vamos a reutilizar en toda la web. Le pasamos dos props, text y onClick para seleccionar el contenido del texto y qué acción realizará cuando hagamos click en él.

const Button = ({text, onClick}) => {

  return (
    <button 
    className='p-2 shadow-lg shadow-gray-600 w-fit mx-auto'
     onClick={onClick}>
        {text}
    </button>
  )
}

export default Button