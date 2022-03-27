import React, {useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import RickAndMorty from "../../img/rick-y-morty-fanart-2020-6344.jpg";
import "../../styles/home.css";
import Carrusel from "/workspace/react-hello-webapp/src/js/component/Carrusel.jsx";

export const Home = () => {
	const [Personaje, setPersonaje] = useState([]);
	useEffect(()=>{
			fetch("https://rickandmortyapi.com/api/character/22")
			  .then((response) => response.json())
			  .then((result) => {
				setPersonaje(result);
				console.log(result);
			  })
			  .catch((error) => console.log("error", error));
			}, []);
	return	(<div className="titulo text-center mt-5">
		<h1>Welcome to Rick&Morty's World</h1>
		<p>
			<img src={RickAndMorty} />
		</p>
<div><Carrusel/></div>
	</div>)};
