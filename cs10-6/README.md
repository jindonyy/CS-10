# 🧐 순수 함수 (Pure Function)란?
1. 동일한 input(매개변수)이면 항상 동일한 output을 반환하는 함수
2. 함수 외부의 그 어떤 데이터(state)도 변경시키지 않는 함수(no side effect).  
<br>

## Same Input, Same Output
### < 순수하지 않은 함수 >
```javascript
let y = 10;

function sum(x) {
  return x + y;
}
sum(5); // 15

z = 20
sum(5); // 25
```
위의 함수는 외부 데이터(state)인 z의 영향을 받기 때문에 동일한 값을 입력해도 다른 값을 반환하는 경우가 생긴다.

### < 순수 함수 >
```javascript
function sum(x, y) {
  return x * y;
}
sum(5, 10); // 15
sum(5, 10); // 15
sum(5, 10); // 15
``` 
동일한 값을 입력한다면 순수 함수는 1000번을 실행해도 항상 같은 값을 반환한다.  
이처럼 항상 동일한 값을 반환하는 이유는 **예상치 못한 버그를 예방**할 수 있기 때문이다.  
<br>

## No Side Effect
### < 순수하지 않은 함수 >
```javascript
const arr = [1, 2, 3];

function pop(array) {
  array.pop();
  return array;
}

pop(arr); // [1, 2]
pop(arr); // [1]
pop(arr); // []
```
함수 외부 데이터(state)인 array의 배열을 변형하고 있다.  
state의 변경을 하게 되면 항상 동일한 값을 얻을 수 없게 된다.  
그럼 이는 곧 예상치 못한 버그를 발생하게 되는 것이다.

### < 순수 함수 >
```javascript
const arr = [1, 2, 3];

function pop(array) {
  cont newArr = [...array];
  newArray.pop();
  return newArr;
}

pop(arr); // [1, 2]
pop(arr); // [1, 2]
pop(arr); // [1, 2]
```
함수 외부의 배열을 복사하여 사용하면 외부의 값이 중간에 변해도 영향을 받지 않게 된다.  
<br>

## 순수 함수의 장점
- 실행 시점이 중요하지 않다.  
순수 함수가 가지는 가장 큰 매력은 바로 실행되는 시점과 상관없이 항상 동일한 결과를 만들어내는 것입니다.  
결과를 예측할 수 있기 때문에 멀티스레드 환경에서든 비동기적인 상황에서든 언제나 안전하게 믿고 사용할 수 있다.
- 조합성을 높여준다.  
결과의 예측이 가능하기 때문에 다른 순수 함수들과 조합해서 사용하기가 용이하다.  
즉, 재사용성이 좋다고 말할 수 있다.  
대체적으로 하나의 기능에 충실하기 때문에 응집도가 매우 높아 유지보수가 편리한 부분도 있다.  
<br>

## 🖐 그러나,
모든 함수가 순수 함수일 수는 없다.  
모든 함수가 순수 함수라면, 모든 함수가 함수 외부의 어떤 데이터에도 변형을 주지 않기 때문에 프로그램은 구동되지 않고 원 상태 그대로만 있을 것이다.  
따라서 함수형 프로그래밍의 목적은 모든 함수를 순수 함수로 만드는 것이 아닌, side effect,  
즉, 외부 state의 변화를 최소한으로 유지함으로써 함수 실행의 결과 예측을 용이하게 하여 버그 발생의 가능성을 줄이는 것이다.    
<br>

