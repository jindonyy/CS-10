# 🧐 단일 연결 리스트란❔
* 데이터 요소를 선형적으로 연걸한 것이다.
* 머리(head)와 꼬리(tail), 길이 특성을 포함하는 데이터 구조이다.
* node로 구성되며, 각 node에는 value가 있고 다음 node 또는 null에 대한 포인터가 있다.  

<img width="500" src="https://jindonyy.github.io/TIL/assets/images/2021-12-18-single-linked-list_1.png">
<br>

## 배열과의 차이점
### 연결 리스트
* index가 없다.
* 노드들이 다음 노드를 가리키는 포인터를 통해 연결된다.
* 특정 위치의 노드에 접근할 수 없다.
* 리스트 안의 항목을 순차적으로 접근해야하기 때문에 특정 위치의 리스트에 접근하거나 이전 리스트로 돌아가려면 전체 목록을 처음부터 다시 순서대로 읽어야 한다.
* 배열과 달리 요소를 추가할 때 재 할당하거나 재구성하지 않아도 된다.
* 때문에 목록의 특정 지점에 요소를 추가하거나 요소를 제거할 때 유리하다.
* 다만 포인터로 다음 연결 리스트를 지정해야하기 때문에 배열보다 더 많은 메모리를 사용하는 단점이 있다.
### 배열
* 삽입한 순서대로 나열된다.
* 삽입 및 삭제의 위치에 따라 시간이 많이 소요될 수 있다.
* 특정 index에 빠르게 전급할 수 있다.
<br>

## 단일 연결 리스트의 Big O
* 접근
    * O(N) : get, set  
    \- 접근하고자 하는 위치까지 찾아가야 한다.
* 삽입
    * O(1) : push, unshift
    * O(N) : insert
* 제거
    * O(1) : shift
    * O(N) : pop, remove  
    \- 삭제하려는 위치까지 접근해서 삭제해야한다.
* 탐색
    * O(N) - 탐색하고자 하는 위치까지 찾아가야 한다.