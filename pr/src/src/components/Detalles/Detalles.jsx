import React from 'react'


export default function Detalles({data}) {

    const renderActualizacion = (ultActualizacion) =>{
        if(!ultActualizacion){
            return <span>Sin datos recibidos al momento</span>
        }else{
            return <span>Actualizado: {ultActualizacion}</span>
        }
    }

    if(data!=null)
    return (
        <>
            <div className="cabecera-resultados">
                <h3>Detalles resultados</h3>
                {/* <div className="breadcrumb-mensaje"> */}
                    {renderActualizacion(data.resumen.ultimaActualizacion)}
                {/* </div> */}
            </div>
        </>
    )
}
