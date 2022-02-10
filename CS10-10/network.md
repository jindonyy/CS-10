# 🌍 네트워크
- 유무선 통신 기술을 이용하여 여러 기기를 하나로 연결한 것
- 네트워크를 구성하려면 하드웨어적으로는 두기기를 연결하고, 소프트웨어적으로는 프로토콜을 마련해야 한다.
    - 프로토콜
        - 다른 기기 간에 통신을 하기 위해 정한 약속
        - 데이터를 누가 먼저 보낼지, 얼마만 한 크기로 보낼지, 다 보낸 다음에는 어떻게 종료할지 등의 약속
- 예를 들어 전화기는 전화선으로 연결되고, 전화를 하려면 수화기를 들고 전화번호를 누르고 상대방이 수화기를 들어야하는 프로토콜을 지켜야 한다.  
<br>

## 클라이언트와 서버
- 클라이언트/서버는 두 개의 컴퓨터 프로그램 사이에 이루어지는 역할 관계를 나타내는 것이다.
- 클라이언트는 다른 프로그램에게 서비스를 요청(Request)하는 프로그램이며, 서버는 그 요청에 대해 응답(Response)을 해주는 프로그램이다.
- 요청과 응답에 주고 받는 것을 메세지라고 한다.
- 예를 들어, 누군가 자신의 주문 내역을 조회하려고 할 때, 먼저 자신의 PC에 있는 클라이언트 프로그램(웹 브라우저 또는 쇼핑몰 어플리케이션)이 쇼핑몰 서버에 그 요구사항을 전송하게 되고, 쇼핑몰 서버는 다시 주문 내역을 검색해주는 일을 하는 데이터베이스 서버에 그 요구사항을 보내게 된다. 데이터베이스 서버가 주문 내역을 검색하여 그 내용을 쇼핑몰 서버에 보내면, 쇼핑몰 서버는 다시 그 내용을 주문 내역을 요구한 PC의 클라이언트 프로그램으로 보냄으로써, 최종적으로 화면에 나타나게 된다.

## 인터넷 통신
클라이언트와 서버가 가까이 있다면 전선을 이용하여 통신하면 되지만, 둘의 거리가 멀다면 우리는 인터넷이라는 매개체를 이용하여 통신해야 한다.  
인터넷 망은 단순하지 않다. 수많은 노드(서버)들을 걸쳐서 메세지가 전달되지만 그 내역이 감춰져 있어 우리가 직접 확인하기 어렵다.  
<img width="700" src="https://user-images.githubusercontent.com/17706346/153470858-37b92831-dadc-4b1b-9a14-73241c258fa7.png">  
<br>

## IP(Internet Protocol)
- 여러 종류의 LAN을 선으로 연결하여 하나의 네트워크로 만든 후, LAN 사이에 데이터 전송을 위한 프로토콜
### IP의 역할
- 지정한 IP 주소(IP Adress)에 데이터 전달  
    - 인터넷에서 상용하는 주소를 의미한다.  
    - IP Address는 0.0.0.0부터 255.255.255.255까지의 약 42억 개의 주소가 존재한다.  
    - 모든 컴퓨터는 자신을 가르키는 특별한 주소를 가진다.

    <img width="700" src="https://user-images.githubusercontent.com/17706346/153470933-3bd9b9f5-a88b-41fc-9a9e-781814b1de05.png">  

- 패킷(Packet)이라는 통신 단위로 데이터 전달한다.
    - 패킷 안에는 메세지의 출발지의 IP와 목적지의 IP 등이 들어있다.
    <img width="700" src="https://user-images.githubusercontent.com/17706346/153472864-94801cbb-bc7a-4dc9-882d-69bded6f1088.png">  
    <img width="700" src="https://user-images.githubusercontent.com/17706346/153472875-bc96ad80-ace7-4760-81c9-8dbb6fe8fb4f.png">  
    <img width="700" src="https://user-images.githubusercontent.com/17706346/153472887-2598014f-f447-4b74-81a1-593b93293dc1.png">
### IP의 한계
- 비연결성
    - 패킷을 받을 대상이 없거나 서비스 불능 상태여도 패킷을 전송한다.
- 비신뢰성
    - 중간에 연결된 노드가 손실되는 등의 이유로 패킷이 중간에 사라질 수 있지만 이를 확인할 수 없다.
    - 패킷의 전달 순서가 보장되지 않는다.  
    <img width="670" src="https://user-images.githubusercontent.com/17706346/153474074-626d98b7-cfc2-4741-b98c-f21e60b4a0c1.png">

