import React, {useState}  from 'react'

const NotasAnadir = ({envioNota}) => {

    const [notaActiva, setNotaActiva] = useState(false)
    const [texto, setTexto] = useState('')

    // Primero, dejaremos almacenado el valor del texto cuando este cambie
    const handleCambio = (e) => {
      setTexto(e.target.value)
    }

    // Para luego enviar la nota con el valor del estado de 'texto' como parámetro
    const handleEnvio = (e) => {
      e.preventDefault()
      envioNota(texto)
      // Reiniciamos el contenido del textarea
      setTexto(' ')
      // Reiniciames el estado de la nota base
      setNotaActiva(false)
    }

    const handleNotaActiva = () => {
        // Al hacer click en '+', podemos empezar a escribir nuestra nota
        setNotaActiva(true)
    }


  return (
    <div className='relative flex-col w-[200px] min-h-[250px] bg-yellow-300 border-[1px] border-gray-700 p-2 rounded-sm shadow-slate-600 shadow-md text-gray-700 justify-between flex'>

        {/* Cuando la nota está activa, podemos escribir texto en el cuadro */}
          <form 
          className='h-full flex flex-col justify-evenly px-2'
          onSubmit={handleEnvio}>
            <textarea 
            className={`bg-transparent w-full h-[75%] resize-none outline-none text-gray-700
              ${notaActiva ? 'block' : 'hidden'}`} 
            placeholder='Escribe aqui tu texto'
            onChange={handleCambio}/>

            {/* Botón para enviar el formulario, una vez ya hemos registrado el cambio de estado */}
            <button 
              className={`p-2 shadow-lg shadow-gray-600 w-fit mx-auto text-gray-700
              ${notaActiva ? 'block' : 'hidden'}`}>
                Añadir
            </button>

        {/* Si la nota no está activa, tenemos un icono de "+" para añadir una nueva nota al hacer click sobre él */}
              <i className={`fa-solid fa-plus text-8xl text-gray-700 m-auto
                ${notaActiva ? 'hidden' : 'block'}`}
                onClick={handleNotaActiva} />
          </form>
    </div>
  )
}

export default NotasAnadir
