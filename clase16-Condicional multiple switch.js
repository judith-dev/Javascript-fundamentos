var signo = prompt('Cuál es tu signo?').toUpperCase();

switch(signo){
   case 'ARIES':
      console.log('Empiece a dejar de lado su egoísmo sin sentido, así tendrá la posibilidad de escalar en todos los aspectos de su vida personal. Cambie de actitud.');
   break;
   case 'TAURO':
      console.log('Prepárese, ya que transitará unos días donde la incertidumbre lo paralizará. Elija alguna opción y en todo caso haga los cambios sobre la marcha.');
   break;
   case 'GÉMINIS':
   case 'GEMINIS':
      console.log('Momento óptimo para que fortalezca la autoestima y refuerce la posición. Procure valorar sus ideales frente a la gente que lo rodea y nadie podrá oponerse.');
   break;
   case 'CANCER':
   case 'CÁNCER':
      console.log('Durante esta jornada, aproveche su magnetismo y muéstrese sin reservas frente a los demás. Sepa que hoy será el centro de atención de todas las miradas.');
   break;
   case 'LEO':
      console.log('Prepárese, ya que será una época ideal para informarse, comunicar y descubrir todo lo necesario para no quedar aislado de su entorno social. Aproveche.');
   break;
   case 'VIRGO':
      console.log('Comprenda que deberá concentrase en muy pocas cosas durante esta jornada. Sepa que su mente necesita relajarse y evadir la confusión, tómese las cosas con calma.');
   break;
   case 'LIBRA':
      console.log('Recuerde que no todo puede solucionarse con un cerrar y abrir de ojos. Avance con un paso medido en todo momento y vera que logrará sus propósitos.');
   break;
   case 'ESCORPIO':
      console.log('Sepa que pronto saldrán a la luz algunos cuestionamientos que habían quedado sin respuesta y claridad en sus pensamientos. Resuélvalos y actúe rápido.');
   break;
   case 'SAGITARIO':
      console.log('Deje de tener miedo y arriesgue la decisión. Será una etapa ideal para determinar y pensar lo que es más conveniente para su vida en estos momentos.');
   break;
   case 'CAPRICORNIO':
      console.log('Evite angustiarse cuando se equivoca, sepa que siempre aprendemos y reflexionamos a partir de nuestros errores personales. Pronto encontrará la solución.');
   break;
   case 'ACUARIO':
      console.log('Evite convertirse en su propio enemigo, deseche lo negativo que lo persigue. Aprenda a observar los aspectos positivos de su vida y construya un futuro mejor.');
   break;
   case 'PISCIS':
      console.log('Lo más probable es que hoy transite un día muy difícil. Sepa que no debe involucrarse en discusiones inútiles y esperar a que pase la tormenta.');
   break;
   default:
    console.log('No es un signo zodiacal válido.');
       break;
}