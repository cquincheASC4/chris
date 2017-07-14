var charizard = {
    "HP": 266,
    "Level": 32
}

var blastoise = {
    "HP": 150,
    "Level": 55
}

function Pokemon(HP, Level) {
    this.HP = HP;
    this.Level = Level;
}

var bulbasaur = new Pokemon(30, 10);

console.log(bulbasaur.HP);
console.log(bulbasaur.Level);