var jud =  {
    nombre : 'jud',
    apellido : 'sanchez',
    edad : 26
}
const MAYOR_DE_EDAD = 18;

function esMayorEdad(persona){
    let mensaje;

    if(persona.edad >= MAYOR_DE_EDAD){
      mensaje =  'es mayor de edad';
    } else {
      mensaje =  'es menor de edad';
    }
    console.log(mensaje);
}

esMayorEdad(jud);