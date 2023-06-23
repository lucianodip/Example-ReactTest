import './App.scss';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {EscrutinioProvider} from './components/Context/escrutinioContex'
import {FullContainer} from './components/FullContainer';
import {BodyContainer} from './components/BodyContainer';
import {HomePage} from './components/HomePage';
import { BodyContainerCargos } from './components/BodyContainerCargos';
import { BodyContainerMesas } from './components/BodyContainerMesas';
import { BodyContainerCargosMesa } from './components/BodyContainerCargosMesa';


export default function App() {
    return (
        <EscrutinioProvider>
            <BrowserRouter> 
                <FullContainer>                            
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/:idSitio/:idEstabl" element={<BodyContainer/>}/> 
                        <Route path="/:idSitio/:idEstabl/:cargos/:idCargo" element={<BodyContainerCargos/>}/>
                        <Route path="/mesas/:nroMesa/:letraMesa" element={<BodyContainerMesas/>}/>
                        <Route path="/mesas/:nroMesa/:letraMesa/:cargos/:idCargo" element={<BodyContainerCargosMesa/>}/>              
                        <Route path='*' element={ <Navigate to='/'/> }/>
                    </Routes>  
                </FullContainer>              
            </BrowserRouter>
        </EscrutinioProvider>
    );
}
