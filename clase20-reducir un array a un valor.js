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

var totalLibros =  personas.reduce((total,{cantidadLibros}) =>  total + cantidadLibros,0)

console.log(totalLibros);