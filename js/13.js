//Destructuring de Objetos
const producto = {
    nombre_producto: 'MOnitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

const precioProducto = producto.precio;
const nombreProducto = producto.nombre_producto;

console.log(precioProducto);
console.log(nombreProducto);

//Aplicando Destructuring (sacar de una estructura)

const {nombre_producto} = producto;
const {precio} = producto;
const {disponible} = producto;

//Tambien se puede asi
const {precio, nombreProducto, disponible} = producto;

console.log(nombreProducto);

/*NOTA: para aplicar destructuring es necesario nombrar de la misma manera
        que lo escribimos en el objeto, es decir, precio en destructuring
        tambiien precio*/