import "./App.scss";
import logo from "./images/logo-hp.png"

function App() {
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
            <li className="card">
               <img 
               className="card__img"
               src="https://hp-api.onrender.com/images/harry.jpg"
               alt="Harry Potter"
               title="Foto de Harry Potter"
               />
               <h4 className="card__title">Harry Potter</h4>
               <p className="card_description">Human</p>
            </li>
             <li className="card">
               <img 
               className="card__img"
               src="https://ik.imagekit.io/hpapi/hermione.jpeg"
               alt="Hermione Granger"
               title="Foto de Hermione Granger"
               />
               <h4 className="card__title">Hermione Granger</h4>
               <p className="card_description">Human</p>
            </li>
              <li className="card">
               <img 
               className="card__img"
               src="https://ik.imagekit.io/hpapi/hagrid.png"
               alt="Rubeus Hagrid"
               title="Foto de Rubeus Hagrid"
               />
               <h4 className="card__title">Rubeus Hagrid</h4>
               <p className="card_description">Half-giant</p>
            </li>
          </ul>
         </div>
      </main>
    </div>
  );
}

export default App;
