import { useContext, useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container"
import { useParams } from "react-router-dom"
import { getEscrutinioMesas } from "./api/getEscrutinio"
import ContainerBreadcrumb from "./Breadcrumb/ContainerBreadcrumb"
import ContainerCardResultados from "./Card/ContainerCardResultados"
import { escrutinioContext } from "./Context/escrutinioContex"
import Detalles from "./Detalles/Detalles"
import NavCargos from "./NavCargos/NavCargos"
import ContainerEstado from "./Estado/ContainerEstado"
import Fab from "./Fab/Fab"
import EsperandoDatos from "./Mensajes/EsperandoDatos"
import Message from "./Mensajes/Message"



export const BodyContainerMesas = () => {

  
  //parametros router
  const { nroMesa,letraMesa } = useParams()
  

  //dataEscrutinio (contiene la respuesta de la api) -- error (true si el status es distito a 200)
  const [dataEscrutinio, setDataEscrutinio] = useState()
  const [error, setError] = useState(false)
  const [noComputada, setNoComputada] = useState(false)
  const [loading, setLoading] = useState(true)
  const [messageServidor, setMessageServidor] = useState()
  let dispatch = "";

  //codRequest proviene del contex, modificada por processData
  const {processData,variableResumen,request,setRequest,generaKey} = useContext(escrutinioContext)

  //evalua autorizacion
  if((request === true)||(request==="inicio")){
    dispatch = generaKey();
  }


  //consulta a la api Escrutinio con los parametros del router
  useEffect(() => {
    (async ()=>{
       try {
          setRequest(false)
          setError(false)
          setLoading(true)
          if(!dispatch) return;
          const response = await getEscrutinioMesas(nroMesa,letraMesa);
          const data = await response.json();

         if(response.status === 200){
          setNoComputada(false)
          setDataEscrutinio(data);
          processData(data);
          setTimeout(loader, 1000);
         }else{
            if(response.status === 202){ 
              setMessageServidor(data.message) 
              setNoComputada(true);
              setTimeout(loader, 1000);             
            }else{
              if(response.status === 400){
                setMessageServidor(data.message)
                setNoComputada(true);
                setTimeout(loader, 1000); 
              }
            }
         }
       } catch (error) {
         setRequest(false)
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
             
               <ContainerEstado dataEscrutinio={dataEscrutinio} codRequest={6}/>   
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
           <ContainerEstado dataEscrutinio={dataEscrutinio} codRequest={6}/> 
         </>
       )
    }
 }
  

   //distrubuye data a todos los componentes visuales
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
                <Message leyenda='Error de consulta'></Message>
                :
                  <>
                    {
                      noComputada
                      ?
                        <Message leyenda={messageServidor}></Message>
                      :
                        <>
                          <NavCargos
                            dataEscrutinio={dataEscrutinio}
                            idSitio={nroMesa}
                            idEstabl={letraMesa}
                            codRequest={6}
                          />
                          <ContainerBreadcrumb
                            codRequest={6}
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
            </>
        }
    </div>
  )
}
