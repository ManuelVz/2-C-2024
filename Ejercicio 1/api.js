/*Consumir una API publica que les guste y
consumirla con el método fetch.
Luego, una vez obtenidos los datos, vamos a
mostrarlos en el navegador (pueden darle formato
de card)*/

        // Lista de Pokémon para mostrar
        const pokemonList = ['lotad', 'eevee', 'charmander', 'pikachu', 'squirtle'];

        // Lo defini como funcion para poder pasarla algunos pokemones de los que tengo en la lista
        function mostrarPokemon(pokemon) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                .then(resp => resp.json())
                .then(data => {
                    const contenedor = document.getElementById('contenedor'); //Referencia al contenedor que tengo en el HTML
                    const { name, weight, height, sprites } = data; //De todos los datos que me traje, me quedo con el nombre, peso, altura, una imagen, y el sonido

                    // Crea la tarjeta para mostrar en el HTML
                    const tarjeta = `
                        <div class="tarjeta">
                            <h3>Nombre: ${name}</h3>
                            <img src="${sprites.front_default}" alt="${name}">
                            <p>Peso: ${weight / 10} kg</p>
                            <p>Altura: ${height / 10} m</p> 
                        </div>
                    `;
                    
                    //Dividi el peso (hectogramos) y la altura (decimetros), para pasarlo a kg y metros respectivamente.

                    contenedor.innerHTML += tarjeta;
                })
                .catch(err => console.log(err));
        }

        // Itera sobre la lista de pokemones, y se los paso a la funcion
        pokemonList.forEach(pokemon => mostrarPokemon(pokemon));

