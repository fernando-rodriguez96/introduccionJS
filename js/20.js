//Forma para poder cargar datos a un objeto
//OBJETO
//Object constructor
'use strict';
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

//Creacion de la instancia
const producto2 = new Producto('Celular j2', 1200);

//Creamos una funcion para formatear el texto
function FormatearProducto(producto){
    return 'El dispositvo ${producto.nombre} tiene un precio de: $ ${producto.precio}';
}

//Ejecutamos/imprimimos
console.log(FormatearProducto(producto2));



//NOTA: PROTOTYPES -> crear funciones que solo se utilizan en un objeto en especifico
//Prototypes
Producto.prototype.FormatearProducto = function(){
    return 'El dispositvo ${this.nombre} tiene un precio de: $ ${this.precio}';
}

//Como llamar a un prototype
console.log(producto2.FormatearProducto());