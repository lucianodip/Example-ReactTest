import CampoProvincia from './CampoProvincia'
import CampoDepartamento from './CampoDepartamento';
import CampoLocalidad from './CampoLocalidad';
import CampoLocal from './CampoLocal';
import CampoMesa from './CampoMesa';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logoMobile from '../../images/logo-mobile.png';
import provincia from '../../images/provincia.png';
import React, { useRef, useEffect, useState } from 'react'


export default function ContainerNavbar() {

    const jsonSuggest = require('../../resources/nomencladores.json');
    const [nav, setNav] = useState(false);
    const navRef = useRef()


    // Agrego z-index a 'dropdown-menu' al hacer scroll en vista mobile si el menú está abierto
        const mobileView = () =>{
            let dMenu = document.querySelectorAll('.dropdown-menu')

            if (window.scrollY > 200 && window.innerWidth < 992){
                dMenu.forEach(e =>{
                    e.style.zIndex=1;
                })
            }
        }
        window.addEventListener('scroll', mobileView)


        useEffect(() => {
            if(window.innerWidth < 992){
                document.addEventListener("click", clickAfueraNav, true)
                return () => {
                    document.removeEventListener("click", clickAfueraNav, true);
                }
            };
        }, [])

 
    const clickAfueraNav = (e) => {
        if(e.composedPath()[0].id === "BtnToggle" || e.composedPath()[1].id === "BtnToggle"){
        }else{
            if(navRef.current !== null && !navRef.current.contains(e.target)){
                setNav(false)
            }else{
                setNav(true)
            }          
        }    
    }


    const onSelect = () => {
        setNav(false)
    }

    return (
        <Navbar 

            expanded={nav}
            ref={navRef}
            expand='lg' 
            variant='dark' >
            <Container>
                <div className='container-navbar-header'>
                <Navbar.Brand>
                    <div className='logos'>
                        <img className='logo-elecciones-mobile' src={logoMobile} alt='Logo elecciones'/>
                        <img className="cabecera-logo-provincia" src={provincia} alt='Logo Provincia de Santa Fe'/>
                    </div> 
                    <div className="titulo-mobile">
                        <h6>Recuento Provisional</h6>   
                    </div>
                </Navbar.Brand>
                    <Navbar.Toggle
                        onClick={() => setNav(nav ? false : true)}
                        aria-controls='responsive-navbar-nav'
                        id='BtnToggle'
                    />
                </div>
                <Navbar.Collapse 
                    id='responsive-navbar-nav'>
                    <Nav id='navbarNav' className="navbar-expand-lg" onSelect={onSelect}>
                        <CampoProvincia/>
                        <CampoDepartamento
                            jsonDepartamento={jsonSuggest.departamento}
                            />
                        <CampoLocalidad
                            jsonDptoLocalidad={jsonSuggest.localidad}
                        />
                        <CampoLocal
                            jsonLocales={jsonSuggest.local}
                        />
                        <CampoMesa/>     
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


























