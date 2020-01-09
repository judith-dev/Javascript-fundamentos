const DIA_NAC = 6, MES_NAC = 5, ANIO_NAC = 1993;
const HOY = new Date();
const NACIMIENTO = new Date(ANIO_NAC,MES_NAC,DIA_NAC);

function diasEntreFechas(fecha1, fecha2){
  const unDia= 1000 * 60 * 60 * 24;
  const diferencia = Math.abs(fecha1 - fecha2);
  return Math.floor(diferencia / unDia)
}

let dias  = diasEntreFechas(HOY, NACIMIENTO);

console.log(`${dias} dias recorridos.` )

 