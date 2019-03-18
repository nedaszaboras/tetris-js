var mapObjects = function () {

    this.cols = 10,
        this.rows = 20,
        this.tsize = 32,
        this.tiles = [
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

        this.getTile = function (row, col) {
            return this.tiles[row * this.cols + col]
        },
        this.getTileNumber = function (row, col) {
            return row * this.cols + col;
        },
        this.setTile = function (tile, value) {
            this.tiles[tile] = value;
        }

    this.drawMap = function () {
        context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        for (var c = 0; c < this.cols; c++) {
            for (var r = 0; r < this.rows; r++) {
                var tile = this.getTile(r, c);
                if (tile == 1) {
                    context.drawImage(
                        mapTile,
                        0,
                        0,
                        this.tsize,
                        this.tsize,
                        c * this.tsize,
                        r * this.tsize,
                        this.tsize,
                        this.tsize
                    );
                }
                if (tile == 2) {
                    context.drawImage(blockTile,
                        0,
                        0,
                        this.tsize,
                        this.tsize,
                        c * this.tsize,
                        r * this.tsize,
                        this.tsize,
                        this.tsize);
                }
            }
        }
    }

    this.putIntoMap = function (posY, posX, tilesArray) {

        var newBlock = [];
        var newBlockRows;
        var unusedRows;
        newBlock = block.getNewBlock(tilesArray);
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
                if (newBlock[newBlockIndex] == 2) this.setTile(this.getTileNumber(posY, posX), newBlock[newBlockIndex]);
                posX++;
                newBlockIndex++;
            }
            posY++;
        }
    }

    this.updateRow = function () {
        var counter = 0;
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                if (this.getTile(i, j) == 2) counter++;
            }
            if (counter == 10) {
                this.tiles.splice(i * 10, this.cols);
                for (j = 0; j < this.cols; j++) {
                    this.tiles.unshift(1);
                }
                counter = 0;
            }
            counter = 0;
        }
    }
    this.keybinds = function () {
        document.onkeyup = function (e) {
            var minPosX = 0 - block.getFirstCol(randomBlock);
            var maxPosX = 9 - block.getLastCol(randomBlock);
            if (e.which == 37) {
                if (posX > minPosX) posX--;
            }
            else if (e.which == 39) {
                if (posX < maxPosX) posX++;
            }
            else if (e.which == 40) {
                if (flag != true) posY++;
            }
            else if (e.which == 38) {
                if (posX >= (0 - block.getFirstCol(block.rotate(randomBlock))) && posX <= (9 - block.getLastCol(block.rotate(randomBlock)))) randomBlock = block.rotate(randomBlock);
            }
        };
    }
}

