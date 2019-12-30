const API = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

const obtenerPersonaje = (id, callback) => {
    const url  = `${API}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, (persona) => {
        console.log(`Hola yo soy ${persona.name}`);

        if(callback){
            callback();
        }
    });
}
obtenerPersonaje(1, () => {
 obtenerPersonaje(2, () =>{
    obtenerPersonaje(3, () =>{});
 });
});