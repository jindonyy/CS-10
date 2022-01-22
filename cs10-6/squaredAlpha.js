module.exports = class squaredAlpha {
    static getRoot(number) {
        return Math.sqrt(number);
    }

    static isSquared(number) {
        const root = squaredAlpha.getRoot(number);
        return Number.isInteger(root);
    }
}