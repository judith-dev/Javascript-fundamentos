
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
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
var dias  = 0;

const META = judith.peso -  3;

while(judith.peso > META){
    
   if(comeMucho()){
      Aumentar(judith);
   }
   if(realizaDeporte()){
      Adelgazar(judith);
   }
   dias++;
}

console.log(`Pasaron ${dias} días hasta que ${judith.nombre} adelgazo 3kg.`);