### Reference
[https://soldonii.tistory.com/80](https://soldonii.tistory.com/80)  
<br>
<br>

# 👶🏻 순수함수 만들기
- [X] 중복된 코드를 줄이고, 함수형 표현으로 최대한 개선한다.  
<br>

## 구현 설명
1. 함수만을 사용한 함수형 프로그래밍으로 구현
2. 클래스를 사용하며 객체지향 안에서 함수형을 사용하는 법으로 구현
<br>

### 순수 함수
- 순수함수는 동일한 값을 입력하면 항상 동일한 값을 반환해야 한다.  
때문에 외부 변수인 `this.name`을 사용하지 않고, 메서드의 매개변수와 다른 함수들의 반환값만을 사용하도록 개선하였다.
- `static`을 사용하여 클래스 내의 인스턴스를 사용하지 않고, 클래스로 묶여있지만 함수형처럼 모든 함수가 다른 함수를 사용할 수 있도록 하였다.

### 중복 코드
- `ClassifierAlpha`에서 `sum(this.factors()) - this.number)` 부분이 3개의 함수에서 겹치므로 새로운 함수로 빼내었다.  

< class.ver >
```javascript
static factorsSum(number) {
  const factorSet = FactorAlpha.factors(number);
  const total = ClassifierAlpha.sum(factorSet)
  return total - number;
}
```
< function.ver >
```javascript
function factorsSum(number) {
  const factorSet = factors(number);
  const total = sum(factorSet)
  return total - number;
}
```
- `isFactor`와 `factors` 메서드는 `ClassifierAlpha`클래스와 `PrimeAlpha`클래스에서 모두 사용하므로 따로 빼내었다.  

< class.ver >
```javascript
class FactorAlpha {
  static isFactor(number = 0, potentialFactor) {
    return number % potentialFactor == 0;
  }

  static factors(number) {
    const factorSet = new Set();
    for(let pod = 1; pod <= Math.sqrt(number); pod++) {
      if(!FactorAlpha.isFactor(number, pod)) continue;
      factorSet.add(pod).add(number / pod);
    }
    return factorSet;
  }
}
```
< function.ver >
```javascript
function isFactor(number = 0, potentialFactor) {
  return number % potentialFactor == 0;
}

function factors(number) {
  const factorSet = new Set();
  for(let pod = 1; pod <= Math.sqrt(number); pod++) {
    if(!FactorAlpha.isFactor(number, pod)) continue;
    factorSet.add(pod).add(number / pod);
  }
  return factorSet;
}
```
<br>
<br>

# 🧐 클로저 (closure)란?
클로저(closure)는 내부 함수와 밀접한 관계를 가지고 있는 주제다. 
외부 함수의 실행이 끝나서 외부 함수가 소멸된 이후에도 내부 함수가 외부 함수의 변수에 접근 할 수 있다. 이러한 메커니즘을 클로저라고 한다.  
말이 어려울 수 있으니 우선 하나씩 보도록 하겠다.   
<br>
내부 함수는 외부 함수의 지역변수에 접근 할 수 있다.  
이를 `스코프 체인(scope chain)`이라고 한다. (ES5부터는 스코프 체인이란 단어가 없어져 `외부 렉시컬 환경 체인`이라고 부른다.)  

```javascript
function outter(){
  const title = 'Hello world;  
  function inner(){        
    console.log(title);
  }
  inner();
}
outter();
```
함수 outter의 내부에는 함수 inner가 정의 되어 있다. 함수 inner를 내부 함수라고 한다.  
스코프 체인으로 인해 내부 함수인 inner에서 외부 함수의 지역변수에 접근할 수 있다.  
<br>
그렇다면 내부 함수의 실행을 밖에서 한다면 어떻게 될까?  
외부 함수가 종료된 뒤에 호출하면 외부 함수의 실행 컨텍스트가 종료되어 내부 함수를 호출하지 못한다.  

```javascript
function outter(){
  const title = 'Hello world;  
  return function(){        
    console.log(title);
  }
}
const inner = outter();
inner();
```
그러나 위의 코드를 실행해보면 'Hello world'이 찍히는 것을 볼 수 있다.  
함수 outter를 호출하여 익명 함수가 변수 inner에 담긴다.  
outter 함수는 실행이 끝났기 때문에 이 함수의 지역변수는 소멸되는 것이 자연스럽다.  
하지만 함수 inner를 실행했을 때 'Hello world'가 출력된 것은 외부함수의 지역변수 title이 소멸되지 않았다는 것을 의미한다.  
클로저란 내부함수가 외부함수의 지역변수에 접근 할 수 있고,  
**외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는** 특성을 의미한다.  
<br>

## 캡슐화
```javascript
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  }
}
const conuter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```
1. 외부 함수 makeCounter는 내부 함수인 익명 함수의 참조를 반환한다.  
이로 인해 내부 함수를 전역 변수 counter가 참조하게 된다.
2. 내부 함수는 외부 함수 makeCounter의 지역 변수 count를 참조한다.  
이로 인해 makeCounter의 렉시컬 환경 컴포넌트를 내부 함수가 참조하게 되고,  
이 내부 함수를 전역 변수 counter가 참조하게 되는 것이다.  
<br>

count는 지역 변수이기 때문에 함수 바깥에서 읽거나 쓸 수 없다.  
또한 함수 f가 클로저의 내부 상태를 바꾸는 메서드의 역할을 하고 있다.  
클로저의 내부 상태는 외부로부터 숨겨진 상태이다. 함수 f를 통해서만 접근이 가능하다.  
이렇게 외부로부터 은폐하는 행위를 가리켜 **캡슐화**라고 한다.  
<br>

## 팩토리 함수
```javascript
console.log(counter1()); // 0
console.log(counter2()); // 0
console.log(counter1()); // 1
console.log(counter2()); // 1
```
makeCounter를 실행해서 두 개의 함수를 생성해 보면 모두 별도의 카운터가 된다.  
makeCounter를 호출할 때마다 makeCounter의 렉시컬 환경이 새로 생성되기 때문이다.  
따라서 클로저는 서로 다른 내부 상태를 저장한다.  
클로저를 객체로 간주한다면 makeCounter는 클로저라는 객체를 생성하는 팩토리 함수 역할을 한다.
```javascript
function makeMultiplier(x) {
  return function(y) {
    return x * y;
  }
}
const multi1 = makeMultiplier(2);
const multi2 = makeMultiplier(10);
console.log(multi1(3)); // 6
console.log(multi1(3)); // 30
```

## 반복문 안에서 클로저 만들기
< 잘못된 예시 >
```javascript
const button = document.getElementRyTagName('button');
for(var i = 0; i < button.length; i++) {
  button[i].onclick = function() {
    console.log(i);
  }
}
```
```html
<button>0</button>
<button>1</button>
<button>2</button>
```
for문 앙에서 이벤트 처리기를 등록하는 코드이다.  
0을 누르면 0, 1을 누르면 1이 출력될 것이라 예상했겠지만  
이 코드를 적용하면 어떤 버튼을 눌러도 3이 출력된다.  
이벤트 처리기에 등록한 함수가 전역변수인 i를 참조하는 클로저가 되었기 때문이다.  
등록된 함수가 실행되는 시점에는 for문의 실행이 끝나 있기 때문에 3이 계속 출려되게 된다.  
그렇다면 의도대로 0, 1, 2가 출력되도록 해보자.  
<br>
< 즉시 실행 함수 활용 >

```javascript
for(var i = 0; i < button.length; i++) {
  (function(_i) {
    button[i].onclick = function() {
      console.log(_i);
    }
  }(i));
}
```
즉시 실행 함수로 i를 전달해주어 내부 함수에서 그 i를 참조하기 때문에  
반복문을 돌 때마다 새로운 렉시컬 환경이 생성되기 때문이다.  
<br>
< let 활용 >

```javascript
for(let i = 0; i < button.length; i++) {
  button[i].onclick = function() {
    console.log(i);
  }
}
```
ES6부터 추가된 let은 블록 유효 범위를 가지고 있다.  
따라서 for문의 초기화식에서 선언한 변수를 반복문이 실행될 때마다 새롭게 선언해서 값을 대입하게 된다.  
위의 코드와 아래의 코드는 같은 의미이다.
```javascript
for(var _i = 0; _i < button.length; _i++) {
  let i = _i;
  button[i].onclick = function() {
    console.log(i);
  }
}
```

### Reference
[https://opentutorials.org/module/532/6544](https://opentutorials.org/module/532/6544)  
모던 자바스크립트 입문  
[https://poiemaweb.com/js-closure](https://poiemaweb.com/js-closure)  
<br>
<br>

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