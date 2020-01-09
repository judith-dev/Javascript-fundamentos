const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
const VELOCIDAD = 0.5;
const ULTIMO_NIVEL = 1;

class Juego {

    constructor(){
        this.inicializar();
        this.generarSecuencia();
        this.siguienteNivel();
    }

    inicializar = () => {
        this.toggleBtnEmpezar();
        this.nivel =  1;
        this.siguienteNivel =  this.siguienteNivel.bind(this);
        this.elegirColor = this.elegirColor.bind(this);
        this.colores = {celeste,violeta, naranja,verde}
    }
    toggleBtnEmpezar = () => {
        
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide');
        } else {
            btnEmpezar.classList.add('hide');
        }
    }
    generarSecuencia = () => this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(() => Math.floor(Math.random() * 4));
    siguienteNivel = () =>  {
        this.subnivel = 0;
        this.iluminarSecuencia();
        this.agregarEventoClick();
    }
    transformarnumeroAcolor = (numero) => {

        switch(numero){
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3:
                return 'verde';
        }
    }
    transformarcolorAnumero = (color) => {

        switch(color){
            case 'celeste':
                return 0;
            case  'violeta':
                return 1;
            case 'naranja':
                return 2;
            case 'verde':
                return 3;
        }
    }
    iluminarSecuencia = () => {
        for (let i = 0; i < this.nivel; i++){
           const color =  this.transformarnumeroAcolor(this.secuencia[i]);
           console.log(color)
           setTimeout(()=> this.iluminarColor(color), 1500 * i * VELOCIDAD);
        }
    }
    iluminarColor = (color) => {
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color), 800 * VELOCIDAD);
    }
    apagarColor = (color) => {
        this.colores[color].classList.remove('light');
    }
    agregarEventoClick = () => {
        this.colores.celeste.addEventListener('click', this.elegirColor);
        this.colores.violeta.addEventListener('click', this.elegirColor);
        this.colores.naranja.addEventListener('click', this.elegirColor);
        this.colores.verde.addEventListener('click', this.elegirColorr);
    }
    eliminarEventoClick = () => {
        this.colores.celeste.removeEventListener('click', this.elegirColor);
        this.colores.violeta.removeEventListener('click', this.elegirColor);
        this.colores.naranja.removeEventListener('click', this.elegirColor);
        this.colores.verde.removeEventListener('click', this.elegirColorr);
    }
    elegirColor = (ev) => {
        const nombreColor = ev.target.dataset.color;
        const numeroColor =  this.transformarcolorAnumero(nombreColor);
        this.iluminarColor(nombreColor);
        if(numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++;
            if(this.subnivel === this.nivel){

               this.nivel++;
               this.eliminarEventoClick();

              if(this.nivel === (ULTIMO_NIVEL +  1)){
                this.ganoElJuego();
              } else {
                setTimeout(this.siguienteNivel, 2000)
                //Swal.fire(`next level`);
              }
            }
        } else{
            this.perdioElJuego();
        }
    }
    ganoElJuego = () => { 

        swal('Platzi', 'Felicitaciones, ganaste el juego!', 'success')
        .then(this.inicializar());
    }
    perdioElJuego = () => {

         swal('Platzi', 'ups, perdiste el juego! :(', 'error')
         .then(() => {
            this.eliminarEventoClick();
            this.inicializar();
        });
    }
}

function empezarJuego(){
    window.juego = new Juego();
} 


