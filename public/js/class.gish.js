class gish {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 15;
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
                if (matrix[y][x] == character) {
                    found1.push(this.directions[i]);
                }
            }
        }
        return found1;
    }
    chooseCell2(t, t1) {
        this.getNewCoordinates();
        var found1 = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t || matrix[y][x] === t1) {
                    found1.push(this.directions[i]);
                }
            }
        }
        return found1;
    }
    mul() {
        var vand1 = this.chooseCell(0);
        var g = random(vand1);

        if (g) {
            var nX = g[0];
            var nY = g[1];
            matrix[nY][nX] = 4;

            var newgish = new gish(nX, nY, this.index);
            gishatich2.push(newgish);

        }
    }
    move() {
        var newgishat = this.chooseCell(0);
        var newg = random(newgishat);
        if (newg) {
            var nX = newg[0];
            var nY = newg[1];

            matrix[this.y][this.x] = 0;
            matrix[nY][nX] = 4;
            this.x = nX;
            this.y = nY;
        }


    }


    eat() {
        var grasseater = this.chooseCell2(2, 3);
        var ges = random(grasseater);


        if (ges) {

            var nX = ges[0];
            var nY = ges[1];
            matrix[this.y][this.x] = 0;
            this.energy++;
            if (matrix[nY][nX] == 2) {
                for (var i in grassMove) {
                    if (grassMove[i].x == nX && grassMove[i].y == nY) {
                        grassMove.splice(i, 1);
                        break;
                    }

                }

            }
            else if (matrix[nY][nX] == 3) {
                for (var i in gishatich) {
                    if (gishatich[i].x == nX && gishatich[i].y == nY) {
                        gishatich.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[nY][nX] = 4;
            this.y = nY;
            this.x = nX;


            if (this.energy >= 30) {
                this.mul();
                this.energy = 15;
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
        for (var i in gishatich2) {
            if (gishatich2[i].x == this.x && gishatich2[i].y == this.y) {
                gishatich2.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}