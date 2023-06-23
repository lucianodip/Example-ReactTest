import React, { useContext, useEffect, useState } from 'react'
import CardCandidatos from './CardCandidatos'
import CardListas from './CardListas'
import { escrutinioContext } from './../Context/escrutinioContex'
// import { useState } from 'react'
import SkeletonCard from '../Mensajes/SkeletonCard' 


export default function ContainerCardResultados({dataEscrutinio}) {

    // variable para usar en el estado del SkeeltonCard
    const [loading, setloading] = useState(false)
    const [count, setCount] = useState(0)

    //candListas proviene del contex, modificada por botones del sidebar
    const {candListas} = useContext(escrutinioContext)
    
    // function para skeletonCard
    const loader = ()=>{
        setloading(false)
    }

    //cuando la variable cambia, vuelve a renderizar
    useEffect(() => {
        if (count === 0) {
            setCount(1)
            return
        }
        setloading(true)
        setTimeout(loader, 600)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [candListas])


    //evaluación si existe contenido en data, y luego evalua variable candListas y renderiza 
    //el componente con candidatos o listas
    if(dataEscrutinio!=null)
    return (
        <div>
            {
                loading
                ?
                <SkeletonCard/>
                :
                <>
                    {
                        candListas
                        ?
                        <>
                        {dataEscrutinio.partidos.map((el) =><CardCandidatos key={el.nroPartido} data={el}/>)}   
                        </>
                        :
                        <>
                            {dataEscrutinio.partidos.map((el) =><CardListas key={el.nroPartido} data={el}/>)}   
                        </>
                    }
                </>
            }
        </div>
    )
}

