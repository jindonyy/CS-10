# 멀티 프로세스 스케줄링
- [X] 마치 운영체제가 프로세스를 스케줄링하는 것처럼 프로세스를 일정한 시간동안 실행하는 프로그램을 구현한다.
- [X] 우리가 목표로 하는 운영체제는 한 번에 프로세스 하나씩만 1초동안만 실행할 수 있다. 해당 프로세스 외 다른 프로세스는 실행하지 않는다.
- [X] 1초 이후에는 같은 프로세스가 아니라 다른 프로세스를 실행해야 한다. 만약 프로세스가 1개만 남은 경우 반복해서 같은 프로세스를 실행할 수 있다.
- [X] 이 프로그램을 시작하면, 랜덤으로 프로세스 3개를 생성하고 대기 큐에 추가한다.
<br>

## 구현 설명
[https://gist.github.com/jindonyy/10e988a921186380cce52b0b35ae1954#file-multi_process-js](https://gist.github.com/jindonyy/10e988a921186380cce52b0b35ae1954#file-multi_process-js)
1. 랜덤으로 선택되는 프로세스가 중복되지 않고, 맨 앞의 요소 삭제의 시간복잡도를 줄일 수 있도록 `Map`을 사용
```javascript
this.process = new Map();
this.queue = new Map();
```
2. `setProcess`와 `setQueue`에서 프로세스와 큐 셋팅
3. Map은 인덱스로 선택이 되지 않아 entrise를 이용하여 첫번째 요소를 선택하여 큐에서 추가, 삭제를 해주었다.
```javascript
const queueList = this.queue.entries();
const current = queueList.next(); // 첫번째 요소 선택
```

## 구현 결과
<img width="218" src="https://user-images.githubusercontent.com/17706346/150852863-9ccf3d46-2d74-4c00-bc5a-179021a849c4.png">  
<img width="300" src="https://user-images.githubusercontent.com/17706346/150852883-fcd77a9e-06d8-4a47-bcc2-7f2cf2cf48d5.png">
