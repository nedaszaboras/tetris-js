var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var blockTile = new Image();
var mapTile = new Image();
blockTile.src = 'tile.png';
mapTile.src = 'tile2.png';
let block = new blockObjects();
let map = new mapObjects();

var lastFrameTime = 0;
var maxFPS = 3;
var randomBlock = block.selectBlock();
var maxY = map.rows;
var velocity = 1;
var posY = 0 - (block.rows - block.getBlockRows(randomBlock));
var posX = 0;
var flag = false;

function getRandomX() {
  return Math.floor(Math.random() * 9);
}

function death() {
  velocity = 0;
  window.alert("Game Over");
}

function gameLoop(timestamp) {

  if (timestamp < lastFrameTime + (1000 / maxFPS)) {
    requestAnimationFrame(gameLoop);
    return;
  }
  lastFrameTime = timestamp;
  update();
  map.drawMap();
  block.drawBlock(randomBlock, posX, posY);
  window.requestAnimationFrame(gameLoop);

}

function update() {

  map.updateRow();
  map.keybinds();

  if (block.collision(posX, -1)) {
    death();
  }
  if (posY + block.rows < maxY) {
    if (block.collision(posX, posY) == false) {
      posY += velocity;
    }
    else {
      block.reset();
    }
  }
  else {
    block.reset();
  }
}

requestAnimationFrame(gameLoop);