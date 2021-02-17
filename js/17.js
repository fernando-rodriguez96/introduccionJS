//Metodos para los arreglos

const numeros = [1,2,3,4,5,6,7,8,9,10];
console.table(numeros);

//Con el constructor
const meses = new Array['enero','febrero','marzo','abril'];
console.table(meses);

//Listar
numeros.forEach( numero => {
    console.log(numero);
})

//Agregar elementos al arreglo
//Si pones una posicion que existe modifica el valor
numeros[5] = 60;
numeros[6] = 70;

//Push agrega al final del arreglo (push poco a poco ya no se va utilizando)
numeros.push(80,90,100);

//unshitf agrega al inicio
numeros.unshift(-1,-2,-3,-4);

meses.pop(); //POP elimina el ultimo elemento del arreglo

meses.shift(); //SHIFT elimina el primer

meses.splice(2,1); /*SPLICE toma dos valores, el primer que valor a eliminar
de acuerdo a su indice y el segundo que cantidad de elementos deseamos eliminar*/

/*Para no modificar los arreglos es mejor crear un nuevo arreglo, podemos hacer uso
de Rest Operator Spread Operator*/

//Es equivalente al push
const nuevoArreglo = [...meses, 'mayo']; //Agrega el valor al final
const nuevoArreglo2 = ['diciembre',...meses]; //Agrega el valor al inicio