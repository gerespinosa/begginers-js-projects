import React from 'react'

import Estrellas from './Estrellas.jsx'
import { productos } from '../lib/productos.js'

const Producto = () => {

  return (
    <div className='flex flex-col md:flex-row gap-2'>
        {productos.map((producto) => {
            // Para cada producto del archivo productos.js (constante productos), vamos a mapear los atributos necesarios
            return (
                <div className='flex flex-col'>
                    <h1>{producto.nombre}</h1>
                    <div className='flex items-center gap-2'>
                      <h2>{producto.rate}/5</h2>
                      <Estrellas rate={producto.rate} />
                    </div>
                    <img src={producto.url} 
                    alt={producto.nombre}
                    className='w-full min-w-[300px] h-full md:max-h-[300px]' />
                </div>
            )
        })}
    </div>
  )
}

export default Producto