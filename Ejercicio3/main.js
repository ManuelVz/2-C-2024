"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importo las clases que defini en Ejercicio.ts
const Ejercicio_1 = require("./Ejercicio");
// Defino un vehiculo de cada tipo (solo para luego cargarlos con la funcion agregar), "llamando" a las clases
const auto1 = new Ejercicio_1.Auto("Toyota", "Corolla", 2020);
const moto1 = new Ejercicio_1.Moto("Honda", "CBR500R", 2021); //Esto ya estaba del ejercicio anterior, pero es parte de lo que pide para el entregable del 7/10.
const camion1 = new Ejercicio_1.Camion("Mercedes-Benz", "Actros", 2019);
// Defino un registro "llamando" a la clase RegistroAutomotor
const registro = new Ejercicio_1.RegistroAutomotor();
// Los vehiculos que refini antes, los agrego al registro que cree en la linea anterior utilizando el metodo agregarVehiculo (es un push)
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);
// Utilizo el metodo listarVehiculos para mostrar los vehiculos cargados; es un foreach con get para marca, modelo, y año
console.log("Lista de vehículos:");
registro.listarVehiculos();
// Para modificar vehiculo, utilizo el metodo modificarVehiculo; 
// le paso la posicion en la lista de vehiculos, y los nuevos valores (utilizo un set para marca, modelo y año).
registro.modificarVehiculo(0, "Ford", "Fiesta", 2022);
// Modifico la moto (cambio los atributos con set)
registro.modificarVehiculo(1, "Yamaha", "MT-03", 2022); //Esto lo agregue para el entregable del 7/10, solo que ahora, le pase una moto (el indice igual a 1, indica que se trata de una moto)
console.log("\nLista de vehículos después de la modificación:");
registro.listarVehiculos();
// Con una logica parecida a la de antes, le paso la posicion en la lista del vehiculo que quiero eliminar, y utilizo splice para eliminarlo.
registro.darDeBaja(1); //Elimino la moto que agregue antes.
console.log("\nLista de vehículos después de dar de baja:");
registro.listarVehiculos();
