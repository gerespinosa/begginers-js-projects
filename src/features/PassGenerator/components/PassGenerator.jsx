import React, {useState} from 'react'

import Button from '../../../components/Button.jsx'

const PassGenerator = ({letrasActivadas, numerosActivados, simbolosActivados}) => {

    const [password, setPassword] = useState([])
    const [longitud, setLongitud] = useState(6)

    const generarPass = () => {
        const passwordArray = []
        for(let i = 0; i <= longitud; i++){
            const random = Math.floor(Math.random()* 3 )
            console.log(random)
            switch(random){
                // Números
                case(0): {
                    if(numerosActivados){
                      const numero = Math.floor(Math.random()* 9 )
                    // Añadimos el número que se genera el array
                    passwordArray.push(numero)
                    break;
                    }else{
                      passwordArray.push("a")
                    }
                };
                // Letras
                case(1): {
                    if(letrasActivadas){
                      const alfabeto = [
                        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
                      ];
                    // Con el primer random, seleccionamos una letra al azar del alfabeto
                    const numero = Math.floor(Math.random() * alfabeto.length)
                    // Con el segundo random, elegimos si la letra se devuelve en mayus. o minus.
                    const numeroMayusculas = Math.floor(Math.random() * 2)
                      if(numeroMayusculas == 1){
                        passwordArray.push(alfabeto[numero].toUpperCase())
                      }else if (numeroMayusculas == 0){
                        passwordArray.push(alfabeto[numero].toLowerCase())
                      }
                    }else{
                      passwordArray.push("0")
                    }
                    break;
                };
                // Símbolos
                case(2): {
                  if(simbolosActivados){
                    const simbolosPassword = [
                      "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", 
                      "{", "}", "[", "]", ":", ";", "'", "\"", "<", ">", ",", ".", "?", "/", "|", "~", "`"
                    ];
                  // Al igual que las letras, elegimos un símbolo dentro del array de forma aleatoria
                  const numero = Math.floor(Math.random() * simbolosPassword.length)
                  passwordArray.push(simbolosPassword[numero])
                  break;
                  }else{
                    passwordArray.push("0")
                  }
                }
            }
        }
        setPassword(passwordArray.join(""))
    }

    const handleCambio = (e) => {
      setLongitud(e.target.value - 1)
    }

  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
      <input type="number" 
      placeholder='Longitud'
      className='p-2 text-black w-[100px]'
      onChange={handleCambio} />
      <h1 className='text-2xl'>{password}</h1>
      <Button text='Generar' onClick={generarPass} />
    </div>
  )
}

export default PassGenerator