- 프로그램 구분
    - 같은 IP 주소를 사용하는 서버에서 통신하는 애플리케이션이 둘 이상일 경우 어느 어플리케이션의 요청인지 알 수 없다.
<br>

## TCP(Transmission Control Protocol, 전송 제어 프로토콜)
- TCP는  IP의 한계를 보완하기 위해 개발된 데이터 전송 시 오류를 바로잡는 프로토콜이다. 
- TCP는 IP 위에서 작동하도록 설계되었는데 이렇게 만들어진 프로토콜이 TCP/IP이다.
- 메세지가 들어오면 TCP에서 정보를 담아 한번 감싸고, 그 다음 IP에서 또 정보를 담아 한번 더 감싸게 된다.  
<img width="700" src="https://user-images.githubusercontent.com/17706346/153474736-761125fb-1708-46d9-a666-357f6d10a3f8.png">

- TCP/IP의 패킷에는 IP패킷의 한계를 보완하기 위한 출발지 PORT와 목적지 PORT, 전송 제어, 전송 순서, 검증 정보 등이 들어있다.
<img width="700" src="https://user-images.githubusercontent.com/17706346/153475154-f362e002-0722-42a7-98c4-d204aa6dd8ec.png">

### TCP의 특징
- 연결지향
    - TCP 3 way handshake(가상 연결)
    - 연결을 먼저한 뒤 패킷을 전송한다.
- 데이터 전달이 보증된다.
    - 전송이 잘된 경우 응답이 온다. 응답이 없을 경우 전달이 실패한 것.
- 순서가 보장된다.
    - 클라이언트가 패킷1, 패킷2, 패킷3 순으로 전송했지만 서버에 패킷1, 패킷2, 패킷3 순서로 도착한다면 패킷2부터 다시 보내도록 요청한다.

👉 위의 장점들로 신뢰할 수 있는 프로토콜이기 때문에 현재는 대부분(90% 이상) TCP를 사용한다.

### TCP 3 way handshake
TCP는 서버에 연결이 되는 상태인지 확인하기 위해 가상 연결을 해본다.  
<img width="700" src="https://user-images.githubusercontent.com/17706346/153479004-98683180-be3d-44d4-8426-e9ba78296264.png">

1. 클라이언트가 서버에게 접속 요청(SYN)을 보낸다.
2. 서버가 응답할 수 있는 상황이면 서버 또한 클라이언트와 연결을 해야하므로 연결 요청(SYN)과 앞에 받았던 요청의 수락(ACK)을 함께 보낸다.
3. 그럼 서버의 요청에 대한 수락(ACK)을 클라이언트가 다시 보낸다.

그러나, 상태 확인을 위한 가상연결일뿐 실제로 중간의 수많은 노드(서버)들이 연결된 것은 아니다!
<br>

## UDP(User Datagram Protocol, 사용자 데이터그램 프로토콜)
- IP처럼 기능이 거의 없어 하얀 도화지에 비유할 수 있다.
- TCP의 특징(연결지향, 데이터전달 보증, 순서보장)들을 전부 가지고 있지 않다.
- 데이터 전달 및 수서가 보장되지 않지만 단순하고 빠르다.
- IP기능 + **PORT** + 체크섬(검증 정보)만 들어있다.

👉 TCP는 정해진 규칙(3 way handshake)과 안에 데이터들이 많아 전송속도가 비교적 느리다.  
그런데 이미 TCP의 점유율이 90%가 넘기 때문에 TCP를 개선하기 힘들다.  
때문에 최근에는 TCP는 그대로 두고 UDP를 추가하여 최적화하고 있는 추세다.  
최근 HTTP3는 UDP프로토콜을 사용하기 시작하여 각광받고 있다.  
<br>

## PORT
- 같은 IP내에서 프로세스를 구분하기 위해 사용한다.
- IP 주소를 아파트 이름이라고 한다면 PORT는 동, 호수이다.
- 0 ~ 65535 할당 가능
- 0 ~ 1023은 잘 알려진 포트이므로 사용하지 않는 것이 좋다.
    - FPT - 20, 21
    - TELNET - 23
    - HTTP - 80
    - HTTPS - 443
    
<img width="700" src="https://user-images.githubusercontent.com/17706346/153481643-8956ae76-b287-40f1-a496-f78817221ad6.png">  
<br>
<br>

