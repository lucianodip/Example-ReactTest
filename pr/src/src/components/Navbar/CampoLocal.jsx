import { useState, useContext } from "react";
import { Button, ButtonGroup, Dropdown, InputGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import Autosuggest from 'react-autosuggest'
import { escrutinioContext } from '../Context/escrutinioContex';
    

export default function CampoLocal({jsonLocales}){

    // Traigo el context para darle clase active al botón de la navbar seleccionado
    const {codRequest,setRequest} = useContext(escrutinioContext)

    const[local, setLocal]= useState(jsonLocales);
    const[value, setValue]= useState("");
    const[localSeleccionado, setLocalSeleccionado]= useState();
    const [enableButton, setEnableButton] = useState(true)
    const [enableLeyenda, setEnableLeyenda] = useState(false)


    //cuando el usuario ingresa un valor
    const onSuggestionsFetchRequested=({value})=>{
        setLocal(filtrarLocales(value));
    }
    
    //filtra segun lo que ingrese el usuario
    const filtrarLocales=(value)=>{
        const inputValue=value.trim().toLowerCase();
        const inputLength=inputValue.length;
        let filtrado= [];
        jsonLocales.forEach((local)=>{
                if(local.nombre
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .includes(inputValue)
                ){
                    filtrado.push(local);
                }   
        });
        return inputLength === 0 ? [] : filtrado;
    }

    //cuando el usuario borra el valor
    const onSuggestionsClearRequested = () =>{
        setLocal([]);
    }
    
    //estructura de sugerencias
    const getSuggestionValue=(suggestion)=>{
        setLocalSeleccionado(suggestion.id);
        return `${suggestion.nombre}`;
    }
    
    //estilo y accesibilidad sugerencia
    const renderSuggestion=(suggestion)=>(
        <span>{`${suggestion.nombre}`}</span>
    );
    
    const onChange=(e, {newValue})=>{   
        if((e.type === 'click') && (newValue.length > 0)){
            if(enableLeyenda === true){setEnableLeyenda(false)}
            setEnableButton(false)
        }else{
            setEnableButton(true)
        }
        setValue(newValue);
    }
    
    const inputProps={
        placeholder:"Ingrese un local",
        value,
        onChange,  
    };  

    return (
        <Dropdown as={ButtonGroup} className='local'>
            <Dropdown.Toggle 
                className={codRequest === 5 ? 'filtro-item-button active' : 'filtro-item-button'}
                id='localBtn'>
                Local de votación
            </Dropdown.Toggle>
            <Dropdown.Menu  className="container-input">
                <div className='dropdown-body'>
                    <InputGroup size='sm'>
                        <Autosuggest
                                suggestions={local}
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
                                to={`locales/${localSeleccionado}`} 
                                eventKey="5"
                                className='consultar'
                                onClick={()=>setRequest(true)}
                            >
                            Consultar
                            </Dropdown.Item>
                        </>
                        :
                        <>
                            {
                            enableLeyenda
                            ?
                            <span className="leyenda-dropdown">Seleccione un local</span> 
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
