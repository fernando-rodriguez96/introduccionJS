//Unir dos objetos con el Spread Operator

const producto = {
    nombre_producto: 'Monitor 20 Pulgadas',
    precio: 200,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

//Spread Operator
const nuevo_producto = {...producto, ...medidas};

console.log(producto);
console.log(nuevo_producto);