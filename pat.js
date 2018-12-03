class Pat extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;
        this.directions = [];

    }

    stanalNorKordinatner() {
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
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    kill() {
        this.stanalNorKordinatner();
        var norvandak = random(this.directions);
        if (norvandak) {

            if (matrix[norvandak[1]][norvandak[0]] == 1) {
                for (var i in xotakerner) {
                    if (norvandak[1] == xotakerner[i].y && norvandak[0] == xotakerner[i].x) {
                        xotakerner.splice(i, 1);
                        matrix[norvandak[1]][norvandak[0]] = 0;
                        break;
                    }
                }
            }
            else if (matrix[norvandak[1]][norvandak[0]] == 2) {
                for (var i in gishatichner) {
                    if (norvandak[1] == gishatichner[i].y && norvandak[0] == gishatichner[i].x) {
                        gishatichner.splice(i, 1);
                        matrix[norvandak[1]][norvandak[0]] = 0
                        break;
                    }
                }
            }
            else if (matrix[norvandak[1]][norvandak[0]] == 3) {
                for (var i in aryucner) {
                    if (norvandak[1] == aryucner[i].y && norvandak[0] == aryucner[i].x) {
                        aryucner.splice(i, 1);
                        matrix[norvandak[1]][norvandak[0]] = 0
                        break;
                    }
                }
            }
        }

    }

}