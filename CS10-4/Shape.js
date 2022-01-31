const Point = require('./Point.js');
const Line = require("./Line");

module.exports = class Shape {
    constructor(coordinateArr) {
        if(new.target === Shape) throw new TypeError("This is super class");
        this.area = 0;
        this.line = Line;
        this.pointArr = this.setPointArr(coordinateArr);
    }

    setPointArr(coordinateArr) {
        return coordinateArr.map(point => new Point(point));
    }

    getArea() {
        return this.calcArea();
    }
}