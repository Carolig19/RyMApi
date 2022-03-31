import React, {useState, useEffect, useContext} from "react";
import {Context} from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export const Navbar = () => {
	const [buscar, setBuscar] = useState()

	return (
		<nav className="mb-0 navbar navbar-expand-lg navbar-light bg-chartreuse">
		  <a className="navbar-brand" href="#">
		  <img src="https://img.icons8.com/color/48/000000/rick-sanchez.png"/>&<img src="https://img.icons8.com/color/48/000000/morty-smith.png"/></a>
		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
			  <li className="nav-item active">
				<a className="nav-link" href="#">Explore <span className="sr-only">(current)</span></a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Portal Gun</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Squanch</a>
			  </li>
			</ul>
			<div className="buscador ms-auto">
			  <input className="form-control" type="search" placeholder="Search in portal" aria-label="Search" 
			  onChange={(e)=>{
			setBuscar(e.target.value)}}/>
				{buscar?.map((e, i)=> {
					return (e.name===buscar &&<li key={i}></li>);
				})}

			  <button className="portal btn btn-outline-success col-2 text-white" type="submit">🔍︎</button>
			</div>
		  </div>
		</nav>
			);
		}
export default Navbar;		