import React from 'react'

const MainPage = () => {
  return (
    <div className="bg-black p-8 h-[100vh] w-full">
        <ul className='flex flex-col gap-2 w-1/2'>
            <a href='/CAAN'>1. Cuenta atrás para Año Nuevo</a>
            <a href='/reloj-digital'>2. Reloj digital</a>
            <a href='/reloj-analogico'>3. Reloj analógico</a>
            <a href='/generador-css'>4. Generador CSS</a>
            <a href='/cronometro'>5. Cronómetro</a>
            <a href='/notas'>6. Notas</a>
            <a href='/modal'>7. Modal</a>
            <a href='/pass-generator'>8. Generador Contraseñas</a>
            <a href='/ratings'>9. Ratings de productos</a>
            <a href='/slider'>10. Slider de productos</a>
            <a href='/calculadora'>11. Calculadora</a>
            <a href='/generador-qr'>12. Generador QR</a>
            <a href='/tres-en-raya'>13. Tres en raya</a>
        </ul>
    </div>
  )
}

export default MainPage