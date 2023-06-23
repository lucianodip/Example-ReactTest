import React, { useState, useRef, useEffect, useContext } from 'react'
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { escrutinioContext } from '../Context/escrutinioContex';


export default function NavCargosProvincia({data}) {

    const [openCargos, setOpenCargos] = useState(false)
    const {setRequest} = useContext(escrutinioContext)
    const cargoRef = useRef(null)

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



    //nav especifica para cargosProvincia
    return (
        <div className="cargos">
            <div 
                className={openCargos ? "cargo-buttons active" : "cargo-buttons"}>
                <Link to={`provincia/gobernador`}>
                    <Button
                        style={{backgroundColor:'#5AA2CF'}}
                        onClick={()=>setRequest(true)}
                        size="sm" 
                        className='cargo-item-button' 
                        id='cargo'
                        >Gobernador
                    </Button>
                </Link>
                <Link to={`provincia/diputado`}>
                    <Button
                        onClick={()=>setRequest(true)}
                        size="sm" 
                        className='cargo-item-button' 
                        id='cargo'>
                        Diputados
                    </Button>
                </Link>
            </div>
            <Button 
                ref={cargoRef}
                className="seleccionar-cargo"
                onClick={handleCargos}
                >Seleccionar cargo
                <i className="bi bi-chevron-down"></i>
            </Button>
        </div>
    )
}