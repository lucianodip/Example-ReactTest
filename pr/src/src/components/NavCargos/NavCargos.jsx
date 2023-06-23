import React, { useState, useEffect, useRef, useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { escrutinioContext } from '../Context/escrutinioContex';


export default function NavCargos({dataEscrutinio,idSitio,idEstabl,codRequest}) {

    const cargoRef = useRef(null)
    const [openCargos, setOpenCargos] = useState(false)
    const {setRequest} = useContext(escrutinioContext)


    // función para darle clase abrir y cerrar contenedor de botones de cargos en vista mobile
    const handleCargos = () =>{
        setOpenCargos(open => !open)
    } 
    

    useEffect(() => {
        document.addEventListener("click", clickAfuera, true)
        return () => {
            document.removeEventListener("click", clickAfuera, true);
        };
    }, [])

    

    const clickAfuera = (e) => {
        if(cargoRef.current !== null && !cargoRef.current.contains(e.target)){
            setOpenCargos(false)
        }
    }

    const modificaNombre = (nombre) => {
        if(nombre === "diputado"){
            return "diputados";
        }else
            if(nombre === "concejal"){
                return "concejales";
            }else
                if(nombre === "ccomunal"){
                    return "comisión comunal";
                }else{
                    return nombre;
                }
    }


    const renderNav = (codRequest) => {
        switch (codRequest){
            case 1:
                return(
                <>
                    <div className={openCargos ? "cargo-buttons active" : "cargo-buttons"}>
                    {dataEscrutinio.cargosDisponibles.map((cargo) =>
                            <Link key={cargo} to={`/provincia/${cargo}`}>
                                <Button 
                                    size="sm" 
                                    style={{backgroundColor: cargo === dataEscrutinio.cabecera.cargoConsultado ? '#5AA2CF' : '#0072B9'}}
                                    className={'cargo-item-button'} 
                                    id='cargo'
                                    onClick={()=>setRequest(true)}
                                >{modificaNombre(cargo)}</Button>
                            </Link>
                    )}   
                    </div>
                </>
                )

            case 6:
                return(
                    <>
                        <div className={openCargos ? "cargo-buttons active" : "cargo-buttons"}>
                            {dataEscrutinio.cargosDisponibles.map((cargo) =>(
                                    <Link key={cargo} to={`/mesas/${idSitio}/${idEstabl}/cargos/${cargo}`}>{
                                        <Button size="sm" 
                                            style={{backgroundColor: cargo === dataEscrutinio.cabecera.cargoConsultado ? '#5AA2CF' : '#0072B9'}}
                                            className={'cargo-item-button'} 
                                            id='cargo'
                                            onClick={()=>setRequest(true)}
                                        >{modificaNombre(cargo)}</Button>                    
                                    }</Link>
                                ))}   
                        </div>
                    </>
                    )  

            default:
                return(
                    <>
                        <div className={openCargos ? "cargo-buttons active" : "cargo-buttons"}>
                            {dataEscrutinio.cargosDisponibles.map((cargo) =>(
                                    <Link key={cargo} to={`/${idSitio}/${idEstabl}/cargos/${cargo}`}>{
                                        <Button 
                                            size="sm" 
                                            style={{backgroundColor: cargo === dataEscrutinio.cabecera.cargoConsultado ? '#5AA2CF' : '#0072B9'}}
                                            className={'cargo-item-button'} 
                                            id='cargo'
                                            onClick={()=>setRequest(true)}
                                        >{modificaNombre(cargo)}</Button>                    
                                    }</Link>
                                ))}   
                        </div>
                    </>
                )    
    }};


    //evaluación codRequest, 1 routea /provincia/cargo -- 2 a 6 routea /${idSitio}/${idEstabl}/cargos/${cargo}
    if(dataEscrutinio!=null)
    return (
        <div className="cargos" >
            {renderNav(codRequest)}
            <Button 
                className="seleccionar-cargo"
                onClick={handleCargos}
                ref={cargoRef}
            >Seleccionar cargo
            <i className="bi bi-chevron-down"></i>
            </Button>
        </div>
    )
        
}
