

export default function Mesas({data}) {

    
    return (
        <>
        <div className="tabla-mesas">
            <div className="tabla-mesas-head">
                <h4>Mesas computadas</h4>
                <h4 className="text-center">Total</h4>
                <h4 className="text-center">Porcentaje</h4>
            </div>
        
            <div className="mesas-row">
                <label>Mesas computadas</label>
                    <span className="text-center">{data.resumen.mesasIngresadas.toLocaleString()}</span>
                    <span className="text-center">{data.resumen.porcentajeMesasIngresadas}</span>
            </div>
        </div>


        <div className="tabla-mesas">
            <div className="tabla-mesas-head">
                <h4>Mesas No computadas</h4>
                <h4 className="text-center">Total</h4>
                <h4 className="text-center">Porcentaje</h4>
            </div>
            
            <div className="mesas-row">
                <label>Mesas No informadas</label>
                <span className="text-center">{data.resumen.mesasNoInformadas.toLocaleString()}</span>
                <span className="text-center">{data.resumen.porcentajeMesasNoInformadas}</span>
            </div>
        
            <div className="mesas-row">
                <label>Mesas desestimadas</label>
                <span className="text-center">{data.resumen.mesasDesestimadas.toLocaleString()}</span>
                <span className="text-center">{data.resumen.porcentajeMesasDesestimadas}</span>
            </div>
        </div>    
        </>
    )
}
