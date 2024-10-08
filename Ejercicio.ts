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

//Defino la clase vehiculo

export class Vehiculo {
    // Defino los atributos de la clase vehiculo
    private marca: string;
    private modelo: string;
    private año: number;

    //Cuando pase los atributos al crear una instancia (por ejemplo de un auto), el constructor va a inicializar las propiedades con dichos atributos
    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    // Metodos get y set para acceder a los atributos
    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getAño(): number {
        return this.año;
    }

    public setAño(año: number): void {
        this.año = año;
    }
}

// Defini las propiedades en vehiculo, y ahora solo las extiendo para las clases auto, moto, y camion
export class Auto extends Vehiculo {
  
}

export class Moto extends Vehiculo {

}

export class Camion extends Vehiculo {
}

export class RegistroAutomotor {
    // Dentro de la clase RegistroAutomotor, voy a tener el atributo vehiculos (es un array de vehiculos)
    private vehiculos: Vehiculo[] = [];

    // Metodo para agregar un vehiculo al registro
    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    // Metodo para obtener un vehiculo por indice
    public getVehiculo(index: number): Vehiculo | undefined {
        return this.vehiculos[index];
    }

    // Metodo para modificar un vehiculo
    public modificarVehiculo(index: number, nuevaMarca: string, nuevoModelo: string, nuevoAño: number): void {
        const vehiculo = this.vehiculos[index];
        
        // Si encuentro un vehiculo con el indice que le paso; utilizo el metodo set para modificar los distintos atributos
        if (vehiculo) {
            vehiculo.setMarca(nuevaMarca);
            vehiculo.setModelo(nuevoModelo);
            vehiculo.setAño(nuevoAño);
        } else {
            console.log("No encontre un vehiculo en el indice indicado.");
        }
    }

    // Metodo para dar de baja un vehículo
    public darDeBaja(index: number): void {
        if (this.vehiculos[index]) {
            this.vehiculos.splice(index, 1);
        }
    }

    // Metodo para listar todos los vehículos (esto no lo pedia, pero lo voy a usar para ir viendo como quedan)
    public listarVehiculos(): void {
        this.vehiculos.forEach((vehiculo, index) => {
            console.log(`Vehículo ${index + 1}: ${vehiculo.getMarca()} ${vehiculo.getModelo()} (${vehiculo.getAño()})`);
        });
    }
}

