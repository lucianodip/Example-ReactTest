import { useState, useContext } from "react";
import { Button, ButtonGroup, Dropdown, Form, InputGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import { escrutinioContext } from '../Context/escrutinioContex';

export default function CampoMesa(){
    
    const [valorForm,setvalorForm] = useState('');
    const [mesaExtranjera,setMesaExtranjera] = useState("N");
    const [enableButton, setEnableButton] = useState(true)
    const [enableLeyenda, setEnableLeyenda] = useState(false)
    
    // Traigo el context para darle clase active al botón de la navbar seleccionado
    const {codRequest,setRequest} = useContext(escrutinioContext)

    const toggleCheckbox=(checked)=>{
        checked 
            ? setMesaExtranjera("E")
            : setMesaExtranjera("N")
    }

    const onChangeMesa=(newValue)=>{
        if((newValue.length > 0)&&(!isNaN(newValue))){
            if(enableLeyenda === true){setEnableLeyenda(false)}
            setEnableButton(false)
        }else{
            setEnableButton(true)
        }
        setvalorForm(newValue)
    }

    return (
        <Dropdown as={ButtonGroup} className='mesa'>
            <Dropdown.Toggle 
                className={codRequest === 6 ? 'filtro-item-button active' : 'filtro-item-button'} 
                id='mesaBtn'>
                Mesa de votación
            </Dropdown.Toggle>
            <Dropdown.Menu className="container-input">
                <div className='dropdown-body'>
                    <InputGroup size='sm'>
                        <Form.Control
                        type="number"
                            className='form-control'
                            placeholder='Ingrese un N° de mesa'
                            aria-label='Small'
                            aria-describedby='inputGroup-sizing-sm'
                            onChange={(e) =>{onChangeMesa(e.target.value)}}
                        />
                    </InputGroup>
                    <div className="container-checkbox mt-3">
                        <InputGroup.Checkbox 
                            className ='checkbox-input'
                            name='check' 
                            onChange={(e) =>{toggleCheckbox(e.target.checked)}}
                            />
                            <label htmlFor='check' className="checkbox-label">Tilde si es una mesa de electores extranjeros</label>
                    </div>                   
                    {
                    !enableButton
                    ?
                    <>    
                        <span className="leyenda-dropdown-disabled">Campo requerido (*)</span> 
                        <Dropdown.Item 
                            as={Link} 
                            to={`mesas/${valorForm}/${mesaExtranjera}`} 
                            eventKey="5"
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
                        <span className="leyenda-dropdown">Ingrese un número de mesa</span>
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

    )
}




