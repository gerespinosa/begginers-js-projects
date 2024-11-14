import React, {useRef} from "react"

const RelojAnalogico = () => {
        // Establecemos las referencias
        const horario = useRef(null)
        const minutero = useRef(null)
        const secundero = useRef(null)
        
        // Establecemos un timeout para que se actualice cada segund (1000ms), mostrando en pantalla la hora actual
            setInterval(() => {
              const ahora = new Date()
              // Obtenemos las horas, minutos y segundos de la hora actual
              let horas = ahora.getHours()
              let min = ahora.getMinutes()
              let seg = ahora.getSeconds()
    
              // Para cada hora, le corresponden 30 grados, para cada minuto y cada segundo 6 grados
              let gradosHorario = (horas % 12) * 30 + min * 0.5;
              let gradosMinutero = min * 6
              let gradosSecundero = seg * 6

              // Aplicamos los grados cada segundo
              horario.current.style.transform = `rotate(${gradosHorario}deg)`;
              minutero.current.style.transform = `rotate(${gradosMinutero}deg)`;
              secundero.current.style.transform = `rotate(${gradosSecundero}deg)`;

            }, 1000)
    
      return (
        <div className="relative border-2 border-dashed border-green-500 rounded-full w-[200px] h-[200px] bg-slate-700">
            {/* Agujas del reloj */}
            <span 
                ref={horario} 
                className="w-[2px] bg-white h-[50px] block absolute top-12 left-1/2 transform origin-bottom -translate-x-1/2 -translate-y-full"
            />
            <span 
                ref={minutero} 
                className="w-[2px] bg-green-600 h-[70px] block absolute top-6 left-1/2 transform origin-bottom -translate-x-1/2 -translate-y-full"
            />
            <span 
                ref={secundero} 
                className="w-[2px] bg-red-600 h-[80px] block absolute top-4 left-1/2 transform origin-bottom -translate-x-1/2 -translate-y-full"
            />
            {/* Centro del reloj */}
            <span className="w-4 bg-yellow-400 h-4 rounded-full absolute top-[90px] left-[90px] -translate-x-1/2 -translate-y-1/2" />
        {/* Marcas horarias */}
          <span className="absolute top-0 left-[90px]">12</span>
          <span className="absolute top-2 right-12">1</span>
          <span className="absolute top-10 right-4">2</span>
          <span className="absolute bottom-[90px] right-0">3</span>
          <span className="absolute bottom-10 right-4">4</span>
          <span className="absolute bottom-2 right-12">5</span>
          <span className="absolute bottom-0 left-[90px]">6</span>
          <span className="absolute bottom-2 left-12">7</span>
          <span className="absolute bottom-10 left-4">8</span>
          <span className="absolute bottom-[90px] left-0">9</span>
          <span className="absolute top-10 left-2">10</span>
          <span className="absolute top-2 left-10">11</span>
      </div>
      
      )
}

  export default RelojAnalogico