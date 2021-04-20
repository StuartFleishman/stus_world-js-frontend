

let canvas = document.getElementById('gameScreen')

let context = canvas.getContext('2d')

const gWidth = 800;
const gHeight = 600;

context.clearRect(0, 0, 800, 600)


let racket = new Racket(gWidth, gHeight)
racket.draw(context);

function gameLoop() {
  context.clearRect(0, 0, 800, 600)
  racket.update()
} 