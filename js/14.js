//Metodos de Objetos

"use strict";//Modo estricto

const producto = {
    nombre_producto: 'Monitor 20 Pulgadas',
    precio: 200,
    disponible: true
}

Object.freeze(producto); //No permite al objeto agregar nuevas propiedades o nodificaciones

Object.seal(producto); //No permite al objeto eliminar, agregar pero si modificar las propiedades existentes

producto.imagen = 'imagen.png';

console.log(Object.isFrozen(producto));//Permite saber si un objeto esta congetado

console.log(producto);