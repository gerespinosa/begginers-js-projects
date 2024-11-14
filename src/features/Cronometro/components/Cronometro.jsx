import React, { useState, useEffect } from 'react'

import Button from '../../../components/Button.jsx'

const Cronometro = () => {

    // Establecemos los estados iniciales
    const [segundos, setSegundos] = useState(0)
    const [minutos, setMinutos] = useState(0)
    const [horas, setHoras] = useState(0)

    const [isPlay, setIsPlay] = useState(false)

    useEffect(() => {
        let interval

        // Solo funcionará cuando el estado de isPlay (está funcionando) sea true
        if(isPlay){
            interval = setInterval(() => {
                // Empezamos manejando los segundos...
                setSegundos((prevSegundos) => {
                    // ...si los segundos anteriores son 59, suma valora los minutos.
                    if(prevSegundos === 59){
                        setMinutos((prevMinutos) => {
                            if(prevMinutos === 59){
                                // Cuando llega a 59 minutos, reinicia los minutos y suma 1 hora
                                setHoras((prevHoras) => prevHoras + 1)
                                return 0
                            }else {
                                // Mientras no llegue a 59 minutos, sigue sumando minutos
                                return prevMinutos + 1
                            }                          
                        })
                    }else{
                        // ... y si no son 59 segundos, entonces sigue sumando 1 segundo más
                        return prevSegundos + 1
                    }
                    // Cuando llega a 59 segundos, además de valorar los minutos, reinicia los segundos
                    return 0
                })
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isPlay])

   
    function handleCronometro(){
        // Cambia el estado de isPlay en función de su estado anterior
        setIsPlay((prevIsPlay) => !prevIsPlay)
    }

  return (
    <div className='flex flex-col justify-center items-center gap-4'>

        {/* Creamos un botón para parar y poner en funcionamiento el cronómetro */}
        <Button text={`${isPlay ? 'Pausa' : 'Go!'}`} onClick={handleCronometro} />

        {/* Contenedor del cronómetro */}
        <div className='text-4xl text-center'>
        {`
        ${horas < 10 ? `0${horas} :` : `${horas} :`} 
        ${minutos < 10 ? `0${minutos} :` : `${minutos} :`} 
        ${segundos < 10 ? `0${segundos}` : `${segundos}`}
        `}
        </div>

    </div>
  )
}

export default Cronometro