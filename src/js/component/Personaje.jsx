import React, {useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import RickAndMorty from "../../img/rick-y-morty-fanart-2020-6344.jpg";
import "../../styles/home.css";
import Carrusel from "/workspace/react-hello-webapp/src/js/component/Carrusel.jsx";
import Cards from "/workspace/react-hello-webapp/src/js/component/Cards.js";

export const Person = () => {
	const [Personaje, setPersonaje] = useState([]);
	useEffect(()=>{
			fetch("https://rickandmortyapi.com/api/character/")
			  .then((response) => response.json())
			  .then((result) => {
				setPersonaje(result);
				console.log(result);
			  })
			  .catch((error) => console.log("error", error));
			}, []);}

export default Person;