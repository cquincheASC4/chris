var choices = ["rock", "scissors", "paper"];
var randomChoice = Math.floor(Math.random() * 3);

var p1Choice = choices[2];
var p2Choice = choices[randomChoice];

if (p1Choice == p2Choice) {
    console.log( "It's a tie");
}
if (p1Choice == "rock" && p2Choice == "paper") {
    console.log(" Player two wins");
}
if (p1Choice == "rock" && p2Choice == "scissors") {
    console.log(" Player one wins");
}
if (p1Choice == "scissors" && p2Choice == "paper") {
    console.log(" Player one wins");
}
if (p1Choice == "scissors" && p2Choice == "rock") {
    console.log(" Player two wins");
}
if (p1Choice == "paper" && p2Choice == "scissors") {
    console.log(" Player two wins");
}
if (p1Choice == "paper" && p2Choice == "rock") {
    console.log(" Player one wins");
}
