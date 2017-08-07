var choices = ["rock", "scissors", "paper"];
var randomChoice = Math.floor(Math.random() * 3);


$('.rock').click(function() {
  p1Choice = choices[0];
    var p2Choice = choices[randomChoice];
if(p1Choice == "rock" && p2Choice == "scissors") {
    $('body').append("<p>Player one wins</p>");
}else if (p1Choice == "rock" && p2Choice == "paper") {
    $('body').append("<p>Player two wins</p>")
}else {
    $('body').append("<p>It's a tie!</p>");
}
})

$('.paper').click(function() {
     p1Choice = choices[2];
    var p2Choice = choices[randomChoice];
if (p1Choice == "paper" && p2Choice == "rock") {
    console.log(" Player one wins");
}else if(p1Choice == "paper" && p2Choice == "scissors") {
    console.log(" Player two wins");
}else{
    console.log( "It's a tie");
}
})
$('.scissors').click(function() {
     p1Choice = choices[1];
    var p2Choice = choices[randomChoice];
if (p1Choice == "scissors" && p2Choice == "paper") {
    console.log(" Player one wins");
}else if (p1Choice == "scissors" && p2Choice == "rock") {
    console.log(" Player two wins");
}else{
    console.log( "It's a tie");
}
})
