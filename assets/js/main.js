function Pokemon(nombre,color,poderDeAtaque,tipo){
	this.dataStore = [];
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

var Pikachu = new Pokemon("Pikachu", "Amarillo", 50, "Eléctrico");
var Charmander = new Pokemon("Charmander", "Rojo", 20, "Fuego");
var Bulbasaur = new Pokemon("Bulbasaur", "Azul", 40, "Agua");
var Psyduck = new Pokemon("Psyduck", "Amarillo", 10, "Psiquico")

function pelear(){
	var pokemon1 = poke1.value;
	var pokemon2 = poke2.value;
	
	if(pokemon1 == pokemon2){
		alert("nu")
	}

	pokemon1.atacar(pokemon2);
	vs.innerHTML = "Pikachu a atacado a Charmander" + "<br>" + "la vida de Charmander es " + pokemon2.vida
}

/*
Pikachu.atacar(Charmander);
vs.innerHTML = "Pikachu a atacado a Charmander" + "<br>" + "la vida de Charmander es " + Charmander.vida;

vs.innerHTML = Pikachu.mostrarPokemon() + "<br>" + "Nivel de amistad: " + Pikachu.aumentarAmistad(50);
datosCharmander.innerHTML = Charmander.mostrarPokemon() + "<br>" + "Nivel de amistad: " + Charmander.aumentarAmistad(20);
ataque.innerHTML = "Pikachu a atacado a Charmander" + "<br>" + "la vida de Charmander es " + Charmander.vida


var ide1 = document.getElementsByClassName("pik");
var nombrePok1 = Pikachu.nombre;
var nodoText1 = document.createTextNode(nombrePok1);
ide1.appendChild(nodoText1);

var ide2 = document.getElementsByClassName("char");
var nombrePok2 = Charmander.nombre;
var nodoText2 = document.createTextNode(nombrePok2);
ide2.appendChild(nodoText2);

var ide3 = document.getElementsByClassName("bul");
var nombrePok3 = Bulbasaur.nombre;
var nodoText3 = document.createTextNode(nombrePok3);
ide3.appendChild(nodoText3);

var ide4 = document.getElementsByClassName("ps");
var nombrePok4 = Psyduck.nombre;
var nodoText4 = document.createTextNode(nombrePok4);
ide4.appendChild(nodoText4);
*/