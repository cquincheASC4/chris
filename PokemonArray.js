 var myPokemonRoster = ["cynduiquil", "charmander", "torchic", "chimchar", "tepig"];
 if (myPokemonRoster.length < 5) {
     console.log("You Can’t Play! Not Enough Pokemon")
 } else {
    for (var i = 0; i < myPokemonRoster.length ; i++) {
     console.log(myPokemonRoster[i]);
    }
    for (var i = myPokemonRoster.length; i > -1 ; i--) {
     console.log(myPokemonRoster[i]);
    }
 }
 var firstToFight = myPokemonRoster[1];
 var secondToFight = myPokemonRoster[3];

 myPokemonRoster.pop();
 myPokemonRoster.push("squirtle", "piplup");
 var RosterSize = myPokemonRoster.length;
 
 console.log(myPokemonRoster)
