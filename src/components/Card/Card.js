import React, { useEffect, useState } from 'react'
import {canales} from '../utils/constant.js';
import './Card.css'
import Loader from '../Loader/Loader.js';
import { Link } from 'react-router-dom';

const Card = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una demora de 3 segundos para el loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Limpia el temporizador en caso de que el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  

  return (
    (<div className="app-container">
      {canales.map((canal) => {
        // Estado loading por cada imagen


        return (
          (<Link to={`/details/${canal.id}`}>
            <div className="card" key={canal.id}>
              <div className="card-header">
                <h3 className="card-title">{canal.nombre}</h3>
                <p className="card-number">{canal.channelTelsur}</p>
              </div>
              <div className="card-container-logo">
                {/* Mostrar loading mientras se carga la imagen */}
                {loading && <Loader />}
                <img
                  className="card-image-logo"
                  src={canal.src}
                  alt={canal.nombre}
                  style={{ display: loading ? 'none' : 'block' }} // Ocultar imagen si está en loading
                  
                />
              </div>
              <div className="card-severidad-container">
                <p className="card-severidad">{`${canal.criticidad}`}</p>
              </div>
            </div>
          </Link>)
        );
      })}
    </div>)
  );
}

export default Card