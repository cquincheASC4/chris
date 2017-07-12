var choices = ["rock", "scissors", "paper"];

/* Choices */
var randomChoice = Math.floor(Math.random() * 3);

var p1Choice = choices[1]; //Scissors
var p2Choice = choices[randomChoice]; //Paper

if (p1Choice == p2Choice) {
    console.log("It's a tie");
} else if (p1Choice === "scissors") {
    if(p2Choice === "rock") {
        console.log("Player one loses");
        console.log("Rock beats scissors");
    } else {
        console.log("Player one wins");
        console.log("Scissors beats papers");
    }
} else if (p1CHoice === "rock") {
    if (p2Choice === "scissors") {
        console.log("Player one wins");
        console.log("Player two loses");
    } else {
        console.log ("Player one loses");
        console.log("Player two wins");
    }
} else if (p1Choice === "paper") {
    if (p2Choice === "scissors") {
        console.log("Player one loses");
        console.log("Player two wins");
    } else {
        console.log("Player two wins");
        console.log("Player two loses")
    }
}