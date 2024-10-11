import React from "react";
import "./DetailsCard.css";
import { useParams } from "react-router-dom";
import { api } from "../utils/api.js";

const DetailsCard = () => {
  const { id } = useParams();
  const array = api;
  const element = array.filter((item) => item.id === id)[0];
  return (
    <div className="info-logo-container">
      <div className="logo-name-container">
        <img src={element.src} alt={element.nombre}/>
        <h2>{element.nombre}</h2>
      </div>
      <div className="info-element-container">
        <h3>Detalles</h3>
        <ul>
          <li>BW: {element.bw}</li>
          <li>Channel Telsur: {element.channelTelsur}</li>
          <li>Channel GTD: {element.channelGtd}</li>
          <li>Criticidad: {element.criticidad}</li>
          <li>ADSL: {element.adsl}</li>
          <li>FCA: {element.fca}</li>
          <li>MPEG4: {element.mpeg4}</li>
          <li>Nombre: {element.nombre}</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsCard;
