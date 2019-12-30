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
    console.log(`Sucedi+o un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
.then((personaje) => console.log(`El personaje 1 es ${personaje.name}`))
.catch(onError);