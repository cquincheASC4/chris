

var rps = ["rock", "paper", "scissors"];
var randomNum = Math.floor(Math.random()*3);
var randomChoice = rps[randomNum];
var userScore = 0;
function chooseChoice(value) {
        if(value == "Rock" && randomChoice == "paper") {
            $("#results").html('').append("<p> The computer chose " + randomChoice + ". You lose.</p>");
            userScore = userScore - 1;
            $("#score").html('').append(userScore);
        }
        else if(value == "Rock" && randomChoice == "rock") {
            $("#results").html('').append("<p> The computer chose " + randomChoice + ". It's a tie.</p>");
            userScore = userScore + 0;
            $("#score").html('').append(userScore);
        }
        else if(value == "Rock" && randomChoice == "scissors") {
            $("#results").html('').append("<p> The computer chose " + randomChoice + ". You win.</p>");
            userScore = userScore + 1;
            $("#score").html('').append(userScore);
        }
        else if(value == "Paper" && randomChoice == "paper") {
            $("#results").html('').append("<p> The computer chose " + randomChoice + ". It's a tie.</p>");
            userScore = userScore + 0;
            $("#score").html('').append(userScore);
        }
        else if(value == "Paper" && randomChoice == "scissors") {
            $("#results").html('').append("<p> The computer chose " + randomChoice + ". You lose.</p>");
            userScore = userScore - 1;
            $("#score").html('').append(userScore);
        }
        else if(value == "Paper" && randomChoice == "rock") {
            $("#results").html('').append("<p> The computer chose " + randomChoice + ". You win.</p>");
            userScore = userScore + 1;
            $("#score").html('').append(userScore);
        }
        else if(value == "Scissors" && randomChoice == "rock") {
            $("#results").html('').append("<p> The computer chose " + randomChoice + ". You lose.</p>");
            userScore = userScore - 1;
            $("#score").html('').append(userScore);
        }
        else if(value == "Scissors" && randomChoice == "paper") {
            $("#results").html('').append("<p> The computer chose " + randomChoice + ". You win.</p>");
            userScore = userScore + 1;
            $("#score").html('').append(userScore);
        }
        else {
            $("#results").html('').append("<p> The computer chose " + randomChoice + ". It's a tie.</p>");
            userScore = userScore + 0;
            $("#score").html('').append(userScore);
        }
    randomNum = Math.floor(Math.random()*3);
    randomChoice = rps[randomNum];
    

}


// //Set database object
var database = firebase.database().ref()

//button executes this function
function updateDB(){
    var name = $("#name").val();
    console.log(name);

    
    var saveScore = userScore;
    console.log(saveScore);

    var value = {
        "NAME" : name,
        "SCORE" : saveScore,
        
    }
    //Update database here
database.push(value);
}

database.on("child_added", function(rowData) {
    $("#leaderBoard").append("<div>Name: " + rowData.val().NAME  + " Score: " + rowData.val().SCORE + "</div>")
})
