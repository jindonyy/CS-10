const InputHandler = require('./InputHandler.js');
const ShapeFactory = require('./ShapeFactory.js');
const OutputHandler = require('./OutputHandler.js');

module.exports = class ShapeController {
    constructor() {
        this.inputHandler = new InputHandler();
        this.outputHandler = new OutputHandler();
        this.shape = '';
    }

    requireInput() {
        this.inputHandler.readline.prompt();
        this.inputHandler.readline.on('line', input => {
            if(input == 'esc') this.inputHandler.closeInput();
            this.inputEvent(input);
            this.inputHandler.readline.prompt();
        });
    }
    
    inputEvent(input) {
        const coordinateArr = this.inputHandler.getCoordinates(input);
        const inputError = this.inputHandler.checkInputError(coordinateArr);
        if(inputError) { // 입력값 error 체크
            return this.outputHandler.giveError(inputError);
        }

        this.shape = ShapeFactory.createShape(coordinateArr);
        this.giveResult();
    }
    
    giveResult() {
        let result;
        const shape = this.shape.constructor.name;
        if(shape === 'Line') {
            result = this.shape.getDistance();
        } else {
            result = this.shape.getArea();
        }
        this.outputHandler.giveResult(shape, result);
    }
}