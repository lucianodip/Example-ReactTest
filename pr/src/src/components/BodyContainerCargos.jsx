import { useContext, useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container"
import { useParams } from "react-router-dom"
import { getEscrutinioCargos } from "./api/getEscrutinio"
import ContainerBreadcrumb from "./Breadcrumb/ContainerBreadcrumb"
import ContainerCardResultados from "./Card/ContainerCardResultados"
import { escrutinioContext } from "./Context/escrutinioContex"
import Detalles from "./Detalles/Detalles"
import ContainerEstado from "./Estado/ContainerEstado"
import Fab from "./Fab/Fab"
import NavCargos from "./NavCargos/NavCargos"
import EsperandoDatos from "./Mensajes/EsperandoDatos"
import Message from "./Mensajes/Message"

export const BodyContainerCargos = () => {
    
  const { idSitio,idEstabl,idCargo } = useParams()
  const [dataEscrutinio, setDataEscrutinio] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  let dispatch = "";

  //codRequest proviene del contex, modificada por processData
  const {codRequest,processData, variableResumen,request,setRequest,generaKey} = useContext(escrutinioContext)

  //evalua autorizacion
  if((request === true)||(request==="inicio")){
    dispatch = generaKey();
  }

   useEffect(() => {
    (async ()=>{
       try {
         setRequest(false)
         setError(false)
         setLoading(true)
         if(!dispatch) return;
         const response = await getEscrutinioCargos(idSitio,idEstabl,idCargo);
         processData(response);
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
                <NavCargos
                  dataEscrutinio={dataEscrutinio}
                  idSitio={idSitio}
                  idEstabl={idEstabl}
                />
                <ContainerBreadcrumb
                  codRequest={codRequest}
                  data={dataEscrutinio}
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



