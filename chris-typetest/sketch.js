var inp;
var sample = ["song", "food", "dog", "cat", "bird"]
var intro_x
var intro_y

    
function setup() {
    createCanvas(windowWidth, windowHeight);

    background('white');
    textSize(40);
    intro = "test your typing"
    intro_x = windowWidth/3
    intro_y = windowHeight/3
    
    textSize(30);
    inp = createInput('', "text");
    inp.position(400, intro_y+140);
    inp.size(sample.length*20,90);
}

var x = 0;
var points = 0;


function draw() {
    textSize(35);
    text(sample, 400, 50);
    text(intro, intro_x, intro_y);
    text("Points: " + points, 200, 50);
}

function keyTyped() {
    if (keyCode === ENTER) {
        console.log(inp.value());
        if(inp.value() === sample[x]) {
            background('white');
            points = points + 10;
            x++;
            textSize(25);
            
        }
        
  } 
}