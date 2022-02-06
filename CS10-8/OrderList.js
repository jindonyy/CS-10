class Order {
    constructor(_menus) {
        this.customer = '';
        this.menus = _menus;
        this.length = 0;
        this.next = null;
    }
}

module.exports = class OrderList {
    constructor() {
        this.firstOder = null;
        this.lastOrder = null;
        this.length = 0;
    }

    addOrder(menu) {
        const order = new Order(menu);
        if(this.firstOder) {
            this.lastOrder.next = order;
            this.lastOrder = order;
        } else {
            this.firstOder = order;
            this.lastOrder = this.firstOder;
        }
        this.length++;
    }

    removeOrder() {
        if(!this.firstOder) return undefined;

        const oldfirstOder = this.firstOder;
        this.firstOder = oldfirstOder.next;
        this.length--;
        if(this.length === 0) this.lastOrder = null;
    }
}