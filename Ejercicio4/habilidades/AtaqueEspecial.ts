export class AtaqueEspecial {

  //Utilizo esta clase para el ataque especial (voy a evitar reemplazar el basico).
    constructor(public nombreAtaque: string) {}
  
    ejecutarAtaque(): void {
      console.log(`El personaje usa el ataque especial: ${this.nombreAtaque}`);
    }
  }