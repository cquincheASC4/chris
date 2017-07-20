var circle = {
    name: "CircleDude",
    hp: 70,
    attack: 16
};

var circle1 = {
    name: "CircleDude",
    hp: 70,
    attack: 16
};

var triangleMan = {
    name: "Triangleman",
    hp: 47,
    attack: 29
};

var triangleMan1 = {
    name: "Triangleman",
    hp: 47,
    attack: 29
};

var rectangle = {
    name: "Rectanglewoman",
    hp: 109,
    attack: 13
};

var rectangle1 = {
    name: "Rectanglewoman",
    hp: 109,
    attack: 13
};

var oval = {
    name: "oval",
    hp: 80,
    attack: 90
};

var oval1 = {
    name: "oval",
    hp: 80,
    attack: 90
};
var randomNum = Math.floor(Math.random() * 4);
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(204,255,255)
    textSize(55);
    text("CHOOSE YOUR POKEMON", windowWidth/4.6, windowHeight/4);
    textSize(30);
    fill('blue')
    text(circle.name, (windowWidth*1.4/8) - 65, (windowHeight/2) - 75);
    ellipse(windowWidth*1.4/8, windowHeight/2, 100);
    //triangle()
}

function mouseClicked() {
    if(mouseX > (windowWidth*1.4/8) - 100 && mouseX < (windowWidth*1.4/8) + 100 && mouseY > (windowHeight/2) - 100 && mouseY < (windowHeight/2) + 100) {
        clear();
        background(204,255,255)
        fill(173, 255, 47);
        ellipse(windowWidth/4, windowHeight*3/4, 375, 150);
        ellipse(windowWidth*3/4, windowHeight/2.5, 375, 150);
        fill(0, 0, 255);
        ellipse(windowWidth*2/8, windowHeight/1.5, 150)
        ellipse(windowWidth*6/8, windowHeight/3, 150)
        fill('blue');
        text(circle1.name,windowWidth*5.6/8, windowHeight/5.2);
        text(circle.name, windowWidth*1.6/8, windowHeight/1.9);
        fill('black')
        text("HP: " + circle.hp + "/ 70", windowWidth*1.6/8, windowHeight/1.8);
        text("HP: " + circle.hp + "/ 70", windowWidth*5.6/8, windowHeight/4.5);
        button = createButton('ATTACK');
        button.position(windowWidth*3/4, windowHeight*3/4);
        button.size(200, 100);
        button.mousePressed(attackthedude);
    }
}

function attackthedude() {
    if(randomNum == 3) {
        clear();
        background(204,255,255)
        fill(173, 255, 47);
        ellipse(windowWidth/4, windowHeight*3/4, 375, 150);
        ellipse(windowWidth*3/4, windowHeight/2.5, 375, 150);
        fill(0, 0, 255);
        ellipse(windowWidth*2/8, windowHeight/1.5, 150)
        ellipse(windowWidth*6/8, windowHeight/3, 150)
        fill('blue');
        text(circle1.name,windowWidth*5.6/8, windowHeight/5.2);
        text(circle.name, windowWidth*1.6/8, windowHeight/1.9);
        fill('black')
        text("HP: " + circle.hp + "/ 70", windowWidth*1.6/8, windowHeight/1.8);
        text("HP: " + circle.hp + "/ 70", windowWidth*5.6/8, windowHeight/4.5);
        text("You Missed!", windowWidth*2/4, windowHeight*3/4);
    } else {
        clear();
        background(204,255,255)
        circle1.hp = circle1.hp - circle.attack;
        // text("HP: " + circle.hp + "/ 70", windowWidth*1.6/8, windowHeight/1.8);
        // text("HP: " + circle1.hp + "/ 70", windowWidth*5.6/8, windowHeight/4.5);
        console.log(circle1.hp);
        fill(173, 255, 47);
        ellipse(windowWidth/4, windowHeight*3/4, 375, 150);
        ellipse(windowWidth*3/4, windowHeight/2.5, 375, 150);
        fill(0, 0, 255);
        ellipse(windowWidth*2/8, windowHeight/1.5, 150)
        ellipse(windowWidth*6/8, windowHeight/3, 150)
        fill('black')
        text(circle1.name,windowWidth*5.6/8, windowHeight/5.2);
        text(circle.name, windowWidth*1.6/8, windowHeight/1.9);
        // button = createButton('ATTACK');
        // button.position(windowWidth*3/4, windowHeight*3/4);
        // button.size(200, 100);
        // button.mousePressed(attackthedude);
        if(circle1.hp <= 0) {
            alert('You killed the dude. Great Job. Refresh to reset');
            circle1.hp = 0;
        }
        text("HP: " + circle.hp + "/ 70", windowWidth*1.6/8, windowHeight/1.8);
        text("HP: " + circle1.hp + "/ 70", windowWidth*5.6/8, windowHeight/4.5);
    }   
}