class Aryuc extends LivingCreature{
    constructor(x, y, index) {
       super(x, y, index);
        this.energy = 10;
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
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 4;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy--;
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(3);
        var norvandak = random(datarkvandakner);

        if (norvandak) {

            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 4;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy++;
            for (var c in gishatichner) {
                if (gishatichner[c].x == this.x && gishatichner[c].y == this.y) {
                    gishatichner.splice(c, 1);
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }
    }

    bazmanal() {
        this.energy = 6;
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norXotaker = new Aryuc(norVandak[0], norVandak[1]);
            aryucner.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
        }
    }
    mahanal(i) {
        matrix[this.y][this.x] = 0;
        aryucner.splice(i, 1);
        console.log(aryucner.length)
    }
}