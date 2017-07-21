var spacedude = {
    xcor: 650,
    ycor: 700
};

var alien = {
    xcor: 400,
    ycor: 300
};

var bullet = {
    xcor: spacedude.xcor - 6,
    ycor: spacedude.ycor - 40
};
var z = 0;
var n = 0;
var xIncrement = 3;
function setup() {
    createCanvas(windowWidth, windowHeight)
    background('black')
    fill('red')
    // triangle(spacedude.xcor-20, spacedude.ycor, spacedude.xcor + 20, spacedude.ycor, spacedude.xcor, spacedude.ycor-50 )
    // for(var i = 1; i < 21; i++) {
    //     ellipse((windowWidth/3.5) + n, (windowHeight/8) + z, 40)
    //     n = n + 130;
    //     if(i%5 == 0) {
    //         z = z + 80
    //         n = 0
    //     }
    // }
}
function mousePressed() {
     console.log(mouseX + "," + mouseY);
}
function draw() {
      
     if(keyIsDown(65)) {
          spacedude.xcor = spacedude.xcor - 10
          bullet.xcor = bullet.xcor - 10
          if (spacedude.xcor <= 190) {
              spacedude.xcor = 190
              bullet.xcor = 184
          }
      }
      if(keyIsDown(68)) {
          spacedude.xcor = spacedude.xcor + 10
          bullet.xcor = bullet.xcor + 10
          if(spacedude.xcor >= 1200) {
              spacedude.xcor = 1200
              bullet.xcor = 1194
          }
      }
    if(keyIsPressed == true) {
        if(keyCode = 'w') {
            bullet.ycor = bullet.ycor - 20
            if(bullet.ycor >= windowHeight) {
                bullet.ycor = spacedude.ycor
                bullet.xcor = spacedude.xcor
            }
        }    
   
   }  

   clear()
    background('black')
    fill('red')
    triangle(spacedude.xcor-20, spacedude.ycor, spacedude.xcor + 20, spacedude.ycor, spacedude.xcor, spacedude.ycor-50 )
    fill('blue')
    rect(bullet.xcor, bullet.ycor, 10, 20)
    fill('green')
    for(var i = 1; i < 6; i++) {
        ellipse(alien.xcor + n, alien.ycor - 200 , 40)
        ellipse(alien.xcor + n, alien.ycor - 140 , 40)
        ellipse(alien.xcor + n, alien.ycor - 80 , 40)
        ellipse(alien.xcor + n, alien.ycor - 20 , 40)
        n = n + 130;
        if(i%5 == 0) {
            n = 0
        }
    }

   
 
    alien.xcor = alien.xcor + xIncrement
    if(alien.xcor < 200 || alien.xcor > 650) {
        xIncrement = xIncrement*(-1)
        
   }
}