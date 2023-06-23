import { useState, useContext} from "react";
import { Button, ButtonGroup, Dropdown, InputGroup} from "react-bootstrap"
import { Link } from "react-router-dom";
import { escrutinioContext } from '../Context/escrutinioContex';
import Autosuggest from 'react-autosuggest'


export default function CampoLocalidad({jsonDptoLocalidad}){

    // Traigo el context para darle clase active al botón de la navbar seleccionado
    const {codRequest,setRequest} = useContext(escrutinioContext)
    
    const[localidades, setLocalidades]= useState(jsonDptoLocalidad);
    const[value, setValue]= useState("");
    const[localidadSeleccionada, setLocalidadSeleccionada]= useState(98);
    const[enableButton, setEnableButton] = useState(true)
    const[enableLeyenda, setEnableLeyenda] = useState(false)


    //cuando el usuario ingresa un valor
    const onSuggestionsFetchRequested=({value})=>{
        setLocalidades(filtrarLocalidades(value));
    }
 
    const filtrarLocalidades=(value)=>{
        const inputValue=value.trim().toLowerCase();
        const inputLength=inputValue.length;
        let filtrado= [];

        jsonDptoLocalidad.forEach((localidad)=>{
            if(localidad.nombre
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(inputValue)
            ){
                filtrado.push(localidad);
            }
        });
        return inputLength === 0 ? [] : filtrado;
    }

    //cuando el usuario borra el valor
    const onSuggestionsClearRequested = () =>{
        setLocalidades([]);
    }
    
    //captura la seleccion del usuario
    const getSuggestionValue=(suggestion)=>{
        setLocalidadSeleccionada(suggestion.id);
        return `${suggestion.nombre}`;
    }
    
    //estilo y accesibilidad sugerencia
    const renderSuggestion=(suggestion)=>(
        <span>{`${suggestion.nombre}`}</span>
    );
    
    const onChange=(e, {newValue})=>{
        if((e.type === 'click') && (newValue.length > 0) && (isNaN(newValue))){
            if(enableLeyenda === true){setEnableLeyenda(false)}
            setEnableButton(false)
        }else{
            setEnableButton(true)
        }
        setValue(newValue);
    }
    
    const inputProps={
        placeholder:"Ingrese una localidad",
        value,
        onChange,  
    };  

    return (
        <Dropdown as={ButtonGroup} className='localidad'>
            <Dropdown.Toggle 
                className={codRequest === 3 ? 'filtro-item-button active' : 'filtro-item-button'}
                id='localidadBtn'
                >
                Localidad
            </Dropdown.Toggle>
            <Dropdown.Menu className="container-input">
                <div className='dropdown-body'>
                    <InputGroup size='sm' > 
                        <Autosuggest
                            suggestions={localidades}
                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                        /> 
                    </InputGroup>    
                    {
                    !enableButton
                    ?
                    <>
                        <span className="leyenda-dropdown-disabled">Campo requerido (*)</span> 
                        <Dropdown.Item 
                            as={Link} 
                            to={`localidades/${localidadSeleccionada}`}
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
                        <span className="leyenda-dropdown">Seleccione una localidad</span> 
                        : 
                        <span className="leyenda-dropdown-disabled">Campo requerido (*)</span> 
                        }
                        <Button 
                            className='consultar'
                            onClick={()=>setEnableLeyenda(true)}
                        >Consultar</Button>
                    </>
                    }           
                </div>
            </Dropdown.Menu>    
        </Dropdown>
    )
}