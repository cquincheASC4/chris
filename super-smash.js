var mashArray = ["Final Destination", "Battlefield", "Delfino Plaza", "Dream Land"];
var firstQuestion = [ 2, 3];
var secondQuestion = ["Kirby", "Marth"];
var thirdQuestion = ["yes", "no"];

var prompt = require('prompt-sync')();

function battleLog() {
    var location = prompt("Which stage will you choose? ")
    var strike = prompt("How many times will you strike? ");
    var opponent = prompt("Who will you choose to fight? ");
    var time = prompt("Do you want a time limit? ");

    firstQuestion = strike
    secondQuestion = opponent
    mashArray = location
    thirdQuestion = time
}
battleLog()

function output() {
    console.log("You responded " + thirdQuestion + " to a time limit. " + "You fought "  + secondQuestion + " in the " + mashArray + " and hit them " + firstQuestion + " times. Too bad Mewto wins!")
}
output()