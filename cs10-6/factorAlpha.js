module.exports = class FactorAlpha {
    static isFactor(number = 0, potentialFactor) {
        return number % potentialFactor == 0;
    }

    static factors(number) {
        const factorSet = new Set();
        const factorArr = new Array(parseInt(Math.sqrt(number)))
                                .fill(null)
                                .map((value, idx) => idx+1)
                                .filter(pod => isFactor(number, pod));
        factorArr.forEach(factor => {
            factorSet.add(factor).add(number / factor);
        });
        return factorSet;
    }
}