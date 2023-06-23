import React, { useContext } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Accordion } from 'react-bootstrap';
import { escrutinioContext } from '../Context/escrutinioContex';

export default function SkeletonResumen() {
  //codRequest proviene del contex, modificada por processData
    const {codRequest} = useContext(escrutinioContext)



    if (codRequest === 6){
        return (
            <>
            <SkeletonTheme 
                baseColor="#CED4DA" 
                highlightColor="#fafafa"
                borderRadius="0.40rem"
                > 
                <div className="seccion-resumen">
                            <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Resumen</Accordion.Header>
                                <Accordion.Body>
                                    <div className="tabla-resumen">
                                        <div className="resumen-row">
                                            <label><Skeleton width={150}/></label>
                                        </div>
                                        <div className="resumen-row">
                                            <label><Skeleton width={150}/></label>
                                            
                                        </div>
                                        <div className="resumen-row">
                                            <label><Skeleton width={200}/></label>
                                        </div>
                                    </div>
                                    <div className="tabla-mesas">
                                        <div className="tabla-mesas-head">
                                            <h4>Mesas computadas</h4>
                                            <h4 className="text-center">Total</h4>
                                            <h4 className="text-center">Porcentaje</h4>
                                        </div>
                                        <div className="mesas-row">
                                            <label><Skeleton width={150}/></label>
                                            
                                        </div>
                                    </div>
                                    <div className="tabla-mesas">
                                            <div className="tabla-mesas-head">
                                                <h4>Mesas computadas</h4>
                                                <h4 className="text-center">Total</h4>
                                                <h4 className="text-center">Porcentaje</h4>
                                            </div>
                                            <div className="mesas-row">
                                                <label><Skeleton width={150}/></label>
                                            </div>
                                        </div>
                                        <div className="tabla-mesas">
                                            <div className="tabla-mesas-head">
                                                <h4>Votos computados</h4>
                                                <h4 className="text-center">Total</h4>
                                                <h4 className="text-center">Porcentaje</h4>
                                            </div>
                                            <div className="mesas-row">
                                                <label><Skeleton width={150}/></label>
                                                
                                            </div>
                                            <div className="mesas-row-votos-validos">
                                                <div className="mesas-sub-row">
                                                    <label><Skeleton width={150}/></label>
                                                    
                                                </div>
                                                <div className="mesas-sub-row">
                                                    <label><Skeleton width={150}/></label>
                                                    
                                                </div>
                                            </div>
                                            <div className="mesas-row">
                                                <label><Skeleton width={150}/></label>
                                                
                                            </div>
                                            <div className="mesas-row">
                                                <label><Skeleton width={150}/></label>
                                            </div>
                                            <div className="mesas-row">
                                                <label><Skeleton width={150}/></label>
                                                
                                            </div>                                   
                                        </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                </div> 
                </SkeletonTheme>   
            </>
          )
    }else{
        return(
        <>
        <SkeletonTheme 
            baseColor="#CED4DA" 
            highlightColor="#fafafa"
            borderRadius="0.40rem"
            > 
            <div className="seccion-resumen">
                        <div className="cabecera-resumen">
                            <h3>Estado de avance</h3>
                        </div>
                        <div className="fondo-e">
                            <div className="circulo"><Skeleton baseColor="#CED4DA" highlightColor="#CED4DA" width={220} height={220} circle={true} /></div>
                        </div>
                        <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Resumen</Accordion.Header>
                            <Accordion.Body>
                                <div className="tabla-resumen">
                                    <div className="resumen-row">
                                        <label><Skeleton width={150}/></label>
                                    </div>
                                    <div className="resumen-row">
                                        <label><Skeleton width={150}/></label>
                                        
                                    </div>
                                    <div className="resumen-row">
                                        <label><Skeleton width={200}/></label>
                                    </div>
                                </div>
                                <div className="tabla-mesas">
                                    <div className="tabla-mesas-head">
                                        <h4>Mesas computadas</h4>
                                        <h4 className="text-center">Total</h4>
                                        <h4 className="text-center">Porcentaje</h4>
                                    </div>
                                    <div className="mesas-row">
                                        <label><Skeleton width={150}/></label>
                                        
                                    </div>
                                </div>
                                <div className="tabla-mesas">
                                        <div className="tabla-mesas-head">
                                            <h4>Mesas computadas</h4>
                                            <h4 className="text-center">Total</h4>
                                            <h4 className="text-center">Porcentaje</h4>
                                        </div>
                                        <div className="mesas-row">
                                            <label><Skeleton width={150}/></label>
                                        </div>
                                    </div>
                                    <div className="tabla-mesas">
                                        <div className="tabla-mesas-head">
                                            <h4>Votos computados</h4>
                                            <h4 className="text-center">Total</h4>
                                            <h4 className="text-center">Porcentaje</h4>
                                        </div>
                                        <div className="mesas-row">
                                            <label><Skeleton width={150}/></label>
                                            
                                        </div>
                                        <div className="mesas-row-votos-validos">
                                            <div className="mesas-sub-row">
                                                <label><Skeleton width={150}/></label>
                                                
                                            </div>
                                            <div className="mesas-sub-row">
                                                <label><Skeleton width={150}/></label>
                                                
                                            </div>
                                        </div>
                                        <div className="mesas-row">
                                            <label><Skeleton width={150}/></label>
                                            
                                        </div>
                                        <div className="mesas-row">
                                            <label><Skeleton width={150}/></label>
                                        </div>
                                        <div className="mesas-row">
                                            <label><Skeleton width={150}/></label>
                                            
                                        </div>                                   
                                    </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
            </div> 
            </SkeletonTheme>   
        </>
        )
    }
 
}
