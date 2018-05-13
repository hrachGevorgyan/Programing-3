class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.takt = 0;
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
    yntrelVandak(ind) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] === ind) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
        this.takt++;
        var datarkVandakner = this.yntrelVandak(0);
        var xot = random(datarkVandakner);

        if (xot && this.takt >= 8) {
            var nX = xot[0];
            var nY = xot[1];
            matrix[nY][nX] = 1;

            var norXot = new Grass(nX, nY, this.index);
            grassArr.push(norXot);
            this.takt = 0;
        }
    }

}

