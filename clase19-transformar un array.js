var Alvaro = {
   nombre: 'Alvaro',
   altura: 1.50,
   cantidadLibros: 60
 }
 var Daniel = {
   nombre : 'Daniel',
   altura:  1.40,
   cantidadLibros: 12
 }
 var Alexys = {
   nombre: 'Alexys',
   altura:  1.90,
   cantidadLibros: 70
 }
 var Rafa = {
   nombre: 'Rafa',
   altura:  1.60,
   cantidadLibros: 10
 }
var Alejandro =  {
   nombre: 'Alejandro',
   altura:  1.75,
   cantidadLibros: 30
 }
 var Sofia = {
   nombre: 'Sofia',
   altura:  1.89,
   cantidadLibros: 3
 }

var personas = [Alvaro, Daniel, Alexys,Rafa, Alejandro, Sofia];

var totalLibros =  personas.reduce((total,{cantidadLibros}) =>  total + cantidadLibros,0)

console.log(totalLibros);