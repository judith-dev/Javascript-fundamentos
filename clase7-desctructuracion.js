var sacha = {
    nombre: 'sacha',
    apellido: 'lifszyc',
    edad: 28
}

var dario = {
    nombre: 'dario',
    apellido: 'susnicky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona) {
    // var { nombre }= persona.nombre;
    var { nombre }= persona;
    console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona) {
    var {nombre,edad} = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años `);
}

imprimirNombreYEdad(sacha);
imprimirNombreYEdad(dario);