import React from 'react';

const Estrellas = ({ rate }) => {

    const getEstrellas = () => {
        // Obtenemos el rate de cada producto y buscamos su valoración
        let rating = (rate / 5) * 100;

        // Mediante un bloque if, vemos el número de estrellas amarillas que debemos devolver
        if (rating <= 0) {
            return <span className="text-2xl">&#9733;</span>;
        } else if (rating > 0 && rating <= 20) {
            return (
                <div>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl">&#9733;</span>
                    <span className="text-2xl">&#9733;</span>
                    <span className="text-2xl">&#9733;</span>
                    <span className="text-2xl">&#9733;</span>
                </div>
            );
        } else if (rating > 20 && rating <= 40) {
            return (
                <div>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl">&#9733;</span>
                    <span className="text-2xl">&#9733;</span>
                    <span className="text-2xl">&#9733;</span>
                </div>
            );
        } else if (rating > 40 && rating <= 60) {
            return (
                <div>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl">&#9733;</span>
                    <span className="text-2xl">&#9733;</span>
                </div>
            );
        } else if (rating > 60 && rating <= 80) {
            return (
                <div>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl">&#9733;</span>
                </div>
            );
        } else if (rating > 80) {
            return (
                <div>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                    <span className="text-2xl text-yellow-500">&#9733;</span>
                </div>
            );
        }
    };

    return (
        <div className="relative flex w-fit">
            {getEstrellas()}
        </div>
    );
};

export default Estrellas;
