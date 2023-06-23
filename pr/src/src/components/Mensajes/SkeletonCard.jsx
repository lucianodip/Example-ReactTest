import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Container } from 'react-bootstrap';


export default function SkeletonCard() {
  return (
    <>    
        <SkeletonTheme 
            baseColor="#CED4DA" 
            highlightColor="#fafafa"
            borderRadius="4px"
            >     
            <Container>
                {/* primera card */}
                <div className="container-tabla">
                    <div className="tabla tabla-candidatos">
                        <div className="tabla__head">
                            <div className="tabla__head__imagen ">
                            <Skeleton width={62} height={62}></Skeleton>
                            </div>
                            <h4 className="tabla__head__titulo "><span><Skeleton width={150}/></span></h4>
                        </div>
                        <div className="container-tabla__subtitulo">
                            <span><Skeleton width={50}/></span>
                            <span><Skeleton width={100}/></span>
                            <span><Skeleton width={100}/></span>
                        </div>
                        <div className="tabla__row odd" >
                            <div className="tabla__data">
                            <Skeleton width={54} height={54}></Skeleton>
                                <p className="tabla__data-name"><span><Skeleton width={100}/></span></p>
                            </div>
                            <p className="tabla__number text-center"><span><Skeleton width={20}/></span></p>
                            <p className="tabla__number text-center"><span><Skeleton width={35}/></span></p>
                        </div>
                        <div className="tabla__row even">
                            <div className="tabla__data">
                            <Skeleton width={54} height={54}></Skeleton>
                                <p className="tabla__data-name"><span><Skeleton width={100}/></span></p>
                            </div>
                            <p className="tabla__number text-center"><span><Skeleton width={20}/></span></p>
                            <p className="tabla__number text-center"><span><Skeleton width={35}/></span></p>
                        </div>
                    </div>
                </div>
                {/* segunda card */}
                <div className="container-tabla">
                    <div className="tabla tabla-candidatos">
                        <div className="tabla__head">
                            <div className="tabla__head__imagen ">
                            <Skeleton width={62} height={62}></Skeleton>
                            </div>
                            <h4 className="tabla__head__titulo "><span><Skeleton width={150}/></span></h4>
                        </div>
                        <div className="container-tabla__subtitulo">
                            <span><Skeleton width={50}/></span>
                            <span><Skeleton width={100}/></span>
                            <span><Skeleton width={100}/></span>
                        </div>
                        <div className="tabla__row odd" >
                            <div className="tabla__data">
                            <Skeleton width={54} height={54}></Skeleton>
                                <p className="tabla__data-name"><span><Skeleton width={100}/></span></p>
                            </div>
                            <p className="tabla__number text-center"><span><Skeleton width={20}/></span></p>
                            <p className="tabla__number text-center"><span><Skeleton width={35}/></span></p>
                        </div>
                        <div className="tabla__row even">
                            <div className="tabla__data">
                            <Skeleton width={54} height={54}></Skeleton>
                                <p className="tabla__data-name"><span><Skeleton width={100}/></span></p>
                            </div>
                            <p className="tabla__number text-center"><span><Skeleton width={20}/></span></p>
                            <p className="tabla__number text-center"><span><Skeleton width={35}/></span></p>
                        </div>
                    </div>
                </div>
                {/* tercera card */}
                <div className="container-tabla">
                    <div className="tabla tabla-candidatos">
                        <div className="tabla__head">
                            <div className="tabla__head__imagen ">
                            <Skeleton width={62} height={62}></Skeleton>
                            </div>
                            <h4 className="tabla__head__titulo "><span><Skeleton width={150}/></span></h4>
                        </div>
                        <div className="container-tabla__subtitulo">
                            <span><Skeleton width={50}/></span>
                            <span><Skeleton width={100}/></span>
                            <span><Skeleton width={100}/></span>
                        </div>
                        <div className="tabla__row odd" >
                            <div className="tabla__data">
                            <Skeleton width={54} height={54}></Skeleton>
                                <p className="tabla__data-name"><span><Skeleton width={100}/></span></p>
                            </div>
                            <p className="tabla__number text-center"><span><Skeleton width={20}/></span></p>
                            <p className="tabla__number text-center"><span><Skeleton width={35}/></span></p>
                        </div>
                        <div className="tabla__row even">
                            <div className="tabla__data">
                            <Skeleton width={54} height={54}></Skeleton>
                                <p className="tabla__data-name"><span><Skeleton width={100}/></span></p>
                            </div>
                            <p className="tabla__number text-center"><span><Skeleton width={20}/></span></p>
                            <p className="tabla__number text-center"><span><Skeleton width={35}/></span></p>
                        </div>
                    </div>
                </div>
            </Container>
        </SkeletonTheme>   
        </>
    )
}
