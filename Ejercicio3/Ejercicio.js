"use strict";
/*Ejercicios - Fuera de Clase

• Crear proyecto NPM
• Subir proyecto a GitHub
• Implementar Registro Automotor visto
anteriormente, pero agregando soporte de
motos y camiones usando herencia
• Definir tarea NPM para compilar y correr los
archivos necesarios
• Enviar por Slack el link al repositorio de
GitHub */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = exports.Camion = exports.Moto = exports.Auto = exports.Vehiculo = void 0;
//Defino la clase vehiculo
class Vehiculo {
    //Cuando pase los atributos al crear una instancia (por ejemplo de un auto), el constructor va a inicializar las propiedades con dichos atributos
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    // Metodos get y set para acceder a los atributos
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getAño() {
        return this.año;
    }
    setAño(año) {
        this.año = año;
    }
}
exports.Vehiculo = Vehiculo;
// Defini las propiedades en vehiculo, y ahora solo las extiendo para las clases auto, moto, y camion
class Auto extends Vehiculo {
}
exports.Auto = Auto;
class Moto extends Vehiculo {
}
exports.Moto = Moto;
class Camion extends Vehiculo {
}
exports.Camion = Camion;
class RegistroAutomotor {
    constructor() {
        // Dentro de la clase RegistroAutomotor, voy a tener el atributo vehiculos (es un array de vehiculos)
        this.vehiculos = [];
    }
    // Metodo para agregar un vehiculo al registro
    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
    }
    // Metodo para obtener un vehiculo por indice
    getVehiculo(index) {
        return this.vehiculos[index];
    }
    // Metodo para modificar un vehiculo
    modificarVehiculo(index, nuevaMarca, nuevoModelo, nuevoAño) {
        const vehiculo = this.vehiculos[index];
        // Si encuentro un vehiculo con el indice que le paso; utilizo el metodo set para modificar los distintos atributos
        if (vehiculo) {
            vehiculo.setMarca(nuevaMarca);
            vehiculo.setModelo(nuevoModelo);
            vehiculo.setAño(nuevoAño);
        }
        else {
            console.log("No encontre un vehiculo en el indice indicado.");
        }
    }
    // Metodo para dar de baja un vehículo
    darDeBaja(index) {
        if (this.vehiculos[index]) {
            this.vehiculos.splice(index, 1);
        }
    }
    // Metodo para listar todos los vehículos (esto no lo pedia, pero lo voy a usar para ir viendo como quedan)
    listarVehiculos() {
        this.vehiculos.forEach((vehiculo, index) => {
            console.log(`Vehículo ${index + 1}: ${vehiculo.getMarca()} ${vehiculo.getModelo()} (${vehiculo.getAño()})`);
        });
    }
}
exports.RegistroAutomotor = RegistroAutomotor;
