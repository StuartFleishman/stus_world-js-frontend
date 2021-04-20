class Racket {
  constructor(gWidth, gHeight) {
    this.width = 150; 
    this.height = 30;

    this.position = {
      x: gWidth / 2 - this.width /2,
      y: gHeight - this.height - 10,
    }
  }

  draw(context) {
    context.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update(deltaTime) {
    this.position.x += 5 / deltaTime
  }
}