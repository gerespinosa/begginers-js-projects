import React from 'react'

const MainPage = () => {
  return (
    <div className="bg-gradient-to-tr from-[#020024] via-[#093679] to-[#00d4ff] p-8 h-[100vh] w-full">
        <ul className='flex flex-wrap gap-2'>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/CAAN'>1. Cuenta atrás para Año Nuevo</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/reloj-digital'>2. Reloj digital</a>
            {/* <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/reloj-analogico'>3. Reloj analógico</a> */}
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/generador-css'>3. Generador CSS</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/cronometro'>4. Cronómetro</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/notas'>5. Notas</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/modal'>6. Modal</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/pass-generator'>7. Generador Contraseñas</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/ratings'>8. Ratings de productos</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/slider'>9. Slider de productos</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/calculadora'>10. Calculadora</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/qr'>11. Generador QR</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/tres-en-raya'>12. Tres en raya</a>
        </ul>
    </div>
  )
}

export default MainPage