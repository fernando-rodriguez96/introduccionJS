//Practica de las clases y herencia en JavaScript

//Creacion de la clase
class Carro {

    //Creacion del constructor
    constructor(marca, precio, modelo, color){
        this.marca = marca;
        this.precio = precio;
        this.modelo = modelo;
        this.color = color;
    }

    FormatearProducto(){
        return `La marca ${this.marca} saco con un precio de: $ ${this.precio} su nuevo modelo ${this.modelo} color ${this.color}`;
    }
}

const carro = new Carro('Toyota',1000000,'Prado','rojo');

console.log(carro.FormatearProducto());



//HERENCIA
class Modelos extends Carro {

    constructor (marca, precio, modelo, color, caracteristicas, disponibilidad){
        super(marca,precio,modelo,color);
        this.caracteristicas = caracteristicas;
        this.disponibilidad = disponibilidad;
    }

    FormatearProducto(){
        //Evitar repetir codigo
        return `${super.FormatearProducto()} con caracteristicas ${this.caracteristicas} y su disponibilidad ${this.disponibilidad}`;
    }
}

const modelos = new Modelos('Toyota',1000000,'Prado','gris','tres filas de asientos y nuevo sistema de tubo','rojo gris azul');

console.log(modelos.FormatearProducto());