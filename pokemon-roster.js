var pokemonRoster = [
    ["Arcanine", "Fire", 90, 80, 110, false],
    ["Alakazam", "Psychic", 55, 45, 50, false],
    ["Mewto", "Psychic", 106, 90, 110, true],
    ["Wailord", "Water", 170, 45, 90, false],
    ["Deoxys", "Psychic", 50, 50, 150, true],
    ["Garchomp", "Dragon and Ground", 108, 95, 130, false]
];

function specificPokemonStats() {
    for(var i = 0; i < pokemonRoster.length ; i++) {
        var line = "Name: " + pokemonRoster[i][0];
        line = line + " >Type: " + pokemonRoster[i][1];
        line = line + " >HP: " + pokemonRoster[i][2];
        line = line + " >Attack: " + pokemonRoster[i][3];
        line = line + " >Defense: " + pokemonRoster[i][4];
        line = line + " >Lengend: " + pokemonRoster[i][5];
        console.log(line);
    }
}
specificPokemonStats()