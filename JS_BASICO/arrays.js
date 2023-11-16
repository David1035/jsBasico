var frut = [
'limón', 'platano', 'manzana',
'fresa', 'sandía', 'kiwi'
];
console.log(frut.length);
//.length = sirve para ver la longitud. 
// para ver la información de un elemento 
console.log(frut[3]);
//mutar .push() empuja un elemento al final del array.
var masFrutas = frut.push('uvas');
//.pop elimina el último elemento
var ultimo = frut.pop('uvas');
//.unshift 'manda un elemento al inicio'
var nuevaL = frut.unshift('mango');
//.shift 'borrar el primer elemento'
var borrarfrutas = frut.shift('mango')
//.indexOf 'nos manda llamar la posición de un elemento'
var posicion = frut.indexOf('fresa')