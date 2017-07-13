
function randomNum(number){
  return Math.floor(Math.random()*number);
}
function randLetter(){
  var wholeAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
   return wholeAlphabet[randomNum(26)];
   return wholeAlphabet[randomNum(26)];
}
randLetter();

function randWord(){
  var tempWord = "";
  
 for (var i = 0; i < randomNum.length; i++){
    tempWord = tempWord + randLetter();
  }
  
 return tempWord;
}
randWord();

function randSentence(words){
    var sentence = ""
    
   for (var i = 0; i < words; i++){
        sentence =  sentence + randWord(words) + "  "
    }
    return sentence
}
console.log(randSentence(6)+ ".")

var firstPokemon = ["Piplup", 30, 100]
var secondPokemon = ["Bidoof", 10, 80]

function pokeAttack() {
    var damage = secondPokemon[2] - firstPokemon[1]
    console.log("Bidoof took damage and is left with " + damage + " HP!");
}
pokeAttack()
