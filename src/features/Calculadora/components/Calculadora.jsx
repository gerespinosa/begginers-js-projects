import React, {useState} from 'react'

const Calculadora = () => {

    const [valor, setValor] = useState('')
    
  return (
    // Contenedor
    <div className='w-[300px] h-[500px] border-[1px] bg-gradient-to-b from-black via-blue-900 to-slate-700 border-slate-700 rounded-md flex flex-col items-center justify-center gap-10'>
        {/* Pantalla */}
        <div>
            <input 
            type="text" 
            value={valor} 
            className='w-[250px] h-[60px] rounded-md bg-slate-700 text-right p-2 text-4xl' />
        </div>

        {/* Teclas */}
        <div className='flex flex-col justify-center gap-2'>
            {/* El funcionamiento se basa en crear strings con el valor de cada tecla, que serán evaluadas al hacer click en =, mediante el método eval() */}
            {/* Primera fila */}
            <div className='w-[300px] flex justify-center gap-2'>
                {/* El botón AC reinicia el valor de valor a '', por lo que no muestra nada en la pantalla */}
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl bg-opacity-50' onClick={e => setValor('')}>AC</button> 
                {/* El botón <- va a elminar el último carácter del string, en este caso valor, empezando por detrás  */}
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl bg-opacity-50' onClick={e => setValor(valor.slice(0, -1))}><i className="fa-solid fa-arrow-left"></i></button>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl bg-opacity-50' value={'%'} onClick={e => setValor(valor + e.target.value)}>%</button>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl bg-opacity-50' value={'*'} onClick={e => setValor(valor + e.target.value)}>X</button>
            </div>
            {/* Segunda fila */}
            <div className='w-[300px] flex justify-center gap-2'>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'7'} onClick={e => setValor(valor + e.target.value)}>7</button>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'8'} onClick={e => setValor(valor + e.target.value)}>8</button>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'9'} onClick={e => setValor(valor + e.target.value)}>9</button>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'/'} onClick={e => setValor(valor + e.target.value)}>/</button>
            </div>
            {/* Tercera fila */}
            <div className='w-[300px] flex justify-center gap-2'>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'4'} onClick={e => setValor(valor + e.target.value)}>4</button>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'5'} onClick={e => setValor(valor + e.target.value)}>5</button>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'6'} onClick={e => setValor(valor + e.target.value)}>6</button>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'-'} onClick={e => setValor(valor + e.target.value)}>-</button>
            </div>
            {/* Cuarta fila */}
            <div className='w-[300px] flex justify-center gap-2'>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'1'} onClick={e => setValor(valor + e.target.value)}>1</button>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'2'} onClick={e => setValor(valor + e.target.value)}>2</button>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'3'} onClick={e => setValor(valor + e.target.value)}>3</button>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'+'} onClick={e => setValor(valor + e.target.value)}>+</button>
            </div>
            {/* Última fila */}
            <div className='w-[300px] flex justify-center gap-2'>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'00'} onClick={e => setValor(valor + e.target.value)}>00</button>
                <button className='w-[60px] h-[60px] rounded-full bg-slate-500 text-2xl' value={'0'} onClick={e => setValor(valor + e.target.value)}>0</button>
                <button className='w-[124px] h-[60px] rounded-full bg-yellow-500 text-4xl' onClick={e => setValor(eval(valor))}>=</button>
            </div>
        </div>
    </div>
  )
}

export default Calculadora