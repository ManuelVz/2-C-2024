import { Personaje } from '../Personaje/Personaje';
import { AtaqueEspecial } from './AtaqueEspecial';

export function agregarAtaqueEspecial(

  //Cuando encuentro la caja, obtengo tengo una habilidad especial; pero a diferencia de la evolucion; no modifica el basico.
  personaje: Personaje,
  ataque: AtaqueEspecial
): void {
  console.log(`${personaje.nombre} encontro una caja magica, y aprendio un ataque especial.`);
  ataque.ejecutarAtaque();
}
