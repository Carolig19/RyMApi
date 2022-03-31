import React, {useState, useEffect, useContext} from "react";
import {Context} from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

export const Detalle = ()=>{
const { store, actions } = useContext(Context);
const { id } = useParams();
return (
  <div className="container">
    <ul className="list-group"></ul>
    <h1>{store.characters[id-1].name}</h1>
    </div>)}