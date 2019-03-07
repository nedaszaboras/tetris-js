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
    2, 2, 2, 2,
    1, 1, 1, 1,
    1, 1, 1, 1,
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
    2, 2, 2, 2,
    1, 1, 1, 1,
  ];

  // block J
  this.tilesJ = [
    1, 1, 1, 1,
    1, 2, 1, 1,
    1, 2, 1, 1,
    2, 2, 1, 1,
  ];
  this.tilesJ90 = [
    1, 2, 1, 1,
    1, 2, 2, 2,
    1, 1, 1, 1,
    1, 1, 1, 1,
  ];
  this.tilesJ180 = [
    1, 2, 2, 1,
    1, 2, 1, 1,
    1, 2, 1, 1,
    1, 1, 1, 1,
  ];
  this.tilesJ270 = [
    1, 1, 1, 1,
    2, 2, 2, 1,
    1, 1, 2, 1,
    1, 1, 1, 1,
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
    2, 2, 2, 1,
    2, 1, 1, 1,
    1, 1, 1, 1,
  ];
  this.tilesL180 = [
    2, 2, 1, 1,
    1, 2, 1, 1,
    1, 2, 1, 1,
    1, 1, 1, 1,
  ];
  this.tilesL270 = [
    1, 1, 2, 1,
    2, 2, 2, 1,
    1, 1, 1, 1,
    1, 1, 1, 1,
  ];

  // block O
  this.tilesO = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 1, 1,
    2, 2, 1, 1,
  ];
  this.tilesO90 = [
    2, 2, 1, 1,
    2, 2, 1, 1,
    1, 1, 1, 1,
    1, 1, 1, 1,
  ];
  this.tilesO180 = [
    2, 2, 1, 1,
    2, 2, 1, 1,
    1, 1, 1, 1,
    1, 1, 1, 1,
  ];
  this.tilesO270 = [
    2, 2, 1, 1,
    2, 2, 1, 1,
    1, 1, 1, 1,
    1, 1, 1, 1,
  ];

  // block S
  this.tilesS = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    1, 2, 2, 1,
    2, 2, 1, 1,
  ];
  this.tilesS90 = [
    2, 1, 1, 1,
    2, 2, 1, 1,
    1, 2, 1, 1,
    1, 1, 1, 1,
  ];
  this.tilesS180 = [
    1, 2, 2, 1,
    2, 2, 1, 1,
    1, 1, 1, 1,
    1, 1, 1, 1,
  ];
  this.tilesS270 = [
    1, 2, 1, 1,
    1, 2, 2, 1,
    1, 1, 2, 1,
    1, 1, 1, 1,
  ];

  // block T
  this.tilesT = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 2, 1,
    1, 2, 1, 1,
  ];
  this.tilesT90 = [
    1, 2, 1, 1,
    2, 2, 1, 1,
    1, 2, 1, 1,
    1, 1, 1, 1,
  ];
  this.tilesT180 = [
    1, 2, 1, 1,
    2, 2, 2, 1,
    1, 1, 1, 1,
    1, 1, 1, 1,
  ];
  this.tilesT270 = [
    1, 2, 1, 1,
    1, 2, 2, 1,
    1, 2, 1, 1,
    1, 1, 1, 1,
  ];

  // block Z
  this.tilesZ = [
    1, 1, 1, 1,
    1, 1, 1, 1,
    2, 2, 1, 1,
    1, 2, 2, 1,
  ];
  this.tilesZ90 = [
    1, 2, 1, 1,
    2, 2, 1, 1,
    2, 1, 1, 1,
    1, 1, 1, 1,
  ];
  this.tilesZ180 = [
    2, 2, 1, 1,
    1, 2, 2, 1,
    1, 1, 1, 1,
    1, 1, 1, 1,
  ];
  this.tilesZ270 = [
    1, 1, 2, 1,
    1, 2, 2, 1,
    1, 2, 1, 1,
    1, 1, 1, 1,
  ];

}

function getBlockTile(col, row, tiles) {
  return tiles[row * block.cols + col]
}