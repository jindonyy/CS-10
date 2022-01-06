import {
    byteAdder
} from './binaryAdder.js';

const num2bool = num => num === 1 ? true : false;
const bool2num = bool => bool ? 1 : 0;

// 미션1: 10진법 -> 2진법
// 방법1: 정수인지 아닌지를 체크해서 구현
/* function dec2bin(decimal) {
    if(decimal === 0) return [false];

    const answer = [];
    let divisor = decimal;

    while(divisor > 0) {
        divisor = divisor / 2;
        const isInteger = Number.isInteger(divisor);
        answer.push(!isInteger); // 정수일 때(true) -> 0(false), 정수가 아닐 때(false) -> 1(true)
        if(!isInteger) divisor = parseInt(divisor);
    }

    return answer;
} */

// 방법2: 나머지와 몫으로 구현
function dec2bin(decimal) {
    if(decimal === 0) return [false];

    const answer = [];
    let divisor = decimal;

    while(divisor > 0) {
        const remainder = divisor % 2;
        divisor = (divisor - remainder) / 2;
        answer.push(num2bool(remainder));
    }

    return answer;
}


// 미션2: 2진법 -> 10진법
function bin2dec(bin) {
    const dec = bin.reduce((acc, cur, i) => acc + (bool2num(cur) * (2 ** i)), 0);

    return dec;
}


// 추가미션 : 10진법 -> 2진법 -> 16진법
function decAdd(decA, decB) {
    const [binA, binB] = [dec2bin(decA), dec2bin(decB)];
    const sumBin = byteAdder(binA, binB);

    return bin2hex(sumBin);
}

function bin2hex(bin) {
    const answer = [];
    const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    for(let i = 0; i < bin.length; i+=4) {
        const fourBit = bin.slice(i, i+4);
        const sumBit = fourBit.reduce((acc, cur, idx) => acc + (bool2num(cur) * 2 ** idx), 0);
        answer.push(hexArr[sumBit]);
    }

    return answer;
}

console.log(decAdd(205, 64));
