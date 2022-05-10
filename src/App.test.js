import { render, screen } from '@testing-library/react';
import App from './App';
import data from './data.json'

describe('Star Wars APP',() => {

  //beforeAll permite que algo determinado se ejecute antes que todo lo demas
  //spyOn vigila si el fetch se ejecuta en la ventana  
  beforeAll(() => jest.spyOn(window, 'fetch'))


  
//----------------------------------------------------------------------------------
  // //deberia mostrar una lista de personajes incluyendo luke sk..
  // it('Should show a list of characters including Luke Skywalker', () =>{
  //   //renderizamos el componente app
  //   render(<App/>);
  //   //analiza si la palabra luke skywalker esta en el documento
  //   expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  // })

  // //deberia mostrar una lista de personajes que aparecen en data..
  // it('Should show a list of characters from a JSON file', () =>{
  //   //renderizamos el componente app
  //   render(<App/>);
  //   //analiza si cada nombre que renderiza se encuentra en el JSON
  //   for (let character of data.results){
  //     expect(screen.getByText(character.name)).toBeInTheDocument();
  //   }
  // })
//----------------------------------------------------------------------------------



  //deberia mostrar una lista de personajes de la api
  it('Should show a list of characters from the API', async () =>{
    //mokea una respuesta, es una simulacion
    window.fetch.mockResolvedValueOnce({
      ok: true, 
      json: async () => data,
    })

    render(<App/>);
    //comprobamos que window.fetch se llamo una vez 
    expect(window.fetch).toHaveBeenCalledTimes(1);
    //comprobamos que window.fetch fue llamado con esa url
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.dev/api/people/')

    //analizamos si el nombre del personaje está en el documento 
    for(let character of data.results){
      expect (await screen.findByText(character.name)).toBeInTheDocument();
    }

  })



})
