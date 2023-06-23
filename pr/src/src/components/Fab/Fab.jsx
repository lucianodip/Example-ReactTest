import React, {useState, useEffect, useRef} from 'react'
import axios from "axios";
const url=process.env.REACT_APP_PATH_ZIP_RESULTADOS


export default function Fab() {
    
    const [open, setOpen] = useState(false)
    let menuRef = useRef()


    const handleClick = () =>{
        setOpen(open => !open)
    } 

    useEffect(()=>{
        let handler = (e)=>{
            if (!menuRef.current.contains(e.target)){
                setOpen(false)
            }
        };
        document.addEventListener('mousedown', handler)
        return ()=>{
            document.removeEventListener('mousedown', handler)
        }
    })
    

    const downloadResultsZip = () => {
        axios({
            url: url,
            method: "GET",
            responseType: "blob", // importante
          }).then((response) => {
             const url = window.URL.createObjectURL(new  Blob([response.data]));
             const link = document.createElement("a");
             link.href = url;
             link.setAttribute("download", "Resultados.zip");
             document.body.appendChild(link);
             link.click();
          });
    }


    return (
        <div 
            className={open ? 'fab open' : 'fab'}
            ref={menuRef}
            >
            <div className={open ? 'txt appear' : 'txt'}>
                <p>Se encuentran disponibles los resultados en formato csv</p>
                <button className='enlaceDescargas' onClick={()=>downloadResultsZip()}>Descargar Resultados</button>
            </div>
            <button 
                className={open ? "fabBtn" : "fabBtn active"}
                onClick={handleClick}>
                <i className={open ? 'bi bi-bell' : 'bi bi-bell active'}></i>
            </button>
        </div>
    )
}

