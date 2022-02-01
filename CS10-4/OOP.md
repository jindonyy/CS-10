# 🧐 객체 지향 프로그래밍(OOP)이란?
더 나은 프로그램을 만들기 위한 프로그래밍 패러다임 중 하나이다.  
프로그래밍에서 필요한 데이터를 추상화시켜 **상태**와 **행위**를 가진 객체를 만들고 그 객체들 간의 유기적인 상호작용을 통해 로직을 구성하는 프로그래밍 방법이다.  
절차 지향 프로그래밍과 반대라고 할 수 있다.  
<img width="600" src="https://user-images.githubusercontent.com/17706346/152006648-c1d3c763-1e8f-4578-8023-24668e600769.png">  
<img width="600" src="https://user-images.githubusercontent.com/17706346/152007323-4494c413-8faa-47bb-8770-2a049c1013cf.png">
<br>

## 객체 지향 프로그래밍의 장점 👍
- 코드 재사용이 용이하다.  
남이 만든 클래스를 가져와서 이용할 수 있고 상속을 통해 확장해서 사용할 수 있다.
- 유지보수가 쉽다.  
절차 지향 프로그래밍에서는 코드를 수정해야할 때 일일이 찾아 수정해야하는 반면 객체 지향 프로그래밍에서는 수정해야 할 부분이 클래스 내부에 멤버 변수혹은 메서드로 존재하기 때문에 해당 부분만 수정하면 된다. 
- 여러 명과 함께 작업하기 적합하다.  
프로젝트를 하다보면 다른 사람이 구현한 함수를 가져다 써야하는 경우가 생긴다. 반대로 내가 구현한 함수를 다른 사람이 가져다 쓰는 경우도 생긴다. 객체 지향으로 구현한다면 각 기능을 독립적인 단위로 모듈화시켜서 관리할 수 있으며, 다른 사람이 내 코드의 내용을 직접 수정하지 않고 데이터에 접근하게 만들 수 있다. 따라서 코드 재사용성을 높이고 의존성을 관리하기 쉬워진다.  
<br>

## 객체 지향 프로그래밍의 단점 👎
- 처리 속도가 상대적으로 느리다.
- 객체가 많으면 용량이 커질 수 있다.
- ⭐️ 설계시 많은 시간과 노력이 필요하다.  
매우 어렵지만 그만큼 중요한 과정이다. 설계를 어떻게 짰느냐에 따라 코드의 효율성에 영향이 있기 때문이다.  
삼각형을 만들기 위해 삼각형을 만들기 위한 공장이 필요하게 된다.  
공장이 있어야 재생산을 할 수 있고 어떤 기능이나 속성이 추가되어도 공장을 수정하여 제품들에 일관되게 반영할 수 있다.  
<br>
<br>

# 🧐 클래스와 인스턴스란?
## 클래스
어떤 문제를 해결하기 위한 데이터를 만들기 위해 추상화를 거쳐 집단에 속하는 속성(attribute)과 행위(behavior)를 변수와 메서드로 정의한 것으로 객체를 만들기 위한 메타정보라고 볼 수 있다.  
<br>

## 인스턴스(객체)
클래스에서 정의한 것을 토대로 실제 메모리에 할당된 것으로 실제 프로그램에서 사용되는 데이터이다.  
<br>

## 예시)
피겨선수 = 클래스  
김연아, 아사다마오 = 인스턴스  
=> 클래스를 인스턴스화하여 객체를 생성한다.  
<br>
<img width="600" src="https://user-images.githubusercontent.com/17706346/149660044-d7546bc7-ba52-4637-b6ce-b8862d714fa6.png">  
<br>
<br>

# 🧐 상속과 다형성이란?
## 상속
상속은 부모가 자식에게 무엇인가 물려줄 때 사용되는 말이다.  
클래스 상속은 한 클래스가 다른 클래스를 상속하는 것이다. 이를 오버라이딩을 통해 기존 기능에 새로운 기능을 추가할수도 자식 클래스에 맞게 아예 새로운 기능을 만들 수도 있다.  
<br>
<img width="450" src="https://t1.daumcdn.net/cfile/tistory/993D574F5FA390ED04">  
<br>

## 다형성
부무에게 상속 받은 변수나 함수 등을 상황에 따라 다르게 변경해서 사용할 수 있는 것이다.  
변경하는 방법으로는 오버라이딩과 오버로딩이 있다.    
<br>

### 오버라이딩(Overriding)
부모 클래스의 메서드와 같은 이름, 매개 변수를 재정의 하는 것이다.  
즉, subclass가 superclass의 메소드를 덮어쓰는 것을 말한다.
```javascript
class shape {
  constructor(name) {
    this.name = name;
    this.point = { x: 0, y: 0 };
  }

  getArea(result) {
    this.distance = 0;
    console.log(`${this.name} 의 넓이는 ${result}입니다.`);
  }
}

class Triangle extends shape {
  getArea() {
    // triangle.getArea()을 호출할 때
    // shape의 getArea()가 아닌, 이 메서드가 호출된다.
  }
}

const triangle = new Triangle();
```  
<br>

### 오버로딩(Overloading)
오버로딩(Overloading)은 같은 이름, 다른 매개변수를 가진 메소드가 여러 개 존재하는 것을 말한다. 매개변수가 다르면 다른 메소드임을 알 수 있기 때문에 가능한 기능인데, 자바스크립트에서는 기본적으로 불가능하다.  
<br>
<br>

# this와 super키워드
부모 메서드 전체를 교체하지 않고, 부모 메서드를 토대로 일부 기능만 변경해야 할 때가 있을 것이다다. 또는 부모 메서드의 기능을 확장하고 싶을 때가 있다. 이럴 때 커스텀 메서드를 만들어 작업하게 되는데, 이미 커스텀 메서드를 만들었더라도 이 과정 전·후에 부모 메서드를 호출하고 싶을 때가 있다.  
이럴 때 super 키워드를 사용한다.
- super.method(...)는 부모 클래스에 정의된 메서드, method를 호출합니다.
- super(...)는 부모 생성자를 호출하는데, 자식 생성자 내부에서만 사용 할 수 있습니다.

```javascript
class shape {
  constructor(name) {
    this.name = name;
    this.point = { x: 0, y: 0 };
  }

  getDistance() {
    // 길이 구하기
    return distance;
  }

  getArea() {
    const result = this.getDistance();
  }
}

class Triangle extends shape {
  constructor(name, pointLength) {
    super(name);
    this.pointLength = pointLength;
  }

  getArea() {
    super.getArea(); // 부모 클래스의 getArea을 호출해 넓이를 구하고,
    this.print(); // 출력합니다.
  }

  print() {
    console.log(`${this.name} 의 넓이는 ${result}입니다.`);
  }
}

let triangle = new Triangle("triangle", 10);
console.log(triangle.name); // triangle
console.log(triangle.pointLength); // 10
```
<br>
<br>

## Reference
[https://ko.javascript.info/class-inheritance#ref-231](https://ko.javascript.info/class-inheritance#ref-231)  
[https://parksb.github.io/article/1.html](https://parksb.github.io/article/1.html)