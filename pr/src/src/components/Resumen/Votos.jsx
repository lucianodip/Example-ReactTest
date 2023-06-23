
export default function Votos({data}) {


    return (
        <>
        <div className="tabla-mesas">
            <div className="tabla-mesas-head">
                <h4>Votos computados</h4>
                <h4 className="text-center">Total</h4>
                <h4 className="text-center">Porcentaje</h4>
            </div>

            <div className="mesas-row">
                <label>Votos válidos emitidos</label>
                <span className="text-center">{data.totales[5].votos.toLocaleString()}</span>
                <span className="text-center">{data.totales[5].porcentaje}</span>
            </div>
                            
            <div className="mesas-row-votos-validos">
                <div className="mesas-sub-row">
                    <label>Votos afirmativos</label>
                    <span className="text-center">{data.totales[0].votos.toLocaleString()}</span>
                    <span className="text-center">{data.totales[0].porcentaje}</span>
                </div>

                <div className="mesas-sub-row">
                    <label>Votos en blanco</label>
                    <span className="text-center">{data.totales[1].votos.toLocaleString()}</span>
                    <span className="text-center">{data.totales[1].porcentaje}</span>
                </div>    
            </div>

            <div className="mesas-row">
                <label>Votos anulados</label>
                <span className="text-center">{data.totales[2].votos.toLocaleString()}</span>
                <span className="text-center">{data.totales[2].porcentaje}</span>
            </div>
            <div className="mesas-row">
                <label>Votos recurridos</label>
                <span className="text-center">{data.totales[3].votos.toLocaleString()}</span>
                <span className="text-center">{data.totales[3].porcentaje}</span>
            </div>
            <div className="mesas-row">
                <label>Votos impugnados</label>
                <span className="text-center">{data.totales[6].votos.toLocaleString()}</span>
                <span className="text-center">{data.totales[6].porcentaje}</span>
            </div>
            <div className="mesas-row">
                <label>Diferencia a determinar en el escrutinio definitivo</label>
                <span className="text-center">{data.totales[4].votos.toLocaleString()}</span>
                <span className="text-center">{data.totales[4].porcentaje}</span>
            </div>
        </div>
        </>
    )
}