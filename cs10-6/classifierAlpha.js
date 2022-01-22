const FactorAlpha = require('./factorAlpha.js');

module.exports = class ClassifierAlpha {
    static sum(factors) {
        let total = 0;
        factors.forEach((factor) => total += factor);
        return total;
    }

    static factorsSum(number) {
        const factorSet = FactorAlpha.factors(number);
        const total = ClassifierAlpha.sum(factorSet)
        return total - number;
    }

    static isPerfect(number) {
        return ClassifierAlpha.factorsSum(number) === number;
    }

    static isAbundant(number) {
        return ClassifierAlpha.factorsSum(number) > number;
    }

    static isDeficient(number) {
        return ClassifierAlpha.factorsSum(number) < number;
    }
}