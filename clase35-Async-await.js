const API = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

const obtenerPersonaje = (id) => {

    return new Promise((resolve, reject) =>{
        const url  = `${API}${PEOPLE_URL.replace(':id', id)}`;
        $
        .get(url, opts, (data) => {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}
function onError(id){
    console.log(`Sucedió un error al obtener el personaje ${id}`);
}

async function obtenerPersonajes(){
    var ids =  [1,2,3,4,5,6,7]
    var promesas  = ids.map(id => obtenerPersonaje(id));
    try {
        var personajes = await Promise.all(promesas);
        console.log(personajes);
    } catch(id){
      onError(id)
    }
}
obtenerPersonajes()