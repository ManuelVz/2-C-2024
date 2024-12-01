"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtaqueEspecial = void 0;
class AtaqueEspecial {
    //Utilizo esta clase para el ataque especial (voy a evitar reemplazar el basico).
    constructor(nombreAtaque) {
        this.nombreAtaque = nombreAtaque;
    }
    ejecutarAtaque() {
        console.log(`El personaje usa el ataque especial: ${this.nombreAtaque}`);
    }
}
exports.AtaqueEspecial = AtaqueEspecial;
