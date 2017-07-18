var x = 0;
var y = x;

//just called once and done
function setup() {
    createCanvas(windowWidth,windowHeight);
}
//Draw runs over and over again
function draw() {
    background('purple');
    fill(200,120,3)
    ellipse(x,0,200);
    x = x + 10;
    if (x > width) {
        x = 0;

    }
}