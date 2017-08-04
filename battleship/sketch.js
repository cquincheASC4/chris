//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $("img").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
    });
}


var xcors; 
var ycors;
var rows = [0, 1, 2, 3, 4];
var randomNum = Math.floor(Math.random() * 4);
var counter = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    xcors = [[0, windowWidth/4],[windowWidth/4, windowWidth/2], [windowWidth/2, windowWidth*3/4], [windowWidth*3/4, windowWidth]];
    ycors = [[0, windowHeight/4],[windowHeight/4, windowHeight/2], [windowHeight/2, windowHeight*3/4], [windowHeight*3/4, windowHeight]];
    background('white');
    fill('white');
    for (var i = 0; i < 4; i++) {
        for(var x = 0; x < 4; x++) {
            rect(windowWidth*i/4, windowHeight*x/4, windowWidth/4, windowHeight/4);
        }
    }

}

function mousePressed() {
    console.log(mouseX + "," + mouseY);
}
function mouseClicked() {
    if(mouseX > xcors[randomNum][0] && mouseX < xcors[randomNum][1] && mouseY > ycors[randomNum][0] && mouseY < ycors[randomNum][1]) {
        fill('green');
        rect(xcors[randomNum][0], ycors[randomNum][0], windowWidth/4, windowHeight/4);
            alert("Great job. Only took you " + (counter + 1) + " tries. Refresh page to reset board!");
        
   // } else {
    //     rect
    // }
        } else {
            for(var x = 0; x < 4; x++) {
                for(var y = 0; y < 4; y++) {
                    fill('red');
                    if(mouseX > xcors[x][0] && mouseX < xcors[x][1] && mouseY > ycors[y][0] && mouseY < ycors[y][1]) {
                        rect(xcors[x][0], ycors[y][0], windowWidth/4, windowHeight/4);
                        counter = counter + 1;
                    }
                }
                
          }
        }
}