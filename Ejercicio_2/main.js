"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importo las clases que defini en Ejercicio.ts
var Ejercicio_1 = require("./Ejercicio");
// Defino un vehiculo de cada tipo (solo para luego cargarlos con la funcion agregar), "llamando" a las clases
var auto1 = new Ejercicio_1.Auto("Toyota", "Corolla", 2020);
var moto1 = new Ejercicio_1.Moto("Honda", "CBR500R", 2021);
var camion1 = new Ejercicio_1.Camion("Mercedes-Benz", "Actros", 2019);
// Defino un registro "llamando" a la clase RegistroAutomotor
var registro = new Ejercicio_1.RegistroAutomotor();
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
console.log("\nLista de vehículos después de la modificación:");
registro.listarVehiculos();
// Con una logica parecida a la de antes, le paso la posicion en la lista del vehiculo que quiero eliminar, y utilizo splice para eliminarlo.
registro.darDeBaja(1);
console.log("\nLista de vehículos después de dar de baja:");
registro.listarVehiculos();
