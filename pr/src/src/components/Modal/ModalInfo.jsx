import Modal from 'react-bootstrap/Modal';

export default function ModalInfo({show, handleClose}) {

    return (
    <Modal   
        className="modal-lg" 
        show={show} 
        onHide={handleClose}
        >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Header>
            <Modal.Title>INFORMACIÓN RESPECTO DE LOS DATOS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-txt">
        La información que se publica en esta página web proviene de los telegramas que se reciben en los centros de datos y que son confeccionados por las autoridades de mesa y revisten el carácter de provisorio. Los datos que se reciben en estos telegramas pueden contener errores y/o inconsistencias. Estos errores o inconsistencias son resueltas en el Escrutinio Definitivo por el Tribunal Electoral de la Provincia de Santa Fe.
        </div>
        <h3 className="modal-subtitulo">GLOSARIO</h3>
        <div className="modal-txt">
            <span>Total de Mesas: </span> Refiere a la cantidad de mesas habilitadas según padrón.
        </div>
        <div className="modal-txt">
                <span>Total de Electores: </span>Refiere a la cantidad de electores habilitados según el padrón.
            </div>
            <div className="modal-txt">
                <span>Mesas Computadas: </span> Son las mesas cuyos datos efectivamente se ingresaron al sistema y por lo tanto se incluyen en los resultados.
            </div>
            <div className="modal-txt">
                <span>Mesas No Computadas: </span>Son las mesas cuyos datos aún no se ingresaron al sistema y por lo tanto no se incluyen en los resultados. Se exhiben en esta categoría las mesas no informadas -que son aquellas mesas de las cuales no se ha recibido la información del telegrama- y las mesas desestimadas -que son las mesas con telegramas desestimados por el Tribunal Electoral debido a errores en el telegrama-.
            </div>
            <div className="modal-txt">
                <span>Diferencia a determinar en el Escrutinio Definitivo: </span>Se considera diferencia a determinar en el escrutinio definitivo cuando en el telegrama la suma de los votos es menor que la cantidad de votantes informados en la mesa. 
            </div>
            <h3 className="modal-subtitulo">CÁLCULO DE PORCENTAJE</h3>
            <div className="modal-txt">
                <span>
                    Porcentaje de Mesas Computadas: </span>Es la relación existente entre la cantidad de mesas computadas y la cantidad de mesas habilitadas.
            </div>
            <div className="modal-txt">
                <span>Porcentaje de Mesas No Informadas: </span>
                Es la relación existente entre la cantidad de mesas no informadas y la cantidad de mesas habilitadas.
            </div>
            <div className="modal-txt">
                <span>Porcentaje de Mesas Desestimadas: </span>
                Es la relación existente entre las mesas desestimadas y la cantidad de mesas habilitadas.
            </div>
            <div className="modal-txt">
                <span>
                    Porcentaje de participación sobre lo computado: </span>
                    Es la relación existente entre los votos computados y el total de electores habilitados en las mesas computadas.
            </div>
            <div className="modal-txt">
                <span>
                    Porcentaje de Votos Válidos Emitidos: </span>
                    Es la relación existente entre los votos válidos emitidos y el total de votos emitidos.
            </div>
            <div className="modal-txt">
                <span>Porcentaje de Votos Anulados: </span>
                Es la relación existente entre los votos anulados y el total de votos emitidos.
            </div>
            <div className="modal-txt">
                <span>Porcentaje de Votos Afirmativos: </span>
                Es la relación existente entre los votos afirmativos y el total de votos válidos emitidos.
            </div>
            <div className="modal-txt">
                <span>Porcentaje de Votos en Blanco: </span>
                Es la relación existente entre los votos en blanco y el total de votos válidos emitidos.
            </div>
            <div className="modal-txt">
                <span>  Porcentaje de Votos Recurridos: </span>
                Es la relación existente entre los votos recurridos y el total de votos emitidos.
            </div>
            <div className="modal-txt">
                <span>Porcentaje de Votos Impugnados: </span>
                Es la relación existente entre los votos impugnados y el total de votos emitidos.
            </div>
            <div className="modal-txt">
                <span>Porcentaje de la Diferencia a determinar en el Escrutinio Definitivo: </span>
                Es la relación existente entre la diferencia a determinar en el escrutinio definitivo y el Total de Votos Emitidos. 
            </div>
        </Modal.Body>
        <Modal.Footer className="arrow-down">
            <i className="bi bi-chevron-down"></i>
        </Modal.Footer>
    </Modal>
    )
}
