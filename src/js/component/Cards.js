import React, {useState, useEffect, useContext} from "react";
import {Context} from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import "../../styles/home.css";

const Cards =()=>{
  const {store, actions} = useContext(Context);
  const {name} = useParams();
    return (
<div className="row">
  {store.characters?.map((valor,posicion)=>{
  return <row>
  <td><div className="card m-2">
  <div className="nombres card-title"key={posicion}>{valor.name}
  <Link to={"Detalle/"+ valor.id}>
  <button><img src="https://img.icons8.com/material-rounded/24/000000/open-in-window.png"/></button> </Link></div>
  <div className="card-title"key={posicion}><img className="p-2"src={valor.image}/></div>
  <span><button className="Favs">❤</button></span>
  <div className="card-title"key={posicion}>Especie:{valor.species}</div>
  <div className="card-title"key={posicion}>Origen:{valor.origin.name}</div>
  </div>
  </td>
  </row>

  
})
  }</div>
)}
export default Cards;