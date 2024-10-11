import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { canales } from "../utils/constant";
import "./SearchChannel.css";
import Loader from "../Loader/Loader";

const SearchChannel = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const queryParams = searchParams.get("keyword");

  console.log(canales);

  const mostrarFiltrado = canales.filter(
    (mostrarFiltrado) =>
      mostrarFiltrado.nombre
        .toLowerCase()
        .includes(queryParams.toLowerCase()) ||
      mostrarFiltrado.channelTelsur.includes(queryParams)
  );

  console.log(mostrarFiltrado);
  useEffect(() => {
    // Simulamos una demora de 3 segundos para el loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Limpia el temporizador en caso de que el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {
        <>
          <div className="app-container">
            {mostrarFiltrado.length === 0 ? (
              <p className="search-error">
                No hay resultados para su busqueda.
              </p>
            ) : (
              mostrarFiltrado.map((canal) => (
                <Link to={`/details/${canal.id}`}>
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
                        style={{ display: loading ? "none" : "block" }} // Ocultar imagen si está en loading
                      />
                    </div>
                    <div className="card-severidad-container">
                      <p className="card-severidad">{`${canal.criticidad}`}</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </>
      }
    </>
  );
};

export default SearchChannel;
