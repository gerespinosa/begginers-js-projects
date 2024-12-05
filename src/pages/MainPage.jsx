import React from 'react'

const MainPage = () => {
  return (
    <div className="bg-gradient-to-tr from-[#020024] via-[#093679] to-[#00d4ff] p-8 h-[100vh] w-full">
        <ul className='flex flex-wrap gap-2'>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/CAAN'>1. Cuenta atrás para Año Nuevo</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/reloj-digital'>2. Reloj digital</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/reloj-analogico'>3. Reloj analógico</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/generador-css'>4. Generador CSS</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/cronometro'>5. Cronómetro</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/notas'>6. Notas</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/modal'>7. Modal</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/pass-generator'>8. Generador Contraseñas</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/ratings'>9. Ratings de productos</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/slider'>10. Slider de productos</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/calculadora'>11. Calculadora</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/generador-qr'>12. Generador QR</a>
            <a className='w-[125px] h-[125px] bg-black bg-opacity-25 shadow-md flexbox content-center text-center'
             href='/tres-en-raya'>13. Tres en raya</a>
        </ul>
    </div>
  )
}

export default MainPage