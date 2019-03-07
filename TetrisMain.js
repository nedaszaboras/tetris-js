var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var mapTile = new Image();
var blockTile = new Image();
mapTile.src = 'tile2.png';
blockTile.src = 'tile.png';

var lastFrameTime = 0;
var maxFPS = 3;
let block = new blockObjects();
var randomBlock;

var map = {
  cols: 10,
  rows: 20,
  tsize: 32,
  tiles: [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ],

  getTile: function (row, col) {
    return this.tiles[row * map.cols + col]
  },
  getTileNumber: function (row, col) {
    return row * map.cols + col;
  },
  setTile: function (tile, value) {
    this.tiles[tile] = value;
  }
};

var maxY = map.rows;
var velocity = 1;
var posY = 0;
var posX = 0;


function drawMap() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  for (var c = 0; c < map.cols; c++) {
    for (var r = 0; r < map.rows; r++) {
      var tile = map.getTile(r, c);


      if (tile == 1) {
        context.drawImage(
          mapTile,
          0,
          0,
          map.tsize,
          map.tsize,
          c * map.tsize,
          r * map.tsize,
          map.tsize,
          map.tsize
        );
      }
      /*if (tile == 2) {
        context.drawImage(blockTile,
          0,
          0,
          map.tsize,
          map.tsize,
          c * map.tsize,
          r * map.tsize,
          map.tsize,
          map.tsize);
      }*/
    }
  }
}

function drawBlock(tiles, posX, posY) {
  //context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  for (var c = 0; c < block.cols; c++) {
    for (var r = 0; r < block.rows; r++) {
      var tile = getBlockTile(c, r, tiles);
      if (tile == 2) {
        context.drawImage(
          blockTile,
          0,
          0,
          block.tsize,
          block.tsize,
          (c + posX) * block.tsize,
          (r + posY) * block.tsize,
          block.tsize,
          block.tsize
        );
      }
    }
  }
}

function selectBlock() {
  var blockNumber = Math.floor(Math.random() * 6);
  switch (blockNumber) {
    case 0:
      tilesArray = block.tilesI;
      break;
    case 1:
      tilesArray = block.tilesJ;
      break;
    case 2:
      tilesArray = block.tilesL;
      break;
    case 3:
      tilesArray = block.tilesO;
      break;
    case 4:
      tilesArray = block.tilesS;
      break;
    case 5:
      tilesArray = block.tilesT;
      break;
    case 6:
      tilesArray = block.tilesZ;
      break;
  }
  return tilesArray;
}

//randomBlock = selectBlock();
randomBlock = block.tilesO;

function findLastTile(tilesArray, maxY) {
  var lastTile;
  var maxY;
  for (var i = 0; i < tilesArray.length; i++) {

    if (tilesArray[i] > 1) lastTile = i;
  }
  if (lastTile / 4 >= 3) maxY = maxY - 4;
  else if (lastTile / 4 >= 2) maxY = maxY - 3;
  else if (lastTile / 4 >= 1) maxY = maxY - 2;
  else if (lastTile / 4 >= 0) maxY = maxY - 1;
  return maxY;
}

function getBlockRows(tilesArray) {
  for (var i = tilesArray.length - 1; i >= 0; i--) {
    if (tilesArray[i] > 1) lastTile = i;
  }

  if (lastTile < 4) usedRows = 4;
  else if (lastTile < 8) usedRows = 3;
  else if (lastTile < 12) usedRows = 2;
  else if (lastTile < 16) usedRows = 1;
  return usedRows;
}

function getBlockCols(tilesArray, blockRows) {
  for (var i = 0; i < blockRows; i++) {
  }
  return usedCols;
}

// newBlock is a filtered array of a block with unused rows cut. e.g. Block O will be left with 2 bottom rows;
function getNewBlock(tilesArray) {
  var newBlock = [];
  for (var i = block.rows - getBlockRows(tilesArray); i < block.rows; i++) {
    for (var j = 0; j < block.cols; j++) {
      newBlock.push(tilesArray[i * block.rows + j])
    }
  }
  return newBlock;
}

