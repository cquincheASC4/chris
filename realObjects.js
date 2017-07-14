function Car(color, weight) {
    this.color = color;
    this.weight = weight;
}

var jeep = new Car("black", 1);

function Player(team, position, number) {
    this.team = team;
    this.position = postition;
    this.number = number;
    this.sayNumber = function() {
        console.log("My Number is " + this.number + ".")
    }
    
}

var jamesHarden = new Player("Rockets", "Point Guard", 13);

function Videogames(genre, releaseYear, numOfPlayers, system) {
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.numOfPlayers = numOfPlayers;
    this.system = system;
}

var pokemonRed = new Videogames(1998, 1, )

