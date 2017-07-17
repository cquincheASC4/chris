function setup() {
    createCanvas(1000, 1000);
    background(random(255), random(255), random(255));
    //noCursor();
    //ellipse(mouseX, mouseY, 10, 10);

}

 
// function draw() {
//     var shape = random(0,3);
//     if (mouseIsPressed) {
//         if(random == 0) {
//             ellipse(mouseX, mouseY, 50, 50);
//             var shape = random(0,3)
//         } else if(random == 1) {
//             rect(mouseX, mouseY, 50, 50);
//             var shape = random(0,3);
//         } else {
//             triangle(mouseX, mouseY - 10, mouseX - 10, mouseY + 10, mouseX + 10, mouseY + 10  );
//             var shape = random(0,3);
//         }
        
//     }
// }  

function drawCircle() {
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 50, 50);
}

function drawRectangle() {
    fill(random(255), random(255), random(255));
    rect(mouseX - 25, mouseY - 25, 50, 50);
}

function drawTriangle() {
    fill(random(255), random(255), random(255));
    triangle(mouseX, mouseY - 25, mouseX - 25, mouseY + 25, mouseX + 25, mouseY + 25 );
}

var shapes = [drawCircle(), drawRectangle(), drawTriangle()];

function mouseDragged() {
    var random = Math.floor(Math.random() * 3);
    if(random == 0) {
        drawCircle();
    }
    else if(random == 1) {
        drawRectangle();
    }
    else {
        drawTriangle();
    }
}

// function mouseDragged() {
//     fill(0, 255, 0);
//     var circle = ellipse(mouseX, mouseY, 50, 50);
//     fill(0, 255, 255);
//     var rectangle = rect(mouseX - 25, mouseY - 25, 50, 50);
//     fill(0, 0, 255);
//     var triangle = triangle(mouseX, mouseY - 10, mouseX - 10, mouseY + 10, mouseX + 10, mouseY + 10  );
//     var shapes = [circle, rectangle, triangle];
//     var shape = Math.floor(Math.random() * 3);
//     shapes[shape];
    // if(random == 0) {
    //         ellipse(mouseX, mouseY, 50, 50);
    //         var shape = random(0,3)
    //     } else if(random == 1) {
    //         rect(mouseX, mouseY, 50, 50);
    //         var shape = random(0,3);
    //     } else {
    //         triangle(mouseX, mouseY - 10, mouseX - 10, mouseY + 10, mouseX + 10, mouseY + 10  );
    //         var shape = random(0,3);
    //     }
    
// }