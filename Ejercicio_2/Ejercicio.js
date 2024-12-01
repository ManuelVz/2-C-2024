"use strict";
//Defino la clase vehiculo
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = exports.Camion = exports.Moto = exports.Auto = exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    //Cuando pase los atributos al crear una instancia (por ejemplo de un auto), el constructor va a inicializar las propiedades con dichos atributos
    function Vehiculo(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    // Metodos get y set para acceder a los atributos
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.getAño = function () {
        return this.año;
    };
    Vehiculo.prototype.setAño = function (año) {
        this.año = año;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
// Defini las propiedades en vehiculo, y ahora solo las extiendo para las clases auto, moto, y camion
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Auto;
}(Vehiculo));
exports.Auto = Auto;
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Moto;
}(Vehiculo));
exports.Moto = Moto;
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Camion;
}(Vehiculo));
exports.Camion = Camion;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        // Dentro de la clase RegistroAutomotor, voy a tener el atributo vehiculos (es un array de vehiculos)
        this.vehiculos = [];
    }
    // Metodo para agregar un vehiculo al registro
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    // Metodo para obtener un vehiculo por indice
    RegistroAutomotor.prototype.getVehiculo = function (index) {
        return this.vehiculos[index];
    };
    // Metodo para modificar un vehiculo
    RegistroAutomotor.prototype.modificarVehiculo = function (index, nuevaMarca, nuevoModelo, nuevoAño) {
        var vehiculo = this.vehiculos[index];
        // Si encuentro un vehiculo con el indice que le paso; utilizo el metodo set para modificar los distintos atributos
        if (vehiculo) {
            vehiculo.setMarca(nuevaMarca);
            vehiculo.setModelo(nuevoModelo);
            vehiculo.setAño(nuevoAño);
        }
        else {
            console.log("No encontre un vehiculo en el indice indicado.");
        }
    };
    // Metodo para dar de baja un vehículo
    RegistroAutomotor.prototype.darDeBaja = function (index) {
        if (this.vehiculos[index]) {
            this.vehiculos.splice(index, 1);
        }
    };
    // Metodo para listar todos los vehículos (esto no lo pedia, pero lo voy a usar para ir viendo como quedan)
    RegistroAutomotor.prototype.listarVehiculos = function () {
        this.vehiculos.forEach(function (vehiculo, index) {
            console.log("Veh\u00EDculo ".concat(index + 1, ": ").concat(vehiculo.getMarca(), " ").concat(vehiculo.getModelo(), " (").concat(vehiculo.getAño(), ")"));
        });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
