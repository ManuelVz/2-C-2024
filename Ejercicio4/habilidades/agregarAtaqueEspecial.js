"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarAtaqueEspecial = void 0;
function agregarAtaqueEspecial(
//Cuando encuentro la caja, obtengo tengo una habilidad especial; pero a diferencia de la evolucion; no modifica el basico.
personaje, ataque) {
    console.log(`${personaje.nombre} encontro una caja magica, y aprendio un ataque especial.`);
    ataque.ejecutarAtaque();
}
exports.agregarAtaqueEspecial = agregarAtaqueEspecial;
