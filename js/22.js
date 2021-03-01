//Promises o promesas

const usuarioAutenticado = new Promise((resolve, reject) =>{

    const auth = true;

    if (auth){
        resolve('El usuario esta autenticado');
    } else {
        reject('El usuario no se encuentra autenticado');
    }
});

//Como acceder a los valores del promises
//Accedemos mediante .then

/*usuarioAutenticado
.then(function(){
    console.log('Desde el promises');
})*/

//o

usuarioAutenticado
.then(function(resultado){
    console.log(resultado)
})
.catch(function(error){//Para imprimir el rejected
    console.log(error);
});

//TAMBIEN como arrowfunction

usuarioAutenticado
.then ((resultadoo) => console.log(resultadoo))
.catch((erroor) => console.log(erroor))

/*Tambien se puede con console.log(usuarioAutenticado);, pero nos muestra informacion que
posiblemente no necesitemos*/

/*En los promises existen 3 posibilidades
1. Pendding: No se ha complido pero tampoco se ha rechazado
2. Fullfield: Ya se cumplio la Promises
3. rejected: no se cumple el promise
*/