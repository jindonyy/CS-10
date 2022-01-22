const FactorAlpha = require('./factorAlpha.js');

module.exports = class PrimeAlpha {
    static equalSet(aset, bset) {
        if(aset.size !== bset.size) return false;
        for(const a of aset) if(!bset.has(a)) return false;
        return true;
    }
    
    static isPrime(number) {
        const primeSet = new Set([1, number]);
        return number > 1 && PrimeAlpha.equalSet(FactorAlpha.factors(number), primeSet);
    }
}