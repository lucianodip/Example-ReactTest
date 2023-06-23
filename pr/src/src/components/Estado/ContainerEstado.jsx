import ChartEscrutinio from '../Chart/ChartEscrutinio'
import BodyResumen from '../Resumen/BodyResumen'

export default function ContainerEstado({codRequest, dataEscrutinio}) {
   
    const renderChart = (codRequest) => {
        switch (codRequest){
            case 6:
                return(
                 <></>
                )

            default:
                return(
                 <>
                    <ChartEscrutinio
                        data={dataEscrutinio}
                        codRequest={codRequest}
                    />  
                 </>
                )    
    }};

    //componente distribuidor de datos de chart y resumen.
    if(dataEscrutinio!=null)
    return (
        <>
            <div className="seccion-resumen">
                {renderChart(codRequest)}
                <BodyResumen
                    data={dataEscrutinio}
                    codRequest={codRequest}
                />
            </div>    
        </>   
    )

}
