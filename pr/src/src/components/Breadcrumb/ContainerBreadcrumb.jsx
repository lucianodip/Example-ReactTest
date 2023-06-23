import React, { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ModalTelegrama from '../Modal/ModalTelegrama';


export default function ContainerBreadcrumb({data, codRequest}) {

    // clase active a 'container-breadcrumb' cuando se hace scroll o se redimensiona la ventana 
    const [bread, setBread] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const scrollDesktop = () =>{
        let scrollValue = window.scrollY

        if (scrollValue > 170){
            setBread(true)
        }else {
            setBread(false)
        }
    }

    window.addEventListener('scroll', scrollDesktop)
    window.addEventListener('resize', scrollDesktop)


    const adaptacionNomenclatura = (cargo) => {
        if(cargo === "diputado"){
            return "diputados";
        }else
            if(cargo === "concejal"){
                return "concejales";
            }else
                if(cargo === "ccomunal"){
                    return "comisión comunal";
                }else{
                    return cargo;
                }
    }


    const renderVerTelegrama = (codRequest,postRecuento) => {
        if(codRequest === 6 && postRecuento === true){
              return(
                <>
                <div className="breadcrumb-mensaje" onClick={handleShow}>
                    <button className="telegrama-btn">
                        <p className='telegrama-btn-p'>Ver Telegrama</p>
                        <i className="bi bi-download"></i>
                    </button>
                </div>   
                </>
              )  
        }
    }


    //funcion render segun codigoRequest (1 a 6)
    const renderSelection = (codRequest) => {
        switch (codRequest) {

            case 1:
                return (<>
                        <Breadcrumb.Item className={bread ? 'shrink' : ''}>Provincia</Breadcrumb.Item>
                        <Breadcrumb.Item active className={bread ? 'shrink' : ''}>{adaptacionNomenclatura(data.cabecera.cargoConsultado)}</Breadcrumb.Item>
                        </>)
            case 2:
                return (<>
                        <Breadcrumb.Item className={bread ? 'shrink' : ''}>Departamento</Breadcrumb.Item>
                        <Breadcrumb.Item className={bread ? 'shrink' : ''}>{data.resumen.departamento}</Breadcrumb.Item>
                        <Breadcrumb.Item active className={bread ? 'shrink' : ''}>{adaptacionNomenclatura(data.cabecera.cargoConsultado)}</Breadcrumb.Item>
                        </>)
            case 3:
                return (<>
                        <Breadcrumb.Item className={bread ? 'shrink' : ''}>Localidad</Breadcrumb.Item>
                        <Breadcrumb.Item className={bread ? 'shrink' : ''}>{data.resumen.nombreLocalidad}</Breadcrumb.Item>
                        <Breadcrumb.Item active className={bread ? 'shrink' : ''}>{adaptacionNomenclatura(data.cabecera.cargoConsultado)}</Breadcrumb.Item>
                        </>)
            case 4:
                return (<>
                        <Breadcrumb.Item className={bread ? 'shrink' : ''}>Seccional</Breadcrumb.Item>
                        <Breadcrumb.Item className={bread ? 'shrink' : ''}>Nombre Seccional</Breadcrumb.Item>
                        <Breadcrumb.Item active className={bread ? 'shrink' : ''}>cargo</Breadcrumb.Item>
                        </>)
            case 5:
                return (<>
                        <Breadcrumb.Item className={bread ? 'shrink' : ''}>Local</Breadcrumb.Item>
                        <Breadcrumb.Item className={bread ? 'shrink' : ''}>{data.resumen.nombreLocal}</Breadcrumb.Item>
                        <Breadcrumb.Item active className={bread ? 'shrink' : ''}>{adaptacionNomenclatura(data.cabecera.cargoConsultado)}</Breadcrumb.Item>
                        </>)
            case 6:
                return (<>
                        <Breadcrumb.Item className={bread ? 'shrink' : ''}>Mesa</Breadcrumb.Item>
                        <Breadcrumb.Item className={bread ? 'shrink' : ''}>{data.resumen.mesa}</Breadcrumb.Item>
                        <Breadcrumb.Item active className={bread ? 'shrink' : ''}>{adaptacionNomenclatura(data.cabecera.cargoConsultado)}</Breadcrumb.Item>
                        </>)   
            default:
                return (<></>)
        }};

    
    if(data!=null)
    return (
        <>
            <div className={bread ? 'container-breadcrumb active' : 'container-breadcrumb'}>
                <Breadcrumb>
                    {renderSelection(codRequest)}
                    {renderVerTelegrama(codRequest,data.cabecera.postRecuento)}
                </Breadcrumb>  
            </div> 
            <ModalTelegrama
                data={data}
                show={show}
                handleClose={handleClose}
                tribunal={data.resumen.intervinoTribunal}
            />
        </>

    );
}








