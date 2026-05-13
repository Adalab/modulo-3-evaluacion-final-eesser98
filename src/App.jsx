import "./App.scss";
import logo from "./images/logo-hp.png"
import data from "./data/data.json"


function App() {
  const characters = data.map (characterObj => {
    return {
    uuid: characterObj.id,
    fullname: characterObj.name,
    altname: characterObj.alternate_names,
    species: characterObj.species,
    image: characterObj.image
  }
  });

  console.log(characters);

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
            <select>
              <option>Gryffindor</option>
              <option>Slytherin</option>
              <option>Ravenclaw</option>
              <option>Hufflepuff</option>
            </select>
          </div>  
          <ul className="cards">
            {characters.map(characterObj =>  
            <li key={characterObj.id} className="card">
               <img 
               className="card__img"
               src={characterObj.image}
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
