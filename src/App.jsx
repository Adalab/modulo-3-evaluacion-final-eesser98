import "./App.scss";
import logo from "./images/logo-hp.png"
import { useState, useEffect } from "react";


function App() {

  //SECCIÓN ESTADO
const [characters, setCharacters] = useState([]);

const [house, setHouse] = useState("");


   //SECCIÓN USE-EFFECT (lo primero que hace la app al cargar)
  useEffect (() => {
    //fetch("https://hp-api.onrender.com/api/characters")
    fetch("https://hp-api.onrender.com/api/characters/house/" + house)
        .then(res => res.json())
        .then((data) => {
          setCharacters(
            data.map(characterObj => {
              return {
                id: characterObj.id,
                fullname: characterObj.name,
                altname: characterObj.alternate_names,
                species: characterObj.species,
                image: characterObj.image
              };
            })
          );
        });
  }, [house])
  
// SECCIÓN CON LAS FUNIONES DE EVENTOS

const handleInputHouse = (ev) => {
  setHouse(ev.target.value);
}

// SECCIÓN FUNCIONES O VARIABLES HELPER (QUE AYUDEN A PINTAR EL HTML)

  return (
    <div className="logo">
      <img
      className="header--logo"
      src={logo}
      alt="logo Harrypotter"
      />
      <main className="main"> 
         <div className="filters">
          <div className="filter-character">
              <label>Busca por personaje:</label>
                   <input
                type="text"
                placeholder="Buscar..."
              />
            </div>
          <div className="filter-house">
            <label>Selecciona la casa:</label>
            <select
              onChange={handleInputHouse}
              value={house}
            >
              <option value= "" >Todas</option>
              <option value= "gryffindor" >Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="hufflepuff">Hufflepuff</option>
            </select>
          </div>  
          <ul className="cards">
            {characters.map(characterObj =>  
            <li key={characterObj.id} className="card">
               <img 
               className="card__img"
               src={characterObj.image || "https://dummyimage.com/210x295/ffffff/656565.png&text=Harry+Potter"}
               alt={characterObj.altname[0] || characterObj.fullname}
               title= {
                "Foto de " + characterObj.fullname 
                }
               />
               <h4 className="card__title">{characterObj.fullname}</h4>
               <p className="card_description">{characterObj.species}</p>
            </li> )}
          </ul>
         </div>
      </main>
    </div>
  );
}

export default App;
