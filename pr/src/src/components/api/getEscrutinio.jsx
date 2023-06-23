const urlRaiz=process.env.REACT_APP_PATH_API

export async function getEscrutinio(idSitio,idEstabl){
    try {
        const response = await fetch(`${urlRaiz}api/${idSitio}/${idEstabl}`);
        const data = await response.json();
        if(response.status !== 200) throw data;
        return data;
    } catch (error) {
        throw error;  
    }
}

export async function getEscrutinioMesas(nroMesa,letraMesa){
    try {
        const response = await fetch(`${urlRaiz}api/mesas/${nroMesa}/${letraMesa}`);
        return response;
    } catch (error) {
        throw error;  
    }
}
export async function getEscrutinioCargosMesas(nroMesa,letraMesa,idCargo){
    try {
        const response = await fetch(`${urlRaiz}api/mesas/${nroMesa}/${letraMesa}/cargos/${idCargo}`);
        return response;
    } catch (error) {
        throw error;  
    }
}


export async function getEscrutinioCargos(idSitio,idEstabl,idCargo){
    try {
        const response = await fetch(`${urlRaiz}api/${idSitio}/${idEstabl}/cargos/${idCargo}`);
        const data = await response.json();
        if(response.status !== 200) throw data;
        return data;
    } catch (error) {
        throw error;  
    }
}
