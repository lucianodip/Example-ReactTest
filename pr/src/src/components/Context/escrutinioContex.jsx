import { createContext, useState } from "react";


export const escrutinioContext = createContext();

export const EscrutinioProvider = ({children}) => {

    const [candListas, setcandListas] = useState(true);
    const [codRequest, setCodRequest] = useState(1)
    const [variableResumen, setvariableResumen] = useState(false)
    const [request, setRequest] = useState("inicio")

    //funcion modifica candListas, son utilizadas por los botones sidebar
    const toggleListas = () => {
        
        setcandListas(false)
        setvariableResumen(false)
    }
    
    //funcion modifica candListas, son utilizadas por los botones sidebar
    const toggleCandidatos = () => {
      setcandListas(true)
      setvariableResumen(false)
    }

    // Función para mostrar sección resumen en mobile, para usar en Sidebar
    const mostrarResumen = () => {
      setcandListas(null)
      setvariableResumen(true)
      
    }


    const generaKey= () => {
      let result = ''
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < 4; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
     }
     return result;
  }


    //Evaluacion set codRequest segun data 
    const processData = (data) => {
        if(data.resumen.hasOwnProperty('mesa')){
          setCodRequest(6)
        }else{
          if(data.resumen.hasOwnProperty('nroLocal')){
            setCodRequest(5)
          }else{
            if(data.resumen.hasOwnProperty('nroSeccional')){
              setCodRequest(4)
            }else{
              if(data.resumen.hasOwnProperty('nombreLocalidad')){
                setCodRequest(3)
              }else{
                if(data.resumen.hasOwnProperty('departamento')){
                  setCodRequest(2)
                }else{
                  setCodRequest(1)
                }
              }
            }
          }
        }}


    return (
        <escrutinioContext.Provider value={
            {
                toggleCandidatos,
                toggleListas,
                candListas,
                codRequest,
                processData,
                variableResumen,
                setvariableResumen,
                mostrarResumen,
                request, 
                setRequest,
                generaKey
            }
        }>
            {children}
        </escrutinioContext.Provider>
    )
    
}