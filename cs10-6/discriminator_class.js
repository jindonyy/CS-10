const ClassifierAlpha = require('./classifierAlpha.js');
const PrimeAlpha = require('./primeAlpha.js');
const SquaredAlpha = require('./squaredAlpha.js');

/*
- 진약수
    자기 자신을 제외한 약수들
    ex) 16의 진약수 -> 1, 2, 4, 8, 16
- 완전수(Perfect)
    진약수의 합과 같은 수
    ex) 28 -> 1+2+4+7+14 = 28
- 과잉수(Abundant)
    진약수의 합보다 큰 수
    ex) 12 -> 1+2+3+4+6 = 16
- 부족수(Deficient)
    잔약수의 합보다 작은 수
    ex) 8 -> 1+2+4 = 7
- 소수(Prime)
    1과 자기 자신만 약수인 수
    ex) 2, 3, 5, 7 ...
- 정사각수(Squared)
    어떤 자연수의 제곱이 되는 수
    1부터 연속된 홀수의 합은 언제나 정사각수
    ex) 1, 4, 9, 16 ...
*/

class Discriminator {
    static makeNumArr() {
        return [...Array(99)].map((v, idx) => idx+2);
    }

    // closure.. 꼭 써야할까..
    static determineNum() {
        const numArr = Discriminator.makeNumArr();
        numArr.reduce((result = "", number) => {
            if(ClassifierAlpha.isPerfect(number)) result += "Perfect";
            else if(ClassifierAlpha.isAbundant(number)) result += "Abundant";
            else if(ClassifierAlpha.isDeficient(number)) result += "Deficient";
    
            if(PrimeAlpha.isPrime(number)) result += ", Prime";
            else if(SquaredAlpha.isSquared(number)) result += ", Squared";
    
            Discriminator.printResult(number, result);
        }, "");
    }
    
    static printResult(number, result) {
        console.log(`${number} is ${result}.`);
    }
}


Discriminator.determineNum();