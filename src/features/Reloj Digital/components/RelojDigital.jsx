import React, {useState} from "react"

const RelojDigital = () => {
        // Establecemos los estados iniciales de 
        const [horas, setHoras] = useState(null)
        const [min, setMin] = useState(null)
        const [seg, setSeg] = useState(null)
    
        // Establecemos un timeout para que se actualice cada segund (1000ms), mostrando en pantalla la hora actual
        setTimeout(() => {
            const ahora = new Date()
            setHoras(ahora.getHours())
            setMin(ahora.getMinutes())
            setSeg(ahora.getSeconds())
        }, 1000)
    
      return (
        <div className="w-fit mx-auto text-4xl">
            {/* Utilizamos condicionales para dar formato a las horas, minutos y segundos. Si son inferiores a 10, mostrará 2 dígitos */}
            {`
            ${horas < 10 ? `0${horas}` : `${horas}`}
            :
            ${min < 10 ? `0${min}` : `${min}`}
            :
            ${seg < 10 ? `0${seg}` : `${seg}`}
            `}
        </div>
      )
}

  export default RelojDigital