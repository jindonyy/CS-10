module.exports = class InputHandler {
    constructor() {
        this.readline = this.setReadLine();
    }

    setReadLine() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.setPrompt('🎲 좌표를 입력하세요 \n');
        readline.on('close', function() {
            process.exit();
        });
        
        return readline;
    }

    checkCoordinateLength(coordinateArr) {
        if(coordinateArr.length < 2) return { type: 'POINT_LENGTH' };
    }

    checkMaxNum(coordinateArr) {
        const MAXNUM = 24;
        const coordinates = [].concat(...coordinateArr);
        for(let idx = 0; idx < coordinates.length; idx++) {
            if(coordinates[idx] > MAXNUM) return { type: 'RANGE', maxnum: MAXNUM };
        }
    }

    checkRectangle(coordinateArr) {
        if(coordinateArr.length !== 4) return false;

        const coordinates = [].concat(...coordinateArr);
        const set = new Set(coordinates);
        if(set.size > 4) return { type: 'NOT_RECTANGLE' };
    }

    checkInputError(coordinateArr) {
        return this.checkCoordinateLength(coordinateArr) || this.checkMaxNum(coordinateArr) || this.checkRectangle(coordinateArr);
    }

    getCoordinates(input) {
        const coordinateStr = input.replace(/[()]/g, '').split(/[,-]/g);
        const coordinateArr = [];
        for(let idx = 0; idx < coordinateStr.length; idx += 2) {
            const coordinate = [ Number(coordinateStr[idx]), Number(coordinateStr[idx+1]) ];
            coordinateArr.push(coordinate);
        }
        
        return coordinateArr;
    }

    closeInput() {
        this.readline.close();
    }
}