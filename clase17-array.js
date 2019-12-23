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
   altura:  1.40
 }

 var personas = [Alvaro, Daniel, Alexys,Rafa, Alejandro, Sofia];

 for (let {nombre,altura} of personas){
    console.log(`${nombre} mide ${altura} mts`)
 }

//  for (var i = 0; i <= personas.length - 1; i++){
//     var  {nombre, altura} = personas[i];
//     console.log(`${nombre} mide ${altura} mts.`)
//  }