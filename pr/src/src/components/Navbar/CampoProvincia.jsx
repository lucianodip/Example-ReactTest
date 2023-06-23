import React, { useContext } from 'react'
import { ButtonGroup, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { escrutinioContext } from '../Context/escrutinioContex';


export default function CampoProvincia() {

    // Traigo el context para darle clase active al botón de la navbar seleccionado
    const {codRequest,setRequest} = useContext(escrutinioContext)

return (
        <Dropdown
            className='btn-group provincia' 
            as={ButtonGroup}
            >
            <Dropdown.Item
                as={Link}
                to={`/provincia/gobernador`}
                eventKey="6"
                className={codRequest === 1 ? 'filtro-item-button active' : 'filtro-item-button'} 
                onClick={()=>setRequest(true)}
                >Provincia
            </Dropdown.Item>
        </Dropdown>
    )
}


