const Line = require('./Line.js');
const Triangle = require('./Triangle.js');
const Rectangle = require('./Rectangle.js');

module.exports = class ShapeFactory {
    static createShape(coordinateArr) {
        if(coordinateArr.length >= 5) return new Polygon();
        
        const shape = {
            1: false,
            2: Line,
            3: Triangle,
            4: Rectangle
        }

        return new shape[coordinateArr.length](coordinateArr);
    }
}