const API = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const luke = `${API}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true };
const onPeopleResponse = (people) => console.log(`Hola yo soy ${people.name}`);
$.get(luke, opts, onPeopleResponse)