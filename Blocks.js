var blockObjects = function () {

  this.cols = 4;
  this.rows = 4;
  this.tsize = 32;

  // block I
  this.tilesI = [
    1, 2, 1, 1,
    1, 2, 1, 1,
    1, 2, 1, 1,
    1, 2, 1, 1,
  ];
  this.tilesI90 = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 2, 2
  ];
  this.tilesI180 = [
    1, 1, 2, 1,
    1, 1, 2, 1,
    1, 1, 2, 1,
    1, 1, 2, 1,
  ];
  this.tilesI270 = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 2, 2
  ];

  // block J
  this.tilesJ = [
    1, 1, 1, 1,
    1, 2, 1, 1,
    1, 2, 1, 1,
    2, 2, 1, 1
  ];
  this.tilesJ90 = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 2, 1, 1,
    1, 2, 2, 2
  ];
  this.tilesJ180 = [
    1, 1, 1, 1,
    1, 2, 2, 1,
    1, 2, 1, 1,
    1, 2, 1, 1
  ];
  this.tilesJ270 = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 2, 1,
    1, 1, 2, 1
  ];

  // block L
  this.tilesL = [
    1, 1, 1, 1,
    1, 2, 1, 1,
    1, 2, 1, 1,
    1, 2, 2, 1,
  ];
  this.tilesL90 = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 2, 1,
    2, 1, 1, 1,
  ];
  this.tilesL180 = [
    1, 1, 1, 1,
    2, 2, 1, 1,
    1, 2, 1, 1,
    1, 2, 1, 1
  ];
  this.tilesL270 = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 1, 2, 1,
    2, 2, 2, 1
  ];

  // block O
  this.tilesO = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 1, 1,
    2, 2, 1, 1
  ];
  this.tilesO90 = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 1, 1,
    2, 2, 1, 1
  ];
  this.tilesO180 = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 1, 1,
    2, 2, 1, 1
  ];
  this.tilesO270 = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 1, 1,
    2, 2, 1, 1
  ];

  // block S
  this.tilesS = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 2, 2, 1,
    2, 2, 1, 1
  ];
  this.tilesS90 = [
    1, 1, 1, 1,
    2, 1, 1, 1,
    2, 2, 1, 1,
    1, 2, 1, 1
  ];
  this.tilesS180 = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 2, 2, 1,
    2, 2, 1, 1
  ];
  this.tilesS270 = [
    1, 1, 1, 1,
    1, 2, 1, 1,
    1, 2, 2, 1,
    1, 1, 2, 1
  ];

  // block T
  this.tilesT = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 2, 1,
    1, 2, 1, 1
  ];
  this.tilesT90 = [
    1, 1, 1, 1,
    1, 2, 1, 1,
    2, 2, 1, 1,
    1, 2, 1, 1
  ];
  this.tilesT180 = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 2, 1, 1,
    2, 2, 2, 1
  ];
  this.tilesT270 = [
    1, 1, 1, 1,
    1, 2, 1, 1,
    1, 2, 2, 1,
    1, 2, 1, 1
  ];

  // block Z
  this.tilesZ = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 1, 1,
    1, 2, 2, 1
  ];
  this.tilesZ90 = [
    1, 1, 1, 1,
    1, 2, 1, 1,
    2, 2, 1, 1,
    2, 1, 1, 1
  ];
  this.tilesZ180 = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 1, 1,
    1, 2, 2, 1
  ];
  this.tilesZ270 = [
    1, 1, 1, 1,
    1, 1, 2, 1,
    1, 2, 2, 1,
    1, 2, 1, 1
  ];

  this.getBlockTile = function (col, row, tiles) {
    return tiles[row * this.cols + col];
  }

  this.drawBlock = function (tiles, posX, posY) {
    for (var c = 0; c < this.cols; c++) {
      for (var r = 0; r < this.rows; r++) {
        var tile = this.getBlockTile(c, r, tiles);
        if (tile == 2) {
          context.drawImage(
            blockTile,
            0,
            0,
            this.tsize,
            this.tsize,
            (c + posX) * this.tsize,
            (r + posY) * this.tsize,
            this.tsize,
            this.tsize
          );
        }
      }
    }
  }
  this.selectBlock = function () {
    var blockNumber = Math.floor(Math.random() * 6);
    switch (blockNumber) {
      case 0:
        tilesArray = this.tilesI;
        break;
      case 1:
        tilesArray = this.tilesJ;
        break;
      case 2:
        tilesArray = this.tilesL;
        break;
      case 3:
        tilesArray = this.tilesO;
        break;
      case 4:
        tilesArray = this.tilesS;
        break;
      case 5:
        tilesArray = this.tilesT;
        break;
      case 6:
        tilesArray = this.tilesZ;
        break;
    }
    return tilesArray;
  }

  this.getBlockRows = function (tilesArray) {
    var lastTile;
    var usedRows;
    for (var i = tilesArray.length - 1; i >= 0; i--) {
      if (tilesArray[i] > 1) lastTile = i;
    }

    if (lastTile < 4) usedRows = 4;
    else if (lastTile < 8) usedRows = 3;
    else if (lastTile < 12) usedRows = 2;
    else if (lastTile < 16) usedRows = 1;
    return usedRows;
  }

  this.getNewBlock = function (tilesArray) {
    var newBlock = [];
    for (var i = this.rows - this.getBlockRows(tilesArray); i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        newBlock.push(tilesArray[i * this.rows + j])
      }
    }
    return newBlock;
  }

  this.getBlockCols = function (tilesArray) {
    var min = this.cols;
    var max = 0;
    var count = 0;
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        if (tilesArray[i * this.cols + j] == 2) {
          if (min > j) min = j;
          if (max < j) max = j;
        }
      }
    }
    for (min; min <= max; min++) {
      count++;
    }
    return count;
  }

  this.getFirstCol = function (tilesArray) {
    var min = this.cols;
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        if (tilesArray[i * this.cols + j] == 2) {
          if (min > j) min = j;
        }
      }
    }
    return min;
  }

  this.getLastCol = function (tilesArray) {
    var last = 0;
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        if (tilesArray[i * this.cols + j] == 2) {
          if (last < j) last = j;
        }
      }
    }
    return last;
  }

  this.rotate = function (randomBlock) {

    var rotatedBlock;

    if (randomBlock == this.tilesI) rotatedBlock = this.tilesI90;
    if (randomBlock == this.tilesI90) rotatedBlock = this.tilesI180;
    if (randomBlock == this.tilesI180) rotatedBlock = this.tilesI270;
    if (randomBlock == this.tilesI270) rotatedBlock = this.tilesI;

    if (randomBlock == this.tilesJ) rotatedBlock = this.tilesJ90;
    if (randomBlock == this.tilesJ90) rotatedBlock = this.tilesJ180;
    if (randomBlock == this.tilesJ180) rotatedBlock = this.tilesJ270;
    if (randomBlock == this.tilesJ270) rotatedBlock = this.tilesJ;

    if (randomBlock == this.tilesL) rotatedBlock = this.tilesL90;
    if (randomBlock == this.tilesL90) rotatedBlock = this.tilesL180;
    if (randomBlock == this.tilesL180) rotatedBlock = this.tilesL270;
    if (randomBlock == this.tilesL270) rotatedBlock = this.tilesL;

    if (randomBlock == this.tilesO) rotatedBlock = this.tilesO90;
    if (randomBlock == this.tilesO90) rotatedBlock = this.tilesO180;
    if (randomBlock == this.tilesO180) rotatedBlock = this.tilesO270;
    if (randomBlock == this.tilesO270) rotatedBlock = this.tilesO;

    if (randomBlock == this.tilesS) rotatedBlock = this.tilesS90;
    if (randomBlock == this.tilesS90) rotatedBlock = this.tilesS180;
    if (randomBlock == this.tilesS180) rotatedBlock = this.tilesS270;
    if (randomBlock == this.tilesS270) rotatedBlock = this.tilesS;

    if (randomBlock == this.tilesT) rotatedBlock = this.tilesT90;
    if (randomBlock == this.tilesT90) rotatedBlock = this.tilesT180;
    if (randomBlock == this.tilesT180) rotatedBlock = this.tilesT270;
    if (randomBlock == this.tilesT270) rotatedBlock = this.tilesT;

    if (randomBlock == this.tilesZ) rotatedBlock = this.tilesZ90;
    if (randomBlock == this.tilesZ90) rotatedBlock = this.tilesZ180;
    if (randomBlock == this.tilesZ180) rotatedBlock = this.tilesZ270;
    if (randomBlock == this.tilesZ270) rotatedBlock = this.tilesZ;

    return rotatedBlock;
  }

  this.collision = function (posX, posY) {
    var newBlock = block.getNewBlock(randomBlock);
    var changedXPositions = [];
    var positionsPerRow = [];
    var tempIndex = 0;
    var totalPositions = 0;
    var flag = false;
    let lastY = posY + block.rows;

    for (let i = (newBlock.length / block.rows) - 1; i >= 0; i--) {
      for (let j = 0; j < block.rows; j++) {
        if (newBlock[i * block.rows + j] == 2) changedXPositions.push(j);
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
    for (var i = 0; i < positionsPerRow.length; i++) {
      for (var j = 1; j <= positionsPerRow[i]; j++) {
        if (map.getTile(lastY - i, posX + changedXPositions[tempIndex]) == 2) {
          flag = true;
        }
        tempIndex++;
      }
    }
    return flag;
  }

  this.reset = function () {
    map.putIntoMap(posY, posX, randomBlock);
    randomBlock = block.selectBlock();
    posY = 0 - (block.rows - block.getBlockRows(randomBlock));
    posX = getRandomX() - block.getLastCol(randomBlock);
    if (posX < 0) posX = 0 - block.getFirstCol(randomBlock);
    block.drawBlock(randomBlock, posX, posY);
    flag = false;
  }

}