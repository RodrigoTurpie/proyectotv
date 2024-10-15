import React from "react";
import "./DetailsCard.css";
import { Link, useParams } from "react-router-dom";
import { api } from "../utils/api.js";
import { Button } from "@mui/material";
import FastRewindIcon from '@mui/icons-material/FastRewind';

const DetailsCard = () => {
  const { id } = useParams();
  const array = api;
  const element = array.filter((item) => item.id === id)[0];
  console.log(element.length)

  const handleBack = () =>{
    window.history.back();
  }
  return (
    <>

    <div className="info-logo-container">
      <div className="logo-name-container">
        <img src={element.src} alt={element.nombre}/>
        <h2>{element.nombre}</h2>
      </div>
      <div className="info-element-container">
        <h3>Detalles</h3>
        <ul>
          <li>Encoder: <Link to={element.encoder} target='_blank'>{`${element.encoder}`}</Link></li>
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
    <Button className="button-back" startIcon={<FastRewindIcon/>} variant="contained"  onClick={handleBack}>Back</Button>
    </>
    
  );
};

export default DetailsCard;
