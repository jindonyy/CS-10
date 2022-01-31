
const Shape = require('./Shape.js');
const Line = require('./Line.js');

module.exports = class Triangle extends Shape {
    constructor(_pointArr) {
        super(_pointArr);
    }
    
    getDistanceArr() {
        const distanceArr = this.pointArr.map((point, idx, arr) => {
            const nextIdx = (idx === arr.length - 1) ? 0 : idx + 1;
            const twoPoint = [[point.x, point.y], [arr[nextIdx].x, arr[nextIdx].y]];
            const line = new Line(twoPoint);
            const distance = line.getDistance();
            return distance;
        });

        return distanceArr;
    }

    calcArea() {
        const distanceArr = this.getDistanceArr();
        const process1 = 4 * (distanceArr[0] ** 2) * (distanceArr[1] ** 2);
        const process2 = (distanceArr[0] ** 2) + (distanceArr[1] ** 2) + (distanceArr[2] ** 2);
        
        return Math.sqrt(process1 - process2) / 4;
    }
}