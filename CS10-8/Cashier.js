const EXIT_MSG = require('./constant');

module.exports = class Cashier {
    constructor([InputHandler, OrderList]) {
        this.inputHandler = InputHandler;
        this.orderList = OrderList;
    }

    takeOrder() {
        this.inputHandler.readline.prompt();
        this.inputHandler.readline.on('line', input => {
            if(input == EXIT_MSG) this.closeInput();
            this.inputHandler.getOrderInfo(input);
            this.addOrder(input);
            this.inputHandler.readline.prompt();
        });
    }

    addOrder() {
        
    }
}