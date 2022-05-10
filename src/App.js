import { useState, useEffect } from 'react';
import { getPeople } from './api/people';
import './App.css';


function App() {

  //inicializamos la variable people en vacio
  const [people,setPeople] = useState([]);

  //Apenas se monta el componente se llama a getPeople y obtenemos data de la api
  //luego la seteamos con setPeople
  useEffect(() => {
    getPeople().then((data) => setPeople(data.results));
  },[]);

  return (
    <ul>
      {people.map((character) =>
        <li key={character.name}>{character.name}</li>
      )}
    </ul>
  );
}

export default App;
