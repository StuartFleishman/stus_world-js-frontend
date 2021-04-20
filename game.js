let canvas = document.getElementById('gameScreen')

let context = canvas.getContext('2d')

context.clearRect(0,0, 800, 600)

const gWidth = 800;
const gHeight = 600;

context.fillStyle = '#00f';
context.fillRect(20, 20, 100, 100);