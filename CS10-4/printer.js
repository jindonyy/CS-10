module.exports = class Printer {
    printResult(resultMSG, result) {
        console.log(`${resultMSG} ${result} 입니다.`);
    }
    
    printError(error) {
        console.log(error);
    }
}