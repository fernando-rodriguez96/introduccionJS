//Mas metodos para los arreglos

const meses = ['enero','febrero','marzo','abril'];

//No existen los arreglos asociativos en JS, pero si podemos tener un arreglo de objetos
const carrito = [
    {nombre: 'Manitor 20 Pulgadas', precio: 200},
    {nombre: 'Television', precio: 500},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Audifonos', precio: 700},
    {nombre: 'Microfono', precio: 900}
];

//ForEach
meses.forEach(function(mes){
    if (mes == 'junio'){
        console.log('No existe');
    } else {
        console.log('No existe');
    }
})

//Includes
let resultado = meses.includes('junio'); //Verifica si existe
console.log(resultado);

//Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular pro';
})

//Reduce
resultado = carrito.reduce(function(total,producto){
    return total + producto.precio;
},0); //El 0 es el valor inicial

console.log(resultado);