//Practica de lo aprendido
//Variables
//const = no deja reasignar valores en la variable
//let = permite asignar valores a la variable
//var = es lo mismo que let (solo que esta ya casi no se usa)

//String
const producto = 'Monitor de 20 Pulgadas';

//cadena mediante el constructor
const apellido = new String('rodriguez');
console.log(apellido);

//indexof
console.log(producto.indexOf('Pulgadas'));
//includes
console.log(producto.includes('computadora'));

console.log(producto);
console.log('Hola mundo');

//Concatenacion
const nombre = 'fernando';
const correo = 'fernando@correo.com';

console.log(`El nombre del usuario es ${nombre} y su correo es ${correo}`);

//Numeros
const numero1 = 200;
const numero2 = 100;
const numero3 = 400;
const numero4 = 600;

console.log(numero1 + numero2);
console.log(numero3 * numero4);

//Objeto Math
let resultado;

resultado = Math.abs(-23);//Convertir a positivos
resultado = Math.max(1,2,58,98,4,65,34);//Identifica cual es el valor mas alto
resultado = Math.min(76,65,43,23,3,2,1);//Identifica el valor mas bajo
resultado = Math.sqrt(25);//Raiz cuadrada
resultado = Math.round(2.4); //Redondea despues del 0.5 pasa al siguiente numero
resultado = Math.random();//Genera un numero aleatorio
resultado = Math.ceil(2.2);//Redondea hacia arriba
resultado = Math.floor(2.2);//Redondea hacia abajo
resultado = Math.floor(Math.random()*30);//Un numero aleatoreo entero

console.log(resultado);

//Incremento
let puntos = 10;

puntos++;

 //console.log(++puntos); Otra forma para poder realizar el incremento es asignar directamente el incremento
 console.log(puntos);

 //Decremento
 let punto = 10;
 punto--;

 //console.log(--punto); Otra forma para poder realizar el decremento es asignar directamente el decremento
 console.log(punto);

 //Objetos
 const productos = {
     nombre_producto: 'Monitor',
     precio: 300,
     disponibilidad: true
 }

 console.log(productos);

 //como acceder a los elementoa de un objeto
 console.log(productos.precio); //Mendiante el metodo punto
 console.log(productos['nombre_producto']); //Mediante el nombre del elemento

 //como asignar nuevas propiedades a los objetos
productos.imagen = 'foto.png';

//eliminar propiedades
delete productos.imagen;

//Aplicado destructuring a los objetos
const {precio} = productos;
const {nombre_producto} = productos;

//Metodos de objetos
Object.freeze(productos); //No permite modificar ni agregar nuevas propiedades al objeto
console.log(productos);

Object.seal(productos);//Permite modificar el objeto pero no permite agregar nuevas propiedades
console.log(productos);

console.log(Object.isFrozen(productos));//Permite saber si un objeto esta congelado

//Spread Operator
//Ya que una norma es no modificar las propiedades de los objetos lo recomendable es crear otro con los ya existentes
const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevo_arreglo = {...productos, ...medidas};
console.log(nuevo_arreglo);

//Arreglos
const numeros = [1,2,3,4,5,6,7];

console.table(numeros);

const meses = ['enero','febrero','marzo','abril'];

console.table(meses);

//Como acceder a los elementos de un arreglo
console.log(numeros[1]);

//Como iterar un arreglo con forEach
numeros.forEach(num =>{
    console.log(num);
})

meses.forEach(mes => {
    console.log(mes);
})

//Como agregar elementos al arreglo
numeros[7] = 8;
console.log(numeros);

numeros.push(9);//Agrega al final del arreglo
console.log(numeros);

numeros.unshift(-5,-4,-3,-2,-1,0);
console.log(numeros);

numeros.shift();//Elimina el primer elemento
console.log();

numeros.pop();//Elimina el ultimo elemento
console.log(numeros);

//NO EXISTEN LOS ARREGLOS ASOCIATIVOS, PERO SI LOS ARREGLOS DE OBJETOS
const compras = [
    {nomb: 'Celular', pre:200},
    {nomb: 'Televisor', pre: 300},
    {nomb: 'Tablet', pre: 400},
    {nomb: 'cargador', pre: 500}
];

console.log(compras);

//Comprobar si existe un elemento con include
let respuesta = meses.includes('abril');
console.log(respuesta);