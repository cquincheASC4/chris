var wholeAlphabet = "abcdefghijklmnopqrstuvwxyz";

function randLetter() {
    var index = Math.floor(Math.random() * wholeAlphabet.length);
    return wholeAlphabet[index];
}
console.log(randLetter());

function randWord() {
    var index = Math.floor(Math.random() * wholeAlphabet.length);
    var numberLetters = Math.floor(Math.random()) * wholeAlphabet.length);
    for(var i = 0; i < numberLetters; i++) {
        var wordLength = randLetter() + "";
    }
    return wordLength
}
console.log(randWord());

