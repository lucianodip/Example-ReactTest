
import { useContext } from "react"
import Container from "react-bootstrap/esm/Container"
import { Breadcrumb } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonResultados from "./SkeletonResultados";
import SkeletonResumen from "./SkeletonResumen";
import { escrutinioContext } from "../Context/escrutinioContex";


export default function EsperandoDatos() {


    const {variableResumen} = useContext(escrutinioContext)

        if (window.innerWidth < 992){

            if (variableResumen){
                return(
                    <>
                        <SkeletonTheme 
                            baseColor="#CED4DA" 
                            highlightColor="#fafafa"
                            borderRadius="0.40rem"
                        >
                        <div className="cargos" >
                            <div className='cargo-buttons'>
                                <div><Skeleton width={90}/></div> 
                                <div><Skeleton width={90}/></div> 
                                <div><Skeleton width={90}/></div> 
                            </div>
                        </div>
                        <div className='container-breadcrumb mb-3'>
                            <Breadcrumb >
                                <Breadcrumb.Item className=''><Skeleton width={130} /></Breadcrumb.Item>
                                <Breadcrumb.Item className=''><Skeleton width={130} /></Breadcrumb.Item>
                                <Breadcrumb.Item active className=''><Skeleton width={130} /></Breadcrumb.Item>    
                            </Breadcrumb>  
                        </div> 
                        <Container className='main'>
                            <SkeletonResumen/>
                        </Container>
                        </SkeletonTheme>
                    </>
                )
            }else{
                return(
                    <>
                        <SkeletonTheme 
                            baseColor="#CED4DA" 
                            highlightColor="#fafafa"
                            borderRadius="0.40rem"
                        >
                        <div className="cargos">
                            <div className='cargo-buttons'>
                                <div><Skeleton width={90}/></div> 
                                <div><Skeleton width={90}/></div> 
                                <div><Skeleton width={90}/></div> 
                            </div>
                        </div>
                        <div className='container-breadcrumb'>
                            <Breadcrumb>
                                <Breadcrumb.Item className=''><Skeleton width={90} /></Breadcrumb.Item>
                                <Breadcrumb.Item className=''><Skeleton width={90} /></Breadcrumb.Item>
                                <Breadcrumb.Item active className=''><Skeleton width={90} /></Breadcrumb.Item>    
                            </Breadcrumb>  
                        </div> 
                        <Container className='main'>
                            <SkeletonResultados/>
                        </Container>
                        </SkeletonTheme>
                    </>
                )
            }

            
        }else{
            return(
                <>
                    <SkeletonTheme 
                        baseColor="#CED4DA" 
                        highlightColor="#fafafa"
                        borderRadius="0.40rem"
                    >
                    <div className="cargos">
                            <div className='cargo-buttons'>
                                <div><Skeleton width={110} height={23}/></div> 
                                <div><Skeleton width={110} height={23}/></div> 
                                <div><Skeleton width={110} height={23}/></div> 
                            </div>
                    </div>
                    <div className='container-breadcrumb'>
                        <Breadcrumb>
                            <Breadcrumb.Item className=''><Skeleton width={90} /></Breadcrumb.Item>
                            <Breadcrumb.Item className=''><Skeleton width={90} /></Breadcrumb.Item>
                            <Breadcrumb.Item active className=''><Skeleton width={90} /></Breadcrumb.Item>    
                        </Breadcrumb>  
                    </div> 
                    <Container className='main'>
                        <SkeletonResultados/>
                        <SkeletonResumen/>
                    </Container>
                    </SkeletonTheme>
                </>
            )
        }
    }