var x = 4 , y = '4'

var sacha  = {
    nombre : 'Sacha'
}

var  otraPersona = {
    nombre :  'Sacha'
}

if (sacha === otraPersona){
    console.log('objetos iguales primer ejemplo.')
} else {
    console.log('objetos diferentes primer ejemplo.')
}

otraPersona = {
    ...sacha
}

if (sacha === otraPersona){
    console.log('objetos iguales segundo ejemplo.')
}
else{
    console.log('objetos diferentes segundo ejemplo.')
}

otraPersona = sacha;

if (sacha === otraPersona){
    console.log('objetos iguales tercer ejemplo.')
}
else{
    console.log('objetos diferentes tercer ejemplo.')
}
