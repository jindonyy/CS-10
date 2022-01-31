const Printer = require('./Printer.js');

module.exports = class OutputHandler {
    constructor() {
        this.printer = new Printer();
    }

    giveResult(shape, result) {
        const RESULT_MSG = {
            Line: '직선의 길이는',
            Triangle: '삼각형의 넓이는',
            Rectangle: '정사각형의 넓이는',
            Polygon: '다각형의 넓이는'
        };
        this.printer.printResult(RESULT_MSG[shape], result);
    }
    
    giveError(error) {
        const ERROR_MSG = {
            RANGE: `${error.maxnum}을 초과했습니다.`,
            POINT_LENGTH: '2개 이상의 좌표를 입력해주세요.',
            NOT_RECTANGLE: '직사각형이 아닙니다.'
        };

        this.printer.printError(ERROR_MSG[error.type]);
    }
}