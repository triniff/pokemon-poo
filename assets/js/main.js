function Pokemon(nombre,tipo,poderDeAtaque){
	this.dataStore = [];
	this.nombre = nombre
	this.tipo = tipo

	this.nivelDeAmistad = 0

	this.vida = 100
	this.poderDeAtaque = poderDeAtaque

	this.mostrarPokemon = function (){
		return ("Hola, soy: " + this.nombre +  "<br>" +  "Tipo: " + this.tipo)
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

function pelear(){
    var vs = document.getElementById("vs");
    var poke1 =document.getElementById("poke1").value;
    var poke2 =document.getElementById("poke2").value;
    var valorAt = prompt("Ingresa un poder de ataque");
    var atac1 = new Pokemon (poke1,"tipo",valorAt);
    var atac2 = new Pokemon(poke2,"tipo 2",5);

    atac1.atacar(atac2);

    vs.innerHTML = atac1.nombre +" atacó a " + atac2.nombre + " y " + atac2.nombre + " tiene una vida de: " + atac2.vida;


}

//* Version proximamente xD
/*
var pokemones = [];

function addPokemon(nombre,tipo,poderDeAtaque){
	var nuevo = new Pokemon;
	pokemones.push(nuevo);
}
addPokemon("Pikachu", "Eléctrico" , 50);
addPokemon("Charmander", "Fuego", 20);
addPokemon("Bulbasaur", "Agua", 40);
addPokemon("Psyduck", "Psiquico", 10)

function pelear(){
	var primero = poke1.value;
	var segundo = poke2.value;
	var pelea;
	for (var i = 1; i < pokemones.length+1; i++) {
		return primero = pokemones[i];
	}

}


Pikachu.atacar(Charmander);
vs.innerHTML = "Pikachu a atacado a Charmander" + "<br>" + "la vida de Charmander es " + Charmander.vida;

vs.innerHTML = Pikachu.mostrarPokemon() + "<br>" + "Nivel de amistad: " + Pikachu.aumentarAmistad(50);
datosCharmander.innerHTML = Charmander.mostrarPokemon() + "<br>" + "Nivel de amistad: " + Charmander.aumentarAmistad(20);
ataque.innerHTML = "Pikachu a atacado a Charmander" + "<br>" + "la vida de Charmander es " + Charmander.vida

*/