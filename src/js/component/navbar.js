import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-chartreuse">
		  <a className="navbar-brand" href="#">R&M Portal</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
			  <li className="nav-item active">
				<a className="nav-link" href="#">World <span className="sr-only">(current)</span></a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">Portal Gun</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link disabled" href="#">Squanch</a>
			  </li>
			</ul>
			<div className="buscador float-md-right">
			  <input className="form-control" type="search" placeholder="Search in portal" aria-label="Search"/>
			  <button className="portal btn btn-outline-success col-2 text-white" type="submit">🔍︎</button>
			</div>
		  </div>
		</nav>
			);
		};
export default Navbar;		