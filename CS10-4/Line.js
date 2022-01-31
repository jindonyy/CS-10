const Point = require('./Point.js');

module.exports = class Line {
    constructor(coordinateArr) {
        this.pointArr = this.setPointArr(coordinateArr);
    }

    setPointArr(coordinateArr) {
        return coordinateArr.map(point => new Point(point));
    }

    calcDistance() {
        const distanceX = this.pointArr[0].x - this.pointArr[1].x;
        const distanceY = this.pointArr[0].y - this.pointArr[1].y;

        return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    }

    getDistance() {
        return this.calcDistance();
    }
}