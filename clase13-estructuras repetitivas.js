
var judith   = {
    nombre : 'Judith',
    peso : 63,
    edad: 18
};

const DIAS_ANIO =  365;
const INCREMENTO_PESO =  0.200;

console.log(`Al inicio del anio ${judith.nombre} pesa ${judith.peso} kg.`);

const Aumentar = persona => persona.peso += INCREMENTO_PESO;
const Adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for(var i = 1 ; i <=DIAS_ANIO ; i++){
    var random = Math.random()
    if(random < 0.25){
      Aumentar(judith);
    } else if (random < 0.5){
        Adelgazar(judith);
    }
}

console.log(`Al final del anio ${judith.nombre} pesa ${judith.peso.toFixed(1)} kg.`);