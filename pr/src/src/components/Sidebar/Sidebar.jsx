import React, { useContext, useState } from 'react';
import { escrutinioContext } from '../Context/escrutinioContex';
import ModalInfo from '../Modal/ModalInfo'



export default function Sidebar() {

    // Abrir y cerrar modal info
    const {toggleListas, toggleCandidatos, candListas, mostrarResumen, variableResumen } = useContext(escrutinioContext)
    const [show, setShow] = useState(false);
    const {setRequest} = useContext(escrutinioContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='nav-bottom'>
                <div className='top-button-container'>
                    <button 
                        type='button' 
                        className={candListas === true && !show? 'navbar-bottom-button active' : 'navbar-bottom-button' }
                        id='candidatosButton'
                        onClick={()=> toggleCandidatos()}
                        >
                        <i className='navbar-bottom-button-icon bi bi-person'></i>
                        <span>Candidatos</span>
                    </button>

                    <button 
                        type='button' 
                        className={candListas === false && !show? 'navbar-bottom-button active' :  'navbar-bottom-button'} 
                        id='listasButton'
                        onClick={()=> toggleListas()}
                        >
                        <i className='navbar-bottom-button-icon bi bi-card-list'></i>
                        <span>Listas</span>
                    </button>

                        <button 
                            type='button' 
                            className={variableResumen && !show? 'navbar-bottom-button active' :  'navbar-bottom-button'} 
                            id='resumenButton'
                            onClick={()=> mostrarResumen()}
                            >
                            <i className='navbar-bottom-button-icon bi bi-pie-chart'></i>
                            <span>Resumen</span>
                        </button>

                        <button 
                            type='button' 
                            className='navbar-bottom-button'
                            id='actualizarButton'
                            onClick={() => setRequest(true)} 
                            >
                            <i className="navbar-bottom-button-icon bi-arrow-repeat"></i>
                            <span>Actualizar</span>
                        </button>

                    </div>

                    <div className='info-button-container'>
                        <button 
                            type='button' 
                            className={show ? 'navbar-bottom-button active' : 'navbar-bottom-button'} 
                            id='infoButton' 
                            onClick={handleShow}
                            >
                            <i className='navbar-bottom-button-icon bi bi-info-circle'></i>
                            <span>Info</span>
                        </button>
                    </div>
                </div>
            <ModalInfo
            show={show}
            handleClose={handleClose}
            />
        </>
    )
}
