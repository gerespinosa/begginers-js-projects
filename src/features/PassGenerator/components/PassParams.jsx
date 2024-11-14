import React from 'react'

const PassParams = ({envioLetras, envioNumeros, envioSimbolos}) => {

    const handleLetras = (e) => {
        envioLetras(e.target.checked)
    }

    const handleNumeros = (e) => {
        envioNumeros(e.target.checked)
    }

    const handleSimbolos = (e) => {
        envioSimbolos(e.target.checked)
    }

  return (
    // Establecemos si la contraseña puede o no tener cada tipo de carácter
    <form className='flex gap-2'>
        <input type="checkbox" name='letras' onChange={handleLetras}/>
        <label htmlFor="name">Letras</label>
        <input type="checkbox" name='numeros' onChange={handleNumeros}/>
        <label htmlFor="numeros">Números</label>
        <input type="checkbox" name='simbolos' onChange={handleSimbolos}/>
        <label htmlFor="simbolos">Símbolos</label>
    </form>
  )
}

export default PassParams