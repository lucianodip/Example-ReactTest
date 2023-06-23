import { Modal, Button } from 'react-bootstrap';
import axios from "axios";


export default function ModalTelegrama({data,show,handleClose,tribunal}) {

    const url = data.resumen.archivoTelegrama;

    const nombreTelegrama = () => {
        if(data.resumen.mesa){
            return data.resumen.mesa.replace(/\s+/g, '-')
        }
    }

    const intervinoTribunal = (tribunal) => {
        if(tribunal === 1){
            return(
                <div className="modal-txt tribunal">
                    <p> 
                    <i className="bi bi-exclamation-circle"></i>
                    Este telegrama fue revisado por el Tribunal Electoral Provincial y 
                    sus datos fueron computados acorde a lo dictaminado por dicho organismo.</p>
                </div>
            )  
        }
    }

    const descargaTelegrama = () => {
        axios({
            url: url,
            method: "GET",
            responseType: "blob", // importante
          }).then((response) => {
             const url = window.URL.createObjectURL(new  Blob([response.data]));
             const link = document.createElement("a");
             link.href = url;
             link.setAttribute("download", nombreTelegrama()+".pdf");
             document.body.appendChild(link);
             link.click();
          });
    }

    return (
    <Modal   
        className="modal-lg modal-telegrama centered" 
        show={show} 
        onHide={handleClose}
        >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Header>
            <Modal.Title>IMPORTANTE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {intervinoTribunal(tribunal)}
                <div className="modal-txt">
                    La información que se publica en esta página web proviene de los
                    telegramas que se reciben en los centros de datos y que son confeccionados
                    por las autoridades de mesa y revisten el carácter de provisorio.
                    Los datos que se reciben en estos telegramas pueden contener errores y/o
                    inconsistencias. Estos errores o inconsistencias son resueltas en el
                    Escrutinio Definitivo por el Tribunal Electoral de la Provincia de Santa Fe.
                </div>
        </Modal.Body>
        <Modal.Footer>
            <Button type="button" className="modal-telegrama-btn" onClick={()=>descargaTelegrama()}>
                Ver Telegrama
            </Button>
            <Button type="button" className="modal-telegrama-btn" onClick={handleClose}>
                Cerrar
            </Button>
        </Modal.Footer>
    </Modal>
    )
}
