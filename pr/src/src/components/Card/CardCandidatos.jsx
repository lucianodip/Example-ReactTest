
export default function CardCandidatos({data}) {

    return (
            <div>
                <div className="container-tabla">
                    <div className="tabla tabla-candidatos">
                        <div className="tabla__head">
                            <div className="tabla__head__imagen ">
                                <img src={data.imagenPartido} alt="imagen partido"/>
                            </div>    
                            <h4 className="tabla__head__titulo "><span>{data.nombrePartido}</span></h4>
                        </div>

                        <div className="container-tabla__subtitulo">
                            <h5 className="tabla__subtitulo-type"><span>Candidato</span></h5>
                            <h5 className="tabla__subtitulo text-center "><span>Votos</span></h5>
                            <h5 className="tabla__subtitulo text-center "><span>Porcentaje</span></h5>
                        </div>

                        {data.listas.map((el) =>
                        
                            <div key={el.nroLista} className="tabla__row">
                                <div className="tabla__data">
                                    <img src={el.imagenCandidato1} alt="imagen-candidato"/>
                                    <p className="tabla__data-name"><span>{el.nombreCandidato1}</span></p>
                                </div>
                                <p className="tabla__number text-center"><span>{el.votos.toLocaleString()}</span></p>
                                <p className="tabla__number text-center"><span>{el.porcentaje}</span></p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
    )
}