function putIntoMap(posY, posX, tilesArray) {

  var newBlock = [];
  var newBlockRows;
  var unusedRows;
  newBlock = getNewBlock(tilesArray);
  const posXconst = posX;
  newBlockRows = newBlock.length / block.rows;
  unusedRows = block.rows - newBlockRows;
  var newBlockIndex = 0;
  posY += unusedRows; // posY is a top corner of block array. Figures are at the bottom of the Array.
  // Thus you add unused row count, to adjust starting point to figure. e.g. Block O (2x2) had 2 unused rows. Thus you add them - and you get only the bottom 2 tiles where the figure lies.

  //cycle through newBlockRow count by posX and posX, adjusting them accordingly to draw it into the main map.
  for (var i = 0; i < newBlockRows; i++) {
    for (var j = 0; j < block.cols; j++) {
      if (posX >= (posXconst + 4)) posX = posXconst;
      if (newBlock[newBlockIndex] == 2) map.setTile(map.getTileNumber(posY, posX), newBlock[newBlockIndex]);
      posX++;
      newBlockIndex++;
    }
    posY++;
  }
  //return newBlock;
}

function gameLoop(timestamp) {

  if (timestamp < lastFrameTime + (1000 / maxFPS)) {
    requestAnimationFrame(gameLoop);
    return;
  }
  lastFrameTime = timestamp;

  update();
  drawMap();
  drawBlock(randomBlock, posX, posY);
  window.requestAnimationFrame(gameLoop);

}

var flag = true;
function update() {

  // -----------------------------------------------------------------//
  var newBlock = getNewBlock(randomBlock);
  var changedXPositions = [];
  var positionsPerRow = [];
  var tempIndex = 0;
  var totalPositions = 0;

  for (let i = (newBlock.length / block.rows) - 1; i >= 0; i--) {
    for (let j = 0; j < block.rows; j++) {
      if (newBlock[i * block.rows + j] == 2) changedXPositions.push(j);
      //console.log((i*4+j) +" : " +newBlock[i*4+j]);
    }

    if (i == (newBlock.length / block.rows) - 1) {
      positionsPerRow.push(changedXPositions.length);
      totalPositions += positionsPerRow[0];
    }
    else {
      totalPositions = 0;
      for (var k = 0; k < positionsPerRow.length; k++) {
        totalPositions += positionsPerRow[k];
      };
      positionsPerRow.push(changedXPositions.length - totalPositions);
    }
  }



  // -----------------------------------------------------------------//
  var pY;
  var pX = posX;
  let lastY = posY + block.rows + 1
  if (posY + block.rows < maxY) {
    if (flag == true) {
      for (var i = 0; i < positionsPerRow.length; i++) {
        for (var j = 1; j <= positionsPerRow[i]; j++) {
          console.log("tile number : " + map.getTileNumber(lastY - i, posX + changedXPositions[tempIndex]));

          //console.log("x nr " + j + " per row " + i + " : " + changedXPositions[tempIndex]);
          if (map.getTile(lastY - i, posX + changedXPositions[tempIndex]) == 2) {
            console.log("gotcha @" + map.getTileNumber(lastY - i, posX + changedXPositions[tempIndex]));
            flag = false;
          }
          tempIndex++;
        }
      }

      /*
      let firstY = posY + block.rows + 1 - getBlockRows(randomBlock);
      let lastY= posY + block.rows + 1
      console.log("firstY : " +firstY + " lastY : " + lastY);
      for (lastY; lastY >= firstY; lastY--){
      }*/

      /*for (var i = 0; i < block.cols; i++) {
        // console.log(" tile nr " + i + " : " + map.getTileNumber(posY + block.rows, pX))
        //to check bottom position of the block and 1 step in advance;
        if (map.getTile(posY + block.rows + 1, pX) == 2) {
          flag = false;
        }
        pX++;
      }*/
      posY += velocity;
    }
    else {
      //console.log(posX)
      putIntoMap(posY, posX, randomBlock);
      randomBlock = selectBlock();
      posY = 0;
      posX = Math.floor(Math.random() * 8);
      drawBlock(randomBlock, posX, posY);
      flag = true;
    }
  }
  /*if (posY + block.rows < maxY) {

    posY += velocity;
  }*/
  else {
    putIntoMap(posY, posX, randomBlock);
    randomBlock = selectBlock();
    posY = 0;
    posX = Math.floor(Math.random() * 9);
    drawBlock(randomBlock, posX, posY);
    flag == true;
  }

}

requestAnimationFrame(gameLoop);