const Shape = require('./Shape.js');

module.exports = class Rectangle extends Shape {
    constructor(coordinateArr) {
        super(coordinateArr);
    }

    calcArea() {
        let width = 0;
        let height = 0;
        const standard = this.pointArr[0];

        for(let idx = 1; idx < this.pointArr.length; idx++) {
            const point = this.pointArr[idx];
            const line = new this.line([[standard.x, standard.y], [point.x, point.y]]);
            if(standard.x === point.x) {
                height = line.getDistance();
            } else if(standard.y === point.y) {
                width = line.getDistance();
            }
        }

        return width * height;
    }
}