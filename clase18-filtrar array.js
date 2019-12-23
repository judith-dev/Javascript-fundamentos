var Alvaro = {
   nombre: 'Alvaro',
   altura: 1.50
 }
 var Daniel = {
   nombre : 'Daniel',
   altura:  1.40
 }
 var Alexys = {
   nombre: 'Alexys',
   altura:  1.90
 }
 var Rafa = {
   nombre: 'Rafa',
   altura:  1.60
 }
var Alejandro =  {
   nombre: 'Alejandro',
   altura:  1.75
 }
 var Sofia = {
   nombre: 'Sofia',
   altura:  1.89
 }

 var personas = [Alvaro, Daniel, Alexys,Rafa, Alejandro, Sofia];

const PERSONA_ALTA =  1.75;

const Altas =  ({altura}) => altura >= PERSONA_ALTA;
const Baja =  ({altura}) => altura < PERSONA_ALTA;

var personasAltas = personas.filter(Altas);
var personasBajas= personas.filter(Baja);

console.log('personas altas');
console.log(personasAltas);
console.log('personas bajas');
console.log(personasBajas);