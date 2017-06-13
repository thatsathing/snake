var arr = [];
var dir = 0;
var snakeLength = 0;
var currentSnakeHead;

function setup() {
  createCanvas(400,400);
  noStroke();
  for (var x = 0; x < 20; x++) {
    arr[x] = [];
  }
  for (var x = 0; x < 20; x++) {
    for (var y = 0; y < 20; y++) {
      arr[x][y] = new Cell(x,y);
    }
  }
  arr[floor(noise(0)*height/20)][floor(noise(1)*height/20)].snakeHead = true;
}

function draw() {
  for (var x = 0; x < 20; x++) {
    for (var y = 0; y < 20; y++) {
      arr[x][y].show();
    }
  }
  update();
}

function update() {
  if (dir == 0) {

  }
  if (dir == 1) {

  }
  if (dir == 2) {

  }
  if (dir == 3) {

  }
}

function keyPressed() {
  switch(keyCode) {
    case UP_ARROW:
    dir = 0;
    break;
    case DOWN_ARROW:
    dir = 2;
    break;
    case LEFT_ARROW:
    dir = 3;
    break;
    case RIGHT_ARROW:
    dir = 1;
    break;
  }
}
