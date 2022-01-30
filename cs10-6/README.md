# ⛰ 고차함수 활용하기
- [X] 2-100까지 자연수 중에서 완전수(perfect), 과잉수(Abundant), 부족수(Deficient), 소수(Prime), 정사각수(Squared) 목록을 출력한다.  
- [X] map, filter, reduce 고차 함수를 활용한다.
- [X] 자연수 중에서 다른 자연수의 제곱으로 표현되는 정사각수(squared) 판단 함수를 추가한다.
- [ ] 출력을 위해서는 반드시 클로저(또는 람다)를 선언하고 반복문 대신 reduce를 활용해서 출력해야 한다.  
<br>

## 구현 설명
1. reduce를 사용하기 위해 2\~99의 빈 배열을 생성.  
99길이의 빈 배열을 만들어주고, map을 이용하여 2\~99 까지 채워준다.
```javascript
return [...Array(99)].map((v, idx) => idx+2);
```
2. 반복문 대신 reduce로 구현하여 result가 새로운 실행컨텍스트가 생성될 때마다 초기화되도록 하였다.
```javascript
numArr.reduce((result = "", number) => {
```
<br>

## 구현 결과
![Frame 6](https://user-images.githubusercontent.com/17706346/150398534-799d0ea8-f95c-4048-a283-51cbb590c5ef.png)