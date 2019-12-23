
var judith   = {
    nombre : 'Judith',
    apellido: "Sánchez",
    edad: 18,
    ingeniero : true,
    cocinero :false,
    cantante: true,
    dj:false,
    guitarrista: false,
    drone:false
};

var juan   = {
    nombre : 'Juan',
    apellido: "hdez",
    edad: 13,
    ingeniero : true,
    cocinero :false,
    cantante: true,
    dj:false,
    guitarrista: false,
    drone:false
};


const MAYORIA_DE_EDAD =  18;

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;
const esManorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD;

function permitirAcceso(persona) {
    if(esManorDeEdad(persona)){
        console.log('ACCESO DENEGADO');
    } else if(esMayorDeEdad(persona)){
        console.log('ACCESO PERMITIDO');
    }
}