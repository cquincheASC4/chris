var pokemonRoster = [
    {"name" : "Arcanine", "type" : "Fire", "hp" : 90 , "def" : 80 , "atk" : 110 , "legend" : false},
    {"name" : "Alakazam", "type" : "Psychic", "hp" : 55, "def" : 45, "atk" : 50, "legend" : false},
    {"name" : "Mewto", "type" : "Psychic",  "hp" : 106, "def" :90, "atk" : 110, "legend" : true},
    {"name" : "Wailord", "type" : "Water", "hp" : 170, "def" : 45, "atk" : 90, "legend" : false},
    {"name" : "Deoxys", "type" : "Psychic", "hp" : 50, "def" :  50, "atk" : 150, "legend" : true},
    {"name" : "Garchomp", "type" : "Dragon and Ground", "hp" : 108, "def" : 95, "atk" : 130, "legend" : false}
];

function printRoster(data) {
    // this.atk = atk;
    // this.def = def;
    // this.hp = hp;
    // this.legend = legend;
    // this.name = name;
    // this.type = type;
    for(var i = 0; i < data.length; i++) {
        for(var x = 0; x < data[0].length; x++) {
            console.log(data[i][x])
        }
    }
}

function pokemonAttacked() {
    for (i = 0; i < pokemonRoster.length; i++) {
        pokemonRoster[i].hp = pokemonRoster[i].hp - 10
        console.log(pokemonRoster[i])
    }    
}
//pokemonAttacked();

function askHP() {
    var prompt = require('prompt-sync')(); 
    var damage = prompt("How much do you want to hit them for? ");
    var chooseRandom = Math.floor(Math.random() * 6);
    pokemonRoster[chooseRandom].hp = pokemonRoster[chooseRandom].hp - damage;
    console.log(pokemonRoster[chooseRandom])
}
//askHP()

function newPokemon() {
    console.log();
    var prompt = require('prompt-sync')();
    var createP = pokemonAttacked(prompt("Pokemon Name?  "), prompt("Pokemon attack?  "), prompt("Pokemon HP?  "), prompt("Pokemon damage?   "), prompt("Pokemon is Legend?  "), prompt("Pokemon Type?  "));
    return createP;
}
newPokemon();