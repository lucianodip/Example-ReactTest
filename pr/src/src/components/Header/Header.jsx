import React, { useState } from 'react';
import logoDesktop from '../../images/logo-desktop.png';
import logoMobile from '../../images/logo-mobile.png';
import provincia from '../../images/provincia.png';


export default function Header() {

    // Agrego clase active a 'cabecera' al hacer scroll
    const [header, setHeader] = useState(false)

    const scrollHeader = () =>{
        let scrollValue = window.scrollY
        let windowWidth = window.innerWidth 
        
        if (scrollValue > 10 && windowWidth > 992){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }
    window.addEventListener('scroll', scrollHeader)

    return (
        <header className={header ? 'cabecera container active' : 'cabecera container'} >
            <div className='cabecera-logo-escrutinio'>
                <img className='logo-elecciones-desktop' src={logoDesktop} alt='Logo elecciones'/>
                <img className='logo-elecciones-mobile' src={logoMobile} alt='Logo elecciones'/>
            </div>
            <div className='cabecera-logo-provincia'>
                <img src={provincia} alt='Logo Provincia de Santa Fe'/>
            </div>  
        </header>
    )
}
