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

function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre: 'judith'});
