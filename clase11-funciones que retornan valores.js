
var judith   = {
    nombre : 'Judith',
    apellido: "Sánchez",
    edad: 15,
    ingeniero : true,
    cocinero :false,
    cantante: true,
    dj:false,
    guitarrista: false,
    drone:false
}

var juan   = {
    nombre : 'hdez',
    apellido: "ros",
    edad: 13,
    ingeniero : true,
    cocinero :false,
    cantante: true,
    dj:false,
    guitarrista: false,
    drone:false
}


function imprimirProfesiones(persona) {

    console.log(`${persona.nombre} es:`);

    if(persona.ingeniero){
        console.log('Ingeniero');
    } else {
        console.log('no es Ingeniero');
    }
    if(persona.cocinero){
        console.log('cocinero');
    }else {
        console.log('no es cocinero');
    }
    if(persona.cantante){
        console.log('cantante');
    }else {
        console.log('no es cantante');
    }
    if(persona.dj){
        console.log('dj');
    }else {
        console.log('no es dj');
    }
    if(persona.guitarrista){
        console.log('guitarrista');
    }else {
        console.log('no es guitarrista');
    }
    if(persona.drone){
        console.log('piloto de drone');
    }else {
        console.log('no es piloto de drone');
    }
}

const MAYORIA_DE_EDAD =  18;

imprimirProfesiones(judith);

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
        
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    }else{
        console.log(`${persona.nombre} es menor de edad`);
    }
}

imprimirSiEsMayorDeEdad(judith);
imprimirSiEsMayorDeEdad(juan);