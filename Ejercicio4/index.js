"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Para probar las funcionalidades basicas, voy a tomar de referencia el mago.
const Mago_1 = require("./Personaje/Mago");
const MagoEvo_1 = require("./Personaje/MagoEvo");
const AtaqueEspecial_1 = require("./habilidades/AtaqueEspecial");
const agregarAtaqueEspecial_1 = require("./habilidades/agregarAtaqueEspecial");
//Crear un personaje: MagoPrueba
const MagoPrueba = new Mago_1.Mago("MagoPrueba");
console.log('');
//Mostrar los atributos iniciales
MagoPrueba.mostrarAtributos();
//Hacer que el personaje ataque y se defienda
console.log("Acciones iniciales:");
MagoPrueba.atacar(); // "MagoPrueba está atacando."
MagoPrueba.defender(); // "MagoPrueba se está defendiendo."
console.log('');
//Evolucionar al personaje a MagoEvo
console.log("MagoPrueba evoluciona a MagoEvo:");
const MagoPruebaEvo = new MagoEvo_1.MagoEvo("MagoPrueba");
MagoPruebaEvo.mostrarAtributos();
//Usar el nuevo ataque
console.log("Usando el ataque evolucionado:");
MagoPruebaEvo.atacar();
console.log('');
//Agregar una habilidad especial (esto es para el punto extra)
const rayoArcano = new AtaqueEspecial_1.AtaqueEspecial("Rayo Arcano"); //El nombre de la habilidad, lo asigne aca, ya que solo tome de referencia el mago.
(0, agregarAtaqueEspecial_1.agregarAtaqueEspecial)(MagoPruebaEvo, rayoArcano);
