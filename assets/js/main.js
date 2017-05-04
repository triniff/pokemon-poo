function Pokemon(nombre,color,poderDeAtaque,tipo){
	this.nombre = nombre
	this.color = color
	this.tipo = tipo

	this.nivelDeAmistad = 0

	this.vida = 100
	this.poderDeAtaque = poderDeAtaque

	this.mostrarPokemon = function (){
		return ("Hola, soy: " + this.nombre + " y soy de color: " + this.color + "<br>" +  "Tipo: " + this.tipo)
	}
	this.aumentarAmistad = function (valor){
		this.nivelDeAmistad += valor;
		return this.nivelDeAmistad;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
		return pokemon.vida;
	}
}

const Pikachu = new Pokemon("Pikachu", "Amarillo", 50, "Eléctrico");
const Charmander = new Pokemon("Charmander", "Rojo", 20, "Fuego");


datosPikachu.innerHTML = Pikachu.mostrarPokemon() + "<br>" + "Nivel de amistad: " + Pikachu.aumentarAmistad(50);
datosCharmander.innerHTML = Charmander.mostrarPokemon() + "<br>" + "Nivel de amistad: " + Charmander.aumentarAmistad(20);
Pikachu.atacar(Charmander);
ataque.innerHTML = "Pikachu a atacado a Charmander" + "<br>" + "la vida de Charmander es " + Charmander.vida 