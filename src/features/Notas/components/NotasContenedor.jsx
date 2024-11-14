import React from 'react'

const NotasContenedor = ({notasRecibidas}) => {

  return (
    <div className='w-full h-full flex flex-wrap gap-2'>
        {/* Una vez recibidas las notas desde NotasPage y estas a su vez desde NotasAnadir, 
        entonces tenemos un array que podemos recorrer */}
        {notasRecibidas.map((nota, index) => {
            return (
                <div 
                key={index}
                className='relative flex-col w-[200px] min-w-1/2 h-[250px] bg-yellow-300 border-[1px] border-gray-700 p-2 rounded-sm shadow-slate-600 shadow-md text-gray-700 items-start justify-start flex'>
                    {nota}
                </div>
            )
        })}
    </div>
  )
}

export default NotasContenedor