var s;
var scl = 20;

var food = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    s = new Snake();
    frameRate(10);

    food .push(new Food());
}

function draw() {
    background(51);
   

    for (var i = 0; i < food.length; i ++) {
        if (s.eat(food[i].pos)) {
            food[i].cambia();
            food.push(new Food());
        }
    }
    s.update();
    s.show();
    s.death(); 

    for (var i = 0; i < food.length; i ++) {
        fill(food[i].colorR, food[i].colorG, food[i].colorB);
        rect(food[i].pos.x, food[i].pos.y, scl, scl);
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW){
        if (s.antDir !== 'down') {
            s.antDir = 'up'
            s.dire(0, -1);
        }
    } else if (keyCode === DOWN_ARROW) {
        if (s.antDir !== 'up') {
            s.antDir = 'down'
            s.dire(0, 1);
        }
    } else if (keyCode === LEFT_ARROW) {
        if (s.antDir !== 'right') {
            s.antDir = 'left'
            s.dire(-1, 0);
        }
    } else if (keyCode === RIGHT_ARROW) {
        if (s.antDir !== 'left') {
            s.antDir = 'right'
            s.dire(1, 0);
        }
    }
}
