function persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura =  altura;
}

const ALTO =  1.8

persona.prototype.saludar= function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

persona.prototype.soyalto = function () {
  console.log(this.altura >= ALTO ? 'Soy Alta' : 'Soy Chaparra');
}

var judith  = new persona('judith', 'sanchez', 1.50);
judith.saludar();
judith.soyalto();

var erica  = new persona('erica', 'luna', 1.80);
erica.saludar();
erica.soyalto();

