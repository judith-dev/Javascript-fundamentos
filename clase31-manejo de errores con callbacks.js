const API = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

const obtenerPersonaje = (id, callback) => {
    
    const url  = `${API}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, opts, callback).fail(()=>{
        console.log(`sucedio un error. No se pudo obtener el personaje ${id}`)
    });
}

obtenerPersonaje(1, (personaje) =>{ 
    console.log(`Hola yo soy ${personaje.name}`);
    obtenerPersonaje(2, (personaje) =>{ 
        console.log(`Hola yo soy ${personaje.name}`)
        obtenerPersonaje(3, (personaje) =>{ 
            console.log(`Hola yo soy ${personaje.name}`)
            obtenerPersonaje(4, (personaje) =>{ 
                console.log(`Hola yo soy ${personaje.name}`)
            });
        });
    });
});