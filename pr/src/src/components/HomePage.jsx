import { useContext, useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container"
import { getEscrutinio } from "./api/getEscrutinio"
import ContainerBreadcrumb from "./Breadcrumb/ContainerBreadcrumb"
import ContainerCardResultados from "./Card/ContainerCardResultados"
import { escrutinioContext } from "./Context/escrutinioContex"
import Detalles from "./Detalles/Detalles"
import ContainerEstado from "./Estado/ContainerEstado"
import Fab from "./Fab/Fab"
import NavCargosProvincia from "./NavCargos/NavCargosProvincia"
import EsperandoDatos from "./Mensajes/EsperandoDatos"
import Message from "./Mensajes/Message"


//Pagina Inicio
export const HomePage = () => {
   
  //dataEscrutinio (contiene la respuesta de la api) -- error (true si el status es distito a 200)
  const [dataEscrutinio, setDataEscrutinio] = useState()
  const [error, setError] = useState(true)
  const [loading, setLoading] = useState(true)
  let dispatch = "";

  //codRequest proviene del contex, modificada por processData
  const {codRequest, variableResumen,request,setRequest,generaKey} = useContext(escrutinioContext)
  

  if((request === true)||(request==="inicio")){
    dispatch = generaKey();
  }

  //consulta a la api Escrutinio
  useEffect(() => {
   (async ()=>{
      try {
        setRequest(false)
        setError(false)
        setLoading(true)
        if(!dispatch) return;
        const response = await getEscrutinio("provincia","gobernador");
        //set estado dataEscrutinio
        setDataEscrutinio(response);
        setTimeout(loader, 1000);       
      } catch (error) {
        setRequest(false)
        setTimeout(loader, 1000);
        setError(true) 
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps     
  }, [dispatch])


  const loader = () =>{
    setLoading(false)
  }


  const renderFab = (postRecuento) => {
    if(postRecuento){
      return <Fab/>
    }
  }

  const renderBody = (dataEscrutinio) => {
    if(window.innerWidth < 992){
         if(variableResumen){
           return(
             <>
               <ContainerEstado dataEscrutinio={dataEscrutinio} codRequest={codRequest}/>   
             </>
           )  
         }else{
           return(
             <>
               <Container className="seccion-resultados">
                 <Detalles data={dataEscrutinio}/>
                 <ContainerCardResultados dataEscrutinio={dataEscrutinio}/>
               </Container>  
             </>
           ) 
         }
    }else{
       return(
         <>
           <Container className="seccion-resultados">
             <Detalles data={dataEscrutinio}/>
             <ContainerCardResultados dataEscrutinio={dataEscrutinio}/>
           </Container>
           <ContainerEstado dataEscrutinio={dataEscrutinio} codRequest={codRequest}/> 
         </>
       )
    }
 }
  //si dataEscrutinio es distinto a null //si error distinto a true //enviar data a componentes
  //dato: En home page el codRequest siempre sera el inicial (1)
    return (
  
      <div>
      {
        loading
        ?
        <EsperandoDatos/>
        :
          <>
            {
              error
              ?
                <Message leyenda='No existen datos'></Message>
              :
                <>
                  <NavCargosProvincia
                    data={dataEscrutinio}
                  />
                  <ContainerBreadcrumb
                    data={dataEscrutinio}
                    codRequest={1}
                  />
                  <Container className='main'>
                  {renderBody(dataEscrutinio)}
                  </Container>
                  {renderFab(dataEscrutinio.cabecera.postRecuento)}
                </>
            }
          </>
      }
      </div>
     
    )
}

 





                  