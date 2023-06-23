import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Mesas from './Mesas';
import Resumen from './Resumen'
import RowResumen from './RowResumen';
import Votos from './Votos';
import { escrutinioContext } from '../Context/escrutinioContex';


export default function BodyResumen({codRequest,data}) {

    const renderSelection = (codRequest) => {
        switch (codRequest){
            case 1:
                return(
                <>
                    <div className="tabla-resumen">
                        <Resumen data={data}/>                    
                    </div>
                    <Mesas data={data}/>
                    <Votos data={data}/>    
                </>)
            case 2:
                return(
                    <>
                        <div className="tabla-resumen">
                            <RowResumen campo={"Departamento: "} valor={data.resumen.departamento}/>
                            <Resumen data={data}/>                    
                        </div>
                        <Mesas data={data}/>
                        <Votos data={data}/>    
                    </>)  
            case 3:
                return(
                    <>
                        <div className="tabla-resumen">
                            <RowResumen campo={"Departamento: "} valor={data.resumen.departamento}/>
                            <RowResumen campo={"Localidad: "} valor={data.resumen.nombreLocalidad}/>
                            <Resumen data={data}/>                    
                        </div>
                        <Mesas data={data}/>
                        <Votos data={data}/>    
                    </>)    
            case 4:
                return(
                    <>
                        <div className="tabla-resumen">
                            <Resumen data={data}/>                    
                        </div>
                        <Mesas data={data}/>
                        <Votos data={data}/>    
                    </>)
            case 5:
                return(
                    <>
                        <div className="tabla-resumen">
                            <RowResumen campo={"Departamento: "} valor={data.resumen.departamento}/>
                            <RowResumen campo={"Localidad: "} valor={data.resumen.nombreLocalidad}/>
                            <RowResumen campo={"Local: "} valor={data.resumen.nroLocal.toLocaleString()}/>
                            <Resumen data={data}/>                    
                        </div>
                        <Mesas data={data}/>
                        <Votos data={data}/>    
                    </>)
            case 6:
                return(
                    <>
                        <div className="tabla-resumen">
                            <RowResumen campo={"Departamento: "} valor={data.resumen.departamento}/>
                            <RowResumen campo={"Localidad: "} valor={data.resumen.nombreLocalidad}/>
                            <RowResumen campo={"Local: "} valor={data.resumen.nombreLocal.toLocaleString()}/>
                            <RowResumen campo={"Mesa: "} valor={data.resumen.mesa.toLocaleString()}/>
                            <RowResumen campo={"Totalidad Electores: "} valor={data.resumen.totalElectores.toLocaleString()}/>
                            <RowResumen campo={"Participacion sobre lo computado: "} valor={data.resumen.asistencia}/>                  
                        </div>
                        <Votos data={data}/>    
                    </>)
            default:
                return (<></>)
    
    }};

    const {variableResumen} = useContext(escrutinioContext)

    if(variableResumen){
        return(
            <>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Resumen</Accordion.Header>
                        <Accordion.Body>
                            {renderSelection(codRequest)}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </>
        )  
    }else{
        return(
            <>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Resumen</Accordion.Header>
                        <Accordion.Body>
                            {renderSelection(codRequest)}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </>
        ) 
    }
}
