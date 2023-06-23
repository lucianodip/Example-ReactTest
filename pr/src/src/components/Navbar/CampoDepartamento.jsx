import { useState, useContext } from "react";
import { Button, ButtonGroup, Dropdown, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { escrutinioContext } from '../Context/escrutinioContex';


export default function CampoDepartamento({jsonDepartamento}) {


    const [valorForm,setvalorForm] = useState('');
    const [enableButton, setEnableButton] = useState(true)
    const [enableLeyenda, setEnableLeyenda] = useState(false)

    // Traigo el context para darle clase active al botón de la navbar seleccionado
    const {codRequest,setRequest} = useContext(escrutinioContext)

    const onChangeDepto=(newValue)=>{
        if(!isNaN(newValue)){
            if(enableLeyenda === true){setEnableLeyenda(false)}
            setEnableButton(false)
        }else{
            setEnableButton(true)
        }
        setvalorForm(newValue)
    }

    return (
        <>
        <Dropdown as={ButtonGroup} className='departamento'>
        <Dropdown.Toggle 
            className={codRequest === 2 ? 'filtro-item-button active' : 'filtro-item-button'}
            id='departamentoBtn'
            >
            Departamento
        </Dropdown.Toggle>
        <Dropdown.Menu id='collapseDepto' className="container-input">
            <div className='dropdown-body'>
                
                <Form.Select 
                aria-label='select departamento'
                onChange={(e) =>{onChangeDepto(e.target.value)}}
                >
                <option>Seleccionar</option>
                    {jsonDepartamento.map((el) =>
                        <option 
                            key={el.id}
                            className='option-departamento' 
                            value={el.id}>{el.nombre}
                        </option>)
                    } 
                </Form.Select>
                {
                !enableButton 
                ?
                    <>
                        <span className="leyenda-dropdown-disabled">Campo requerido (*)</span> 
                        <Dropdown.Item 
                            as={Link} 
                            to={`departamentos/${valorForm}/cargos/gobernador`} 
                            eventKey="2"
                            className='consultar'
                            onClick={()=>setRequest(true)}
                        >Consultar
                        </Dropdown.Item>
                    </>
                    :
                    <>
                    {
                    enableLeyenda
                    ?
                    <span className="leyenda-dropdown">Seleccione un departamento</span> 
                    : 
                    <span className="leyenda-dropdown-disabled">Campo requerido (*)</span> 
                    }
                    <Button 
                        className='consultar'
                        onClick={()=>setEnableLeyenda(true)}
                    >Consultar
                    </Button>
                    </>
                }
            </div>
        </Dropdown.Menu>
    </Dropdown>
    </>
    )
}



