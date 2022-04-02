import React, {useState, useEffect, useContext} from "react";
import {Context} from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import "../../styles/home.css";
import characters from "/workspace/react-hello-webapp/src/js/store/flux.js"

export const Favorites = () => {
    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState();
    
    function verFavoritos(id) {
        const newFavorites = favorites.map(characters => {
          return characters.id === id ? { ...characters, favorite: !characters.favorite } : characters;
        });
    
        setFavorites(newFavorites);
      }
    return <ul>
    {favorites.map((characters, i) => (
      <li key={i}>
        {characters.name}{" "}
        <button
          onClick={() => {
            verFavoritos(characters.id);
          }}
        >
          {characters.favorite === true ? "Remove" : "Add"}
        </button>
      </li>
    ))}
  </ul>}

  export default Favorites;
  