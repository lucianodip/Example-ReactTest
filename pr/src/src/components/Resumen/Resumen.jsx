

export default function Resumen({data}) {

    const isForeign = () => {
        if( (data.cabecera.cargoConsultado === "gobernador") ||
            (data.cabecera.cargoConsultado === "diputado") ||
            (data.cabecera.cargoConsultado === "senador") ||
            (data.resumen.totalMesasExt === 0)
        ){
            return false;
        }else{
            return true;
        }
    }

    return (
        <>
            <div className="resumen-row">
                <label>Total de Mesas:</label>
                    {/* <span>{data.resumen.totalMesas}  (*)</span> */}
                    <span>{data.resumen.totalMesas.toLocaleString()} {isForeign() ? "(*)" : ""}</span>
            </div>
            <div className="resumen-row">
                <label>Totalidad Electores:</label>
                    <span>{data.resumen.totalElectores.toLocaleString()}</span>
            </div>
            <div className="resumen-row">
                <label>Participación sobre lo computado:</label>
                    <span>{data.resumen.porcentajeParticipacion}</span>
            </div>
            <div className="resumen-row">
                {isForeign() ? <label>(*) Incluye {data.resumen.totalMesasExt.toLocaleString()} Mesas de Electores Extranjeros</label> : ""}
            </div>
        </>
    )
}
