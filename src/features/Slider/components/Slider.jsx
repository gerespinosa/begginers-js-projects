import React, { useEffect, useState } from 'react';
import { productos } from '../../Ratings/lib/productos';
import Button from '../../../components/Button';

const Slider = () => {

    // Establecemos los estados iniciales
    // Index va a ser el número, inicialmente 1 para que se encuentre centrado, correspondiente a la imagen que se muestra y sobre el que aplicaremos nuestra lógica
    const [index, setIndex] = useState(1)
    const [imagenCentral, setImagenCentral] = useState(productos[index-1]);
    const [imagenIzquierda, setImagenIzquierda] = useState(productos[index]);
    const [imagenDerecha, setImagenDerecha] = useState(productos[index+1]);

    // Manejamos los cambios, utilizando el estado anterior para mover la imagen central (utilizando el index)
    const handleCambioDerecha = () => {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : productos.length - 1));
    };

    const handleCambioIzquierda = () => {
        setIndex((prevIndex) => (prevIndex < productos.length - 1 ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        setImagenCentral(productos[index]);
        // Aplicamos el producto para poder hacer el carrusel circular por ambos lados
        setImagenIzquierda(productos[(index - 1 + productos.length) % productos.length]);
        setImagenDerecha(productos[(index + 1) % productos.length]);
    }, [index]);

  return (
    <div>
        <div className='flex gap-2 w-full overflow-hidden justify-center items-center'>
            <div className='w-[400px] h-[400px] flex items-center flex-col'>
                <img src={imagenIzquierda.url} alt={imagenIzquierda.nombre} className='mx-auto w-full h-[90%]' />
                <h1 className='mx-auto w-full h-[10%] text-center'>{imagenIzquierda.nombre}</h1>
                <Button text='<' onClick={handleCambioIzquierda} />
            </div>
            <div className='w-[600px] h-[600px] flex mx-auto flex-col'>
                <img src={imagenCentral.url} alt={imagenCentral.nombre} className='mx-auto w-full h-[90%]' />
                <h1 className='mx-auto w-full h-[10%] text-center'>{imagenCentral.nombre}</h1>
            </div>
            <div className='w-[400px] h-[400px] flex items-center flex-col'>
                <img src={imagenDerecha.url} alt={imagenDerecha.nombre} className='mx-auto w-full h-[90%]' />
                <h1 className='mx-auto w-full h-[10%] text-center'>{imagenDerecha.nombre}</h1>
                <Button text='>' onClick={handleCambioDerecha} />
            </div>
        </div>  
    </div>
    )
}


export default Slider