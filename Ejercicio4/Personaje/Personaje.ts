export class Personaje {

  //Defino los atributos basicos de mi personaje
  constructor(
    public nombre: string,
    public nivel: number = 1,
    public puntosDeVida: number = 100,
    public ataque: number = 10,
    public defensa: number = 5
  ) {}

  //Acciones de ataque y defensa
  atacar(): void {
    console.log(`${this.nombre} está atacando con un poder de ${this.ataque}.`);
  }

  defender(): void {
    console.log(`${this.nombre} se está defendiendo con una defensa de ${this.defensa}.`);
  }

  //Agregue la funcion para mostrar atributos como un metodo de la clase personaje (en el index.js, quedaba bastante mal)
  //Entonces ahora, puedo "invocarla" como un metodo.
  mostrarAtributos(): void {
    console.log(`--- Atributos de ${this.nombre} ---`);
    console.log(`Nivel: ${this.nivel}`);
    console.log(`Puntos de Vida: ${this.puntosDeVida}`);
    console.log(`Ataque: ${this.ataque}`);
    console.log(`Defensa: ${this.defensa}`);
    console.log('');
  }
}
