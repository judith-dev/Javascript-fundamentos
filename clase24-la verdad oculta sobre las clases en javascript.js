function heredaDe(prototipoHijo,prototipoPadre) {

  const fn = function () { }
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype =  new fn;
  prototipoHijo.prototype.constructor = prototipoHijo;
  
}
function persona(nombre, apellido, altura) {

  this.nombre = nombre;
  this.apellido = apellido;
  this.altura =  altura;

  const ALTO =  1.8

  persona.prototype.saludar = () => console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);

  persona.prototype.soyalto = () => console.log(this.altura >= ALTO ? 'Soy Alta' : 'Soy Chaparra');

}


heredaDe(Desarrollador,persona);


function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;

  Desarrollador.prototype.saludar = () => console.log(`Hola, me llamo ${this.nombre} ${this.apellido}  y soy programador`)
  
  
}



