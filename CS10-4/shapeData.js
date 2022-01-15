class Shape {
    constructor() {
        if(new.target === Shape) throw new TypeError("This is super class");

        this.pointArr = [];
    }
}


class Line extends Shape {
    static getDistance(pointA, pointB) {
        const distanceX = pointA.x - pointB.x;
        const distanceY = pointA.y - pointB.y;

        return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    }
}


class Triangle extends Shape {
    constructor() {
        super();
    }

    static getDistanceArr() {
        const distanceArr = [];
        for(let i = 0; i < this.pointArr.length - 1; i++) {
            distanceArr.push(Line.getDistance(this.pointArr[i], this.pointArr[i+1]));
        }
        distanceArr.push(Line.getDistance(this.pointArr[this.pointArr.length-1], this.pointArr[0]));

        return distanceArr;
    }

    static getTriangleArea(shape) {
        const distanceArr = Triangle.getDistanceArr.call(shape);
        const process1 = 4 * (distanceArr[0] ** 2) * (distanceArr[1] ** 2);
        const process2 = (distanceArr[0] ** 2) + (distanceArr[1] ** 2) + (distanceArr[2] ** 2);
        const area = Math.sqrt(process1 - process2) / 4;

        return area;
    }

    getArea(shape) {
        return Triangle.getTriangleArea(shape);
    }
}


class Rectangle extends Shape {
    constructor() {
        super();
    }

    getArea() {
        let width = 0;
        let height = 0;
        const standard = this.pointArr[0];

        for(let i = 1; i < this.pointArr.length; i++) {
            const point = this.pointArr[i];
            if(standard.x === point.x) height = Math.abs(standard.y - point.y);
            if(standard.y === point.y) width = Math.abs(standard.x - point.x);
        }

        return width * height;
    }
}


class Polygon extends Shape {
    constructor() {
        super();
    }

    getArea() {
        
    }
}

module.exports = [ Line, Triangle, Rectangle, Polygon ];