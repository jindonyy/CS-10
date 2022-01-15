const [ Line, Triangle, Rectangle, Polygon ] = require('./shapeData.js');
const Printer = require('./printer.js');

class shapeController {
    constructor(_model, _view) {
        [ this.line, this.triangle, this.rectangle, this.polygon ] = _model;
        this.view = _view;
    }

    requirePoints() {
        this.readline = require('readline');
        this.rl = this.readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        this.rl.setPrompt('🎲 좌표를 입력하세요 \n');
        this.rl.prompt();
        this.rl.on('line', input => {
            if (input === 'esc') this.rl.close();
            
            const pointArr = this.changeToNum(input);
            if(Array.isArray(pointArr)) this.checkShape(pointArr);
            else this.view.printError(this.rl, `⚠️  좌표가 ${pointArr}를 초과했습니다.`);
        });
        this.rl.on('close', function() {
            process.exit();
        });
    }

    changeToNum(input) {
        const pointArr = [];
        let point = {};
        let num = '';
        const maxNum = 24;

        for(const str of input) {
            switch(str) {
                case('('):
                    continue;
                case('-'):
                    continue;
                case(','):
                    point.x = Number(num);
                    if(point.x > maxNum) return maxNum;
                    num = '';
                    break;
                case(')'):
                    point.y = Number(num);
                    if(point.y > maxNum) return maxNum;
                    pointArr.push(point);
                    point = {};
                    num = '';
                    break;
                default:
                    num += str;
            }
        }
    
        return pointArr;
    }

    checkShape(pointArr) {
        let result = 0, shape = '';
        switch(pointArr.length) {
            case(1):
                this.view.printError(this.rl, "⚠️  좌표의 갯수를 확인해주세요.");
                return;
            case(2):
                result = Line.getDistance.apply(this.line, [pointArr[0], pointArr[1]]);
                this.view.printLineData(result);
                return;
            case(3):
                shape = 'triangle';
                break;
            case(4):
                shape = 'rectangle';
                break;
            default:
                shape = 'polygon';
        }

        this[shape].pointArr = pointArr;
        result = this[shape].getArea(this[shape]);
        this.view.printShapeData(shape, result);
    }
}

const shapeArea = new shapeController([ new Line(), new Triangle(), new Rectangle(), new Polygon() ], new Printer());
shapeArea.requirePoints();