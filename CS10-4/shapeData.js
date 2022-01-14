class Shape {
    constructor() {
        if(new.target === Shape) throw new TypeError("This is super class");

        this.pointArr = [];
    }
}


class Line extends Shape {
    
}


class Triangle extends Shape {
    
}


class Rectangle extends Shape {
    
}


class Polygon extends Shape {
    
}

module.exports = [ Line, Triangle, Rectangle, Polygon ];