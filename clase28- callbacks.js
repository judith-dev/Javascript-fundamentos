const API = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };
const onPeopleResponse = (people) => console.log(`Hola yo soy ${people.name}`);
const obtenerPersonaje = (id) => {
    const url  = `${API}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, onPeopleResponse)
}
obtenerPersonaje(40);