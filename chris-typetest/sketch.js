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
    text(intro, intro_x, intro_y)

    textSize(35);
    text(sample, 250,350)

    textSize(30)
    inp = createInput(' ', "text");
    inp.position(400, intro_y+140);
        inp.size(sample.length*20,90);
}
var x = 0
var words = sample[1]
function keyTyped() {
    
    if (keyCode == ENTER) {
        if(inp.value() === words) {
            alert("you win")
        }
  } 
}