## DNS(Domain Name System, 도메인 네임 시스템)
- 전화번호부처럼 도메인명을 저장된 IP주소로 변환해주는 시스템이다.
- IP는 기억하기 어렵고, 접속할 때마다 변경될 수 있다.  
때문에 우리는 도메인이라는 것을 사용한다.  
ex) google.com, naver.com

<img width="700" src="https://user-images.githubusercontent.com/17706346/153483182-85f956f2-7c95-4164-9788-10a759251ca7.png">  
<br>
<br>

## URI(Uniform Resource Identifier)
- Uniform: 리소스를 식별하는 통일된 방식  
Resource: 자원, URI로 식별할 수 있는 모든 것(제한 X)  
Identifier: 다른 항목과 구분하는데 필요한 정보  
👉 즉, 요청에 응답으로 보낼 자원을 식별하기 위해 필요한 정보로 통일된 방식이여야 한다.
- URI안에 URL과 URN의 방식이 있다.  
<img width="500" src="https://user-images.githubusercontent.com/17706346/153484154-d0a249d0-0ad8-4f5b-a3d3-e2e32b5ff49b.png">  
<br>
<br>

## URL(Uniform Resource Locator), URN(Uniform Resource Name)
- URL은 리소스가 있는 **위치(Location)**을 지정한다.
- URN은 리소스가 있는 **이름(Name)**을 지정한다.
- URN에 사용되는 이름만으로 실제 리소스를 찾을 수 있는 방법이 보편화 되지 않아 URN을 사용하는 경우는 거의 없다.
- 때문에 URI와 URL을 같은 의미로 받아들여도 된다.  
<br>

## URL 문법
`scheme://[userinfo@]host[:port][/path][?query][#fragment]`  
(대괄호들은 생략 가능한 부분들이다.)
- 프로토콜 + 호스트명 + 포트번호 + 패스 + 쿼리(요청) 파라미터
- ex) https://www.google.com:443/search?q=hello&hl=ko  
프로토콜(https) + 호스트명(www.google.com) + 포트번호(443) + 패스(/search) + 쿼리 파라미터(q=hello&hl=ko )  
<br>

### URL scheme(:제도)
- 주로 프로토콜을 사용한다.
- 프로토콜
    - 다른 기기 간에 통신을 하기 위해 정한 약속
    - ex) http, https, ftp 등등
- http는 80포트, https는 443 포트를 주로 사용한다.
- 생략이 가능하다.
- https(HTTP Secure)는 http에 강력한 보안기능이 추가된 것이다.  
<br>

### URL userinfo
- URL에 사용자 정보를 포함해서 인증할 때 사용한다.
- 거의 사용하지 않는다.  
<br>

### URL host
- 호스트명
- 도메인명 또는 IP 주소를 직접 사용 가능하다.
- ex) google.com / 127.0.0.1  
<br>

### URL PORT
- 접속시 사용하는 포트
- 일반적으로 생략한다.
    - 스키마로 http와 https를 주로 사용하기 때문에 그에 해당하는 80과 443을 생략하는 것  
    - 두 스키마 외에 특정 서버에 접속할 때는 입력하는 경우도 있다.  
<br>

### URL path
- 리소스 경로
- 계층적 구조이다.
    - ex) /home/file1.jpg
    - ex) /members/100
    - ex) /items/iphone12
- 생략 가능하다.  
<br>

### URL query
- key=value 형태
- ? 시작하며, &로 추가할 수 있다.
- ex) ?keyA=valueA&keyB=valueB
- query parmeter, query string 등으로 불린다.
- 웹서버에 제공하는 파라미터, 문자 형태
- 생략 가능하다.  
<br>

### URL fragment
- html 내부 북마크, 즐겨찾기 등에 사용
- 서버에 전송하는 정보가 아니다.
- 생략 가능하다.  
<br>
<br>

## 웹브라우저 요청 흐름
<img width="700" src="https://user-images.githubusercontent.com/17706346/153493873-02d0e19f-971e-42d9-b3f1-94213eda8924.png">  
<img width="700" src="https://user-images.githubusercontent.com/17706346/153493884-83e2bd9c-0e6e-458d-bba8-ba4a07aa030b.png">  
<img width="700" src="https://user-images.githubusercontent.com/17706346/153493882-f31b91a0-f200-4553-927e-d100ec490ae3.png">