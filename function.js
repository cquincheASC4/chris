function welloHorld() {
    return "Wello Horld!";
   //console.log("Wello Horld!");
}

console.log(welloHorld());

function coolNick(number) {
    // Want to use input as range
    var randomNumber = Math.random() * number;
    var result = Math.floor(randomNumber);
    return result;
}

console.log(coolNick(10));

// Declare an array of possible winners
var people = ["Chris", "Will", "Edgar", "Faisal", "Cool Nick"];

//This is the function to get random winner
function getRandomWinner(index) {
    // Returns a random number
    return Math.floor(Math.random() * index)
}

// Prints out a random name based to the function
console.log(people[getRandomWinner(people.length)]);