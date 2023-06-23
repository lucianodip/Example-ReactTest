import React from 'react'
import {Pie} from 'react-chartjs-2';
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chart.js/auto';


export default function ChartEscrutinio({data,codRequest}) {
    
    //funcion procesadora de cifra (string a int)
    const processCifra = (valor) => {
        const valorSinPorc = valor.replace(/%/g, '');
        const valorInt = parseFloat(valorSinPorc);
        return valorInt;
    }
    
 
    const MesasComput= (processCifra(data.resumen.porcentajeMesasIngresadas));
    const MesasNoComput= (processCifra(data.resumen.porcentajeMesasNoComputadas));
    Chart.register(ChartDataLabels);
    
    const datos={
        labels: ['Mesas computadas      ','Mesas no computadas'],
        datasets: [
            {
                data: [MesasComput, MesasNoComput],
                backgroundColor:['#40A5DD','#EE314C'],
                borderColor: 'none',
                borderWidth: 0,
                fill:true
                },
            ],
    }
    
    const config={
        plugins: 
            {   
                tooltip:{
                    enabled:false
                },
                legend: {
                    position: 'bottom',
                    boxWidth: '100',
                    
                    labels: {
                        type: 'line',
                        boxWidth: 30,
                        font: {
                            size: 12,
                            weight: '600',
                            color: '#222',
                            family: 'Montserrat',
                        }
                    }
                },
            
                datalabels: {
                    formatter: function(data){
                        return data + '%';
                    },
                    color: '#fefefe',
                    font:{
                        weight: '500',
                        size: 16,
                        family: 'Montserrat',
                    }
                }
        }
    }    
    
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


    const renderSelection = (codRequest) => {
        switch (codRequest) {
            case 1:
                return (<>
                            <h4 className="breadcrumb-item"><span>Provincia</span></h4>
                            <h4 className="breadcrumb-item active" aria-current="page">{adaptacionNomenclatura(data.cabecera.cargoConsultado)}</h4>      
                        </>)
            case 2:
                return (<>
                            <h4 className="breadcrumb-item"><span>Departamento</span></h4>
                            <h4 className="breadcrumb-item" aria-current="page">{data.resumen.departamento}</h4>
                            <h4 className="breadcrumb-item active" aria-current="page">{adaptacionNomenclatura(data.cabecera.cargoConsultado)}</h4>
                        </>)
            case 3:
                return (<>
                            <h4 className="breadcrumb-item"><span>Localidad</span></h4>
                            <h4 className="breadcrumb-item" aria-current="page">{data.resumen.nombreLocalidad}</h4>
                            <h4 className="breadcrumb-item active" aria-current="page">{adaptacionNomenclatura(data.cabecera.cargoConsultado)}</h4>
                        </>)
            case 4:
                return (<>
                            <h4 className="breadcrumb-item"><span>Seccional</span></h4>
                            <h4 className="breadcrumb-item" aria-current="page">Nombre Seccional</h4>
                            <h4 className="breadcrumb-item active" aria-current="page">cargo</h4>
                        </>)
            case 5:
                return (<>
                            <h4 className="breadcrumb-item"><span>Local</span></h4>
                            <h4 className="breadcrumb-item" aria-current="page">{data.resumen.nombreLocal}</h4>
                            <h4 className="breadcrumb-item active" aria-current="page">{adaptacionNomenclatura(data.cabecera.cargoConsultado)}</h4>
                        </>)
            default:
                return (<></>)
        }};    
    
    return(
        <>
            <div className="cabecera-resumen">
                <h3>Estado de avance</h3>
            </div>
            <div className="chart-container">
                <div className="breadcrumb breadcrumb-chart">
                    {renderSelection(codRequest)}
                </div>
                <div className="chart">
                    <Pie data={datos} options={config}/>
                </div>
            </div>
        </>
    )
}
