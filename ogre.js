var HP =0;
var gold = 0;
var ogresDefeated = 0;

function displayStats() {
    $('#stats').text('It works!');
}

function attack() {
    alert('You killed an ogre. You win at life!')
}

function setup() {
    $('body').append("<h1><center>Welcome to Ogre Game</center></h1>");
    $('body').append('<div><h3>Stats</h3><p id="stats"></p></h3>');
    $('body').append("<button onClick='attack()'>Attack</button>");
    $('body').append('<div id="ogre"></div>')
}

//Wait until Document is ready!!!
$(document).ready(setup);