// 미션1 - 디지털 논리 게이트 함수
const and = (a, b) => a && b; // 논리곱
const or = (a, b) => a || b; // 논리합
const nand = (a, b) => !(a && b); // 부정논리곱
const nor = (a, b) => !(a || b); // 부정논리합
const xor = (a, b) => (!a && b) || (a && !b);


// 미션2 - 반쪽덧셈과 전체덧셈
const halfAdder = (bitA, bitB) => {
    const sum = xor(bitA, bitB);
    const carry = and(bitA, bitB);

    return [sum, carry];
}

const fullAdder = (bitA, bitB, carryIn) => {
    const [sum1, carry1] = halfAdder(bitA, bitB);
    const [sum2, carry2] = halfAdder(sum1, carryIn);
    const carryOut = xor(carry1, carry2);
    
    return [sum2, carryOut];
};


// 미션 3 - 1바이트 덧셈기
// const byteA = [true, true, false, true];
// const byteB = [true, false, true, true, false, false, true, true];

// 병렬 감산기
const byteAdder = (byteA, byteB) => {
    const answer = [];
    let carry = false;

    for(let i = 0; i < Math.max(byteA.length, byteB.length); i++){
        const bitAdd = fullAdder(byteA[i], byteB[i], carry);
        answer.push(bitAdd[0]);
        carry = bitAdd[1];
    }
    answer.push(carry);

    return answer;
}

export {
    byteAdder
};