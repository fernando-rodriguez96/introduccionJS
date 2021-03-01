//PRACTICANDO promises

const precios = new Promise( function(resolve, reject){
    const precio = true;

    if(precio){
        resolve('El precio es justo');
    } else {
        reject('El precio no es justo');
    }
})

precios
.then( (resultado) => console.log(resultado))
.catch((error) => console.log(error))