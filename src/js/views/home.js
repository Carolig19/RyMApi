import React, {useState, useEffect, useContext} from "react";
import {Context} from "../store/appContext";
import RickAndMorty from "../../img/rick-y-morty-fanart-2020-6344.jpg";
import "../../styles/home.css";
import Cards from "/workspace/react-hello-webapp/src/js/component/Cards.js";

export const Home = () => {
	useEffect(()=>{
			fetch("https://rickandmortyapi.com/api/character/")
			  .then((response) => response.json())
			  .then((result) => {
				setPersonaje(result);
				console.log(result);
			  })
			  .catch((error) => console.log("error", error));
			}, []);
	return	(<div className="cuerpo text-center">
		<h1 className="titulo">Welcome to Rick&Morty's World</h1>
		<p>
			<img src={RickAndMorty} />
		</p>

<div className=""><Cards/></div>
</div>)};

