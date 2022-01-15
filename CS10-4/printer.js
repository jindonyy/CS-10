class Printer {
    printLineData(result) {
        console.log(`직선의 넓이는 ${result} 입니다.`);
    }

    printShapeData(shape, result) {
        console.log(`${shape}의 넓이는 ${result} 입니다.`);
    }
    
    printError(rl, error) {
        console.log(error);
        rl.prompt();
    }
}

module.exports = Printer;