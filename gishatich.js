var LivingCreature = require("./mayr-class.js");

module.exports = class Gishatich extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 15;
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
        var norvandak = datarkvandakner[Math.floor(Math.random() * datarkvandakner.length)];
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 3;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy--;
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(2);
        var norvandak = datarkvandakner[Math.floor(Math.random() * datarkvandakner.length)];
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 3;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy++;
            for (var c in xotakerner) {

                if (xotakerner[c].x == this.x && xotakerner[c].y == this.y) {
                    xotakerner.splice(c, 1);
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }
    }

    bazmanal() {
        this.energy = 10;
        var norVandak = this.yntrelVandak(0)[Math.floor(Math.random() * this.yntrelVandak(0).length)];
        if (norVandak) {
            var gishatich = new Gishatich(norVandak[0], norVandak[1]);
            gishatichner.push(gishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
        }
    }
    mahanal(i) {
        matrix[this.y][this.x] = 0;
        gishatichner.splice(i, 1);

    }

}