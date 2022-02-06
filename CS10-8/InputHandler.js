const START_MSG = require('./constant');

module.exports = class InputHandler {
    constructor() {
        this.readline = this.setReadLine();
    }

    setReadLine() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.setPrompt(START_MSG);
        readline.on('close', () => {
            process.exit();
        });
        
        return readline;
    }

    getOrderInfo(input) {
        const orderInputArr = input.split(', ');
        const [customer, ...orderStrs] = orderInputArr;
        const orders = orderStrs.map(orderStr => orderStr.split(':'));
        
        return [customer, orders];
    }

    closeInput() {
        this.readline.close();
    }
}