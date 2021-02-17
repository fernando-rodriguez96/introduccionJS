//Arreglos o arrays

const numeros = [1,2,3,4,5,6,7,8,9,10];

console.table(numeros);

//Con el constructor
const meses = new Array['enero','febrero','marzo','abril'];
console.table(meses);

//En los arreglos podemos agregar todo tipo de datos (incluso otros arreglos y objetos)
const arreglo = ['Hola',18,true,'si',null,{nombre:'fernando', trabajo:'desarrollador'},[1,2,3,4]];

console.log(arreglo);

//Acceder a los valores de un arreglo (mediante indice)

console.log(numeros[4]);
console.log(numeros[2]);

//Conocer la extension de un arreglo
console.log(meses.length);

//Listar
numeros.forEach( numero => {
    console.log(numero);
})

meses.forEach(mes => {
    console.log(mes);    
});