

export default function RowResumen({campo,valor}) {
    return (
        <>
            <div className="resumen-row">
                <label>{campo}</label>
                    <span>{valor}</span>
            </div>
        </>
    )
}
