//llamado a la api
export async function getPeople(){

    try{
        const response = await fetch ("https://swapi.dev/api/people/");
        //condiciona que si el ok es falso arroja un nuevo error 
        if(!response.ok){
            throw new NetworkError();
        }
        const data = await response.json();
        return data;
    //si falla sera cachiado por el catch
    }catch(err){
        throw err;
    }
}


//clase que extiende de error(?) y construye un nuevo error  
class NetworkError extends Error{
    constructor(){
        super("Network error")
    }
}

//realiza la peticion a la api y le agrega el id para que solo devuelva un objeto determinado
export async function getCharacter(id=1){
    const response = await fetch (`https://swapi.dev/api/people/${id}/`)
    const data = await response.json();
    return data;
}




// //llamado a la api
// export async function getPeople(){
//     const response = await fetch ("https://swapi.dev/api/people/");
//     const data = await response.json();
//     return data;
// }