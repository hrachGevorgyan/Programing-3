class gesh {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.index = index;
        this.takt = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found1 = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] === character) {
                    found1.push(this.directions[i]);
                }
            }
        }
        return found1;
    }
    mul() {
        var vand1 = this.chooseCell(1);
        var gish = random(vand1);
        if (gish) {

            var nX = gish[0];
            var nY = gish[1];
            matrix[nY][nX] = 3;
            for (var i in grassArr) {
                if (grassArr[i].x == nX && grassArr[i].y == nY) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            var newgish = new gesh(nX, nY, this.index);
            gish.push(newgish);

        }
    }
    move() {
        var newgishat = this.chooseCell(0);
        var newg = random(newgishat);
        if (newg) {
            var nX = newg[0];
            var nY = newg[1];

            matrix[this.y][this.x] = 0;
            matrix[nY][nX] = 3;

            this.x = nX;
            this.y = nY;
        }


    }


    eat() {
        var grasseater = this.chooseCell(2);
        var gesh = random(grasseater);
        if (gesh) {
            matrix[this.y][this.x] = 0;
            var nX = gesh[0];
            var nY = gesh[1];
            matrix[nY][nX] = 3;
            this.energy++;
            this.x = nX;
            this.y = nY;
            for (var i in grassMove) {
                if (grassMove[i].x == nX && grassMove[i].y == nY) {
                    grassMove.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 20) {
                this.mul();
                this.energy = 10;
            }
        }
        else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }




    }
    die() {
        for (var i in gishatich) {
            if (gishatich[i].x == this.x && gishatich[i].y == this.y) {
                gishatich.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}
