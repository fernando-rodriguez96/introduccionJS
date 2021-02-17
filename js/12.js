//Modificar objetos

const producto = {
    nombre_producto: 'Monitor 20 Pulgadas',
    precio: 200,
    disponible: true
}

//Agregar nuevas propiedades
producto.imagen = 'imagen.png';

//Eliminar propiedades
delete producto.disponible;
console.log(producto);