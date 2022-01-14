const [ Line, Triangle, Rectangle, Polygon ] = require('./shapeData.js');
const Printer = require('./printer.js');

class shapeController {
    constructor(_model, _view) {
        [ this.line, this.triangle, this.rectangle, this.polygon ] = _model;
        this.view = _view;
    }

    
}

const shapeArea = new shapeController([ new Line(), new Triangle(), new Rectangle(), new Polygon() ], new Printer());
shapeArea.requirePoints();