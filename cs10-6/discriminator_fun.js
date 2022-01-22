const isFactor = (number = 0, potentialFactor) => number % potentialFactor == 0;

const factors = (number) => {
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

const sum = (factors) => {
    let total = 0;
    factors.forEach((factor) => total += factor);
    return total;
}

const num2compare = (number) => {
    const factorSet = factors(number);
    const total = sum(factorSet)
    return total - number;
}

const isPerfect = (number) => num2compare(number) === number;

const isAbundant = (number) => num2compare(number) > number;

const isDeficient = (number) => num2compare(number) < number; 


const equalSet = (aset, bset) => {
    if (aset.size !== bset.size) return false;
    for (const a of aset) if (!bset.has(a)) return false;
    return true;
}

const isPrime = (number) => {
    const primeSet = new Set([1, number]);
    return number > 1 && equalSet(factors(number), primeSet);
}

const getRoot = (number) => {
    return Math.sqrt(number);
}

const isSquared = (number) => {
    const root = getRoot(number);
    return Number.isInteger(root);
}

const makeNumArr = () => {
    return new Array(99).map((v, idx) => idx+2);
}

// closure.. 꼭 써야할까..
const determineNum = () => {
    const numArr = makeNumArr();
    numArr.reduce((result = "", number) => {
        if(isPerfect(number)) result += "Perfect";
        else if(isAbundant(number)) result += "Abundant";
        else if(isDeficient(number)) result += "Deficient";

        if(isPrime(number)) result += ", Prime";
        else if(isSquared(number)) result += ", Squared";

        printResult(number, result);
    }, "");
}

const printResult = (number, result) => {
    console.log(`${number} is ${result}.`);
}

determineNum();