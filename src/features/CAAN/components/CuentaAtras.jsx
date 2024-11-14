import React, {useState} from 'react'

const CuentaAtras = () => {

    //Establezco los estados iniciales para 
    const [dias, setDias] = useState(null)
    const [horas, setHoras] = useState(null)
    const [min, setMin] = useState(null)
    const [seg, setSeg] = useState(null)

    setInterval(() => {
        const fechaAnoNuevo = new Date('01-01-2025 00:00:00')
        const ahora = new Date()

        //Formateo el tiempo, obteniendo días, horas, minutos y segundos
        const tiempoRestanteDias = (Math.floor((fechaAnoNuevo - ahora)/1000/3600/24)) // Divido por 1000 los ms, luego por 3600 para obtener el total de horas y luego por 24 para obtener el númer de días
        setDias(tiempoRestanteDias)
        const tiempoRestanteHoras = (Math.floor((fechaAnoNuevo - ahora)/1000/3600%24)) // Hago la operación anterior, pero obtengo el resto al dividir entre 24, es decir, el resto de horas que no llegan a un día completo
        setHoras(tiempoRestanteHoras)
        const tiempoRestanteMinutos = (Math.floor((fechaAnoNuevo - ahora)/1000/60%60)) // Igual para los minutos que me sobran
        setMin(tiempoRestanteMinutos)
        const tiempoRestanteSegundos = (Math.floor((fechaAnoNuevo - ahora)/1000%60%60)) // Igual para los segundos que me sobran
        setSeg(tiempoRestanteSegundos)
    }, 1000)

  return (
    <div className='text-center text-4xl'>
        {/* Formateo para devolverlo por pantalla */}
        {/* Añado condicionales en el string para ajustar léxicamente el tiempo restante */}
        {`${dias} ${dias == 1 ? 'dia' : 'días'} 
            ${horas} ${horas == 1 ? 'hora' : 'horas'} 
            ${min} ${min == 1 ? 'minuto' : 'minutos'} 
            ${seg} ${seg == 1 ? 'segundo' : 'segundos'}
        `}
    </div>
  )
}

export default CuentaAtras