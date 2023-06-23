import { useState, useEffect } from 'react';
import { getCharacter, getPeople } from './api/people';
import './App.css';


function App() {

  //inicializamos la variable people en vacio
  //inicializamos la variable people en vacio
  const [people,setPeople] = useState([]);

  //hook para manejo de errores, inicializa con la variable hasError en falso 
  const [errorState,setErrorState] = useState({hasError:false});

  //controla el estado del caracter que necesita el url de la api para brindar la info del objeto 
  const [currentCharacter,setCurrentCharacter] = useState(1);

  //controla el estado de los detalles al presionar un nombre 
  const [details,setDetails] = useState({});


  //Apenas se monta el componente se llama a getPeople y obtenemos data de la api
  //luego la seteamos con setPeople
  useEffect(() => {
    getPeople()
    .then((data) => setPeople(data.results))
    .catch(handleError);
  },[]);

  useEffect(() => {
    getCharacter(currentCharacter)
    .then(setDetails)
    .catch(handleError);
  },[currentCharacter]);



  //si hay un error se llama a esta funcion que setea la variable en true y agrega un mensaje (err) 
  //que trae de getPeople 
  //y a la vez lo agarra el test que esta esperando que salga tal mensaje 
  const handleError = (err) => {
    setErrorState({hasError:true, message:err.message})
  }


  //mediante este metodo lograres retirar el id de la url
  const showDetails = (character) => {
    const id = Number(character.url.split("/").slice(-2)[0])
    setCurrentCharacter(id);
  }

  return (
    <div>
      
    
    <ul>
      {errorState.hasError && <div>{errorState.message}</div>}
      {people.map((character) =>
        <li 
        key={character.name}
        onClick={() => showDetails(character)}
        >{character.name}</li>
      )}
    </ul> 

      {details &&(
        <aside>
          <h1>{details.name}</h1>
          <ul>
            <li>Peso:{details.height}</li>
            <li>Edad:{details.mass}</li>
            <li>Cumpleaños:{details.birth_year}</li>
          </ul>
        </aside>
      )}

    </div>
  );
}

export default App;
