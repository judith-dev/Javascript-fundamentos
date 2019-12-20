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

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }   
}
cumpleanos(sacha);
cumpleanos(dario);