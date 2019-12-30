class Persona {

  
constructor(nombre, apellido, altura) {
 this.nombre = nombre;
 this.apellido = apellido;
 this.altura = altura;
}

saludar = (fn) => { 

    let { nombre, apellido} =  this;
    console.log(`Hola, me llamo ${nombre} ${apellido}  y soy programador@`);
    if(fn){
        fn(nombre, apellido,true );
    }
};

soyalto = () => { return this.altura > 1.8 }

}

class Desarrollador extends Persona {

constructor(nombre, apellido, altura) {
 super(nombre,apellido,altura)
}
 
saludar = () => console.log(`Hola, me llamo ${this.nombre} ${this.apellido}  y soy programador@`);
  
}

const responderSaludo = (nombre, apellido, esDev) => {
    console.log(`Buen dia  ${nombre} ${apellido}`);
    if(esDev){
        console.log(`Ah mira , no sabia que eras desarrollador/a`);
    }
}


let judith =  new Persona('judith','sanchez',1.54);
judith.saludar(responderSaludo);



