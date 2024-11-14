import React from 'react'

const CSSGenerator = ({colorRecibido, anchoRecibido, altoRecibido, roundedRecibido}) => {

  return (

    // Lo que nos devuelve
    <div className='bg-gray-600 w-[100%] h-[75%] flex flex-col justify-center items-center'>
        <div style={{
            backgroundColor:colorRecibido, 
            width:`${anchoRecibido}px`, 
            height:`${altoRecibido}px`,
            borderRadius:`${roundedRecibido}%`
            }}>
            
        </div>
    </div>
  )
}

export default CSSGenerator