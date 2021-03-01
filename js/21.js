//Clases en javascript
//clase #1
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    //Funcion
    FormatearProducto(){
        return `El dispositivo ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }

    //Funcion
    FormatearProducto2(){
        return `El dispositivo chino ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }

}

//Instanciar la clase producto
const producto2 = new Producto('Samsung s20', 24000);
const producto3 = new Producto('Xiaomi', 14000);
const producto4 = new Producto('Huawei', 26000);

console.log(producto2);
console.log(producto3);
console.log(producto4);


//Herencia en JavaScript
//Clase #2
class Libro extends Producto {

    //Para poder heredar el constructor
    constructor(nombre, precio, isbn){
    super(nombre, precio);
        this.isbn = isbn;
    }

    FormatearProducto(){
        //Evitar duplicar codigo
        return `${super.FormatearProducto()} y su ISBN es: ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la Revolucion', 120, '5435345v45gy6655');

console.log( libro.FormatearProducto() );