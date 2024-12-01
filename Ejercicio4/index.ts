// Para probar las funcionalidades basicas, voy a tomar de referencia el mago.
import { Mago } from './Personaje/Mago';
import { MagoEvo } from './Personaje/MagoEvo';
import { AtaqueEspecial } from './habilidades/AtaqueEspecial';
import { agregarAtaqueEspecial } from './habilidades/agregarAtaqueEspecial';


//Crear un personaje: MagoPrueba
const MagoPrueba = new Mago("MagoPrueba");
console.log('');

//Mostrar los atributos iniciales
MagoPrueba.mostrarAtributos();

//Hacer que el personaje ataque y se defienda
console.log("Acciones iniciales:");
MagoPrueba.atacar();   // "MagoPrueba está atacando."
MagoPrueba.defender(); // "MagoPrueba se está defendiendo."
console.log('');

//Evolucionar al personaje a MagoEvo
console.log("MagoPrueba evoluciona a MagoEvo:");
const MagoPruebaEvo = new MagoEvo("MagoPrueba");
MagoPruebaEvo.mostrarAtributos();

//Usar el nuevo ataque
console.log("Usando el ataque evolucionado:");
MagoPruebaEvo.atacar();  
console.log('');

//Agregar una habilidad especial (esto es para el punto extra)
const rayoArcano = new AtaqueEspecial("Rayo Arcano"); //El nombre de la habilidad, lo asigne aca, ya que solo tome de referencia el mago.
agregarAtaqueEspecial(MagoPruebaEvo, rayoArcano); 
