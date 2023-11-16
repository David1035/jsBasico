var articulos = [
    {nombre: 'Bici', costo: 3000},
    {nombre: 'Tv', costo: 2300},
    {nombre: 'libro', costo: 3300},
    {nombre: 'celular', costo: 5000},
    {nombre: 'Laptop', costo: 2900},
    {nombre: 'teclado', costo: 300}
];

//.filter() es el método para filtrar información.

var articulosFiltrados = articulos.filter(function(articulo){
return articulo.costo <= 500
});
// básicamente, regrese el costo que sea inferior a 500 pesos.

//-------------------------------
//método 2 ()
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});