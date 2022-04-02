import React, {useState, useEffect, useContext} from "react";
import {Context} from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";


export const Detalle = ()=>{
const { store, actions } = useContext(Context);
const { id } = useParams();
return (
  <div className="col-12 d-flex">
  <div className="container bg-dark">
    <ul className="list-group"></ul>
    <div>
    <button className="guardar">❤</button>
    </div>
    <h1 className="deta1">{store.characters[id-1].name} </h1>
    <div className="col-6 d-flex">
      <img className="p-20" src={store.characters[id-1].image}/>
      <h3 className="deta2 col-5">Locación: {store.characters[id-1].location.name}</h3>
      <h3 className="deta2 col-5">Estado: {store.characters[id-1].status}</h3>
      <h3 className="deta2 col-5">Género: {store.characters[id-1].gender}</h3>
    </div>
    <div>
    </div>
    </div>
    </div>)}