function Cell(x,y) {
  this.x = x;
  this.y = y;
  this.snake = 0;
  this.snakeHead = false;
}

Cell.prototype.show = function() {
  if (this.snake||this.snakeHead) {
    fill(255);
    rect(this.x*20,this.y*20,20,20);
  }
  if (this.snake == false && this.snakeHead == false) {
    fill(0);
    rect(this.x*20,this.y*20,20,20);
  }
}
