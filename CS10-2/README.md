# 가상머신과 리눅스, shell script
리눅스/유닉스 환경에 대해 학습하고, 터미널로 리눅스 쉘 환경에 익숙해지는 것이 목표다.
<br>
<br>

# 🖥 가상 환경 (Virtual Machine)
## 1. 가상 환경 설치하기
- local 환경: MAC M1
- 사용 tool: Parallels와 Ubuntu를 사용하여 Linux 가상 환경 설치  
<img width="1000" alt="ubuntu" src="https://user-images.githubusercontent.com/17706346/148432017-3a7d89f8-5872-4054-ba20-60fd131d58b0.png">  
< parallels를 통한 ubuntu 실행 화면 >

<br>

## 2. openssh 설치  
ssh는 네트워크를 통해 다른 컴퓨터에 접근하고 명령을 실행할 수 있게 해주는 프로토콜이다.  
리눅스 터미널을 사용하고 있는 Mac은 openssh 명령어를 사용하여 타 컴퓨터에 접근이 가능하다.  
Windows는 대표적인 ssh client인 putty를 사용하여 다른 서버에 접근해야 한다.  
하지만 Windows 10 으로 버전이 업그레이드되면서 openssh client를 Windows 터미널인 powershell에 설치할 수 있게 변했다고 한다.  
- local : mac에서 실행하여 따로 tool을 이용하지 않았다.
- ubuntu : terminal을 이용해 설치
  1. openssh 설치 여부 확인  
    `dpkg -l | grep openssh`
  2. apt-get 명령어로 openssh-server 설치  
    `sudo apt-get install openssh-server`
  3. ssh 서버 실행하기

  ```
  sudo service ssh start 
  service --status-all | grep +
  service --status-all | grep ssh
  ```
  4. ssh 접속하기  
  `ssh [서버 아이디]@[아이피 or 서버 이름 or 도메인]`

<br>
<br>

# 📝 vi 편집기
### - 입력모드
- 입력을 원하는 글자를 입력하고, 화면은 입력한 상태를 그대로 보여주는 모드
- i, a, o키를 통해서 입력을 할 수 있다
- `vi` : 파일 편집으로 이동
- `cat` : 작성한 텍스트를 그대로 출력

* 입력 명령어
  - `i` : 현재 커서 위치에 삽입(커서 위치에 문자를 오른쪽으로 한 칸 밀고 삽입)
  - `a` : 현재 커서 위치 다음에 삽입
  - `o` : 현재 커서가 위치한 줄의 아랫줄에 삽입

* 지우기 명령어
  - `x` : 현재 커서 위치의 문자를 지운다
  - `dw` : 현재 커서가 위치한 단어를 지운다
  - `dd` : 현재 커서가 위치한 줄을 지운다

* 복사하기와 붙이기
  - `yy` : 현재 커서가 위치한 줄을 버퍼에 복사한다
  - `yw` : 현재 커서가 위치한 단어를 버퍼에 복사한다
  - `p` : 버퍼에 들어 있는 내용을 현재 커서가 위치한 줄의 아래에 붙인다

* 치환
  - `cw` :현재 위치의 단어를 바꾼다
  - `~` : 대소문자를 서로 바꾼다

<br>

### - 명령모드
- 한 글자 또는 두 글자 명령을 사용하여 커서를 이동하고 글자를 삭제 및 교체하고, 문자열을 검색하는 모드
- '삑'하는 벨 소리로 잘못된 입력을 알려줍니다

* 커서 이동 명령
  - `e` : 한 단어 뒤로 이동
  - `b` : 한 단어 앞으로 이동
  - `0` : 줄의 제일 처음부터 이동
  - `$` : 줄의 제일 끝으로 이동

<br>

### - 라인모드
- 콜론(:) 프롬프트에서 명령을 입력하여 저장, 편집, 검색 기능 등 다양한 기능을 제공하는 모드
- 자동 저장하는 기능이 없어서 자주 입력 내용을 저장해주어야 한다

* 기본 명령어
  - `:!`  :  편집기를 벗어나지 않은 상태로 shell command를 실행한다
  - `:w`  : 편집하는 내용을 덮어쓰기로 저장한다
  - `:wq`  :  현재 편집하는 내용을 강제로 저장하고 종료한다
  - `:wq!`  :  현재 편집하는 내용을 강제로 저장하고 종료한다

* 문자열 검색
  - `/패턴` : 패턴에 해당하는 내용을 현재 커서위치로 부터 오른쪽에서 그리고 아래쪽으로 찾는다

* set의 환경변수
  - `:set nu` : 라인 넘버 붙어넣기
  - `:set ai` : 자동 들여쓰기
  - `:set ic` : 문자열 검색시 대소문자 구분 안한다

<br>

### - 실행모드
- `sh test.sh` 으로 실행
- `chmod +x test.sh` : 초기 생성 sh 는 실행 권한이 없다. 명령으로 권한 변경 후 `./test.sh`를 입력하여 실행 가능하다.
- `ls -l *.sh` : 파일 권한, 경로, 날짜, 이름 등의 정보를 표시 

<br>
<br>

# 🔑 shell script
### - 변수의 기본
- 변수를 사용하기 전에 미리 선언하지 않으며, 변수에 처음 값이 할당 되면서 자동으로 변수가 생성
- 모든 변수는 **문자열**로 취급
- 변수 이름은 대소문자를 구분
- 변수를 대입할 때 ‘=‘ 좌우에는 공백이 없어야 한다.
- 실행할 때 앞에 $를 붙여준다 ($myvar)
- 띄어쓰기를 인식하지 못하므로 띄어쓰기를 써야할 경우 큰따옴표 또는 작은 따옴표로 묶어준다.
- $를 문자로 출력해야할 경우 작은 따옴표로 묶거나 또는 앞에 \를 붙여준다.
- 문자열로만 인식하기 때문에 그냥 입력 시 계산을 할 수 없다.
- 변수 여러개 사용하기: https://codechacha.com/ko/shell-script-concat-strings/

```
#!/bin/sh
myvar=“Hello World”
echo $myvar
echo “$myvar”
echo ‘$myvar’
echo \$myvar
myvar=Hi
echo ‘$myvar’ = $myvar
exit 0

===== 출력 =====
Hello World
Hello World
$myvar
$myvar
$myvar = Hi
```

<br>

### - 숫자 계산
- 변수에 대입된 값은 모두 문자열로 취급
- 변수에 들어 있는 값을 숫자로 해서 +, -, *, / 등의 연산을 하려면 expr을 사용
- 연산자 사이에 띄어씌기를 넣어야 한다.
- 수식에 괄호 또는 곱하기 (*)는 그 앞에 꼭 역슬래쉬(\) 붙인다.

```
#!/bin/sh
num1=100
Num2-$num1+200
echo $num2
num3=‘expo $num1 + 200’  
echo $num3
num4=‘expo \($num1 + 200 \) / 10 \*2’
echo $num4
exit  0

===== 출력 =====
100+200
300
60
```

<br>

### - 파라미터 변수
- 파라미터 변수는 $0, $1, $2… 의 형태를 가진다
- 전체 파라미터는 $* 로 표현

```
#!/bin/sh
echo “실행파일 이름은 <$0>이다”
echo “첫번째 파라미터는 <$1>이고, 두번째 파라미터는 <$2>이다”
echo “전체 파라미터는 <$*>”
exit 0

===== 출력 =====
sh test.sh 값1 값2 값3
실행파일 이름은 <test.sh>이다
첫번째 파라미터는 <값1>이고, 두번째 파라미터는 <값2>이다
전체 파라미터는 <값1 값2 값3>다
```

<br>

### - 명령어
- 파일 또는 폴더 접근 권한 변경  
`chmod [변경 될 퍼미션 값] [변경 할 파일이름]`  
참고 url : https://commin.tistory.com/85  
<img width="831" alt="ubuntu2" src="https://user-images.githubusercontent.com/17706346/148432092-65ac1d1b-3855-4a74-b6d6-e72478e48bb4.png">

- 터미널 날짜 출력  
`$ date` : 2022년 1월 6일 목요일 16시 45분 33초 KST  
`$ date +%Y-%m-%d ` : 2022-01-06  
<img width="492" alt="ubuntu3" src="https://user-images.githubusercontent.com/17706346/148432123-82df807c-c483-4c41-b039-6660b9d5db0e.png">

- 로컬 ip주소 확인 방법  
  `$ ipconfig`
- 현재 디렉토리 경로 표시 (맥에서만 가능)  
  `$ pwd `
- 현재 디렉토리 안에 있는 파일들 목록 표시  
  `$ ls -la `
- 파일 또는 폴더 복사  
  `$ cp web /bin` : "web"폴더를 /bin에 복사
- 파일 또는 폴더 이동  
  `$ mv web /bin` : "web"폴더를 /bin에 복사
- 폴더 생성  
  `$ mkdir web` : "web" 폴더를 현재 경로에 생성
- 파일 생성  
  `$ touch index.html` : "index.html" 파일을 현재 경로에 생성  
  `$ touch js/aap.js`
- 폴더 및 파일 삭제  
  `$ rm text.txt` ` $ rm –f text.txt` : "text.txt" 파일 삭제  
  `$ rm *` : 현재 경로의 폴더에 모든 파일 삭제  
  `$ rm –f *` : 무조건 강제 삭제  
  `$ rm –r folder1 *` : 지정 폴더 안의 파일 전부 삭제
- root 계정으로 전환  
  `$ sudo -i` : 현재 디렉토리를 유지  
  `$ sudo -s` : root 디렉토리로 이동
- 현재 사용자 확인  
  `$ whoami`
- 반복문  
  https://devpouch.tistory.com/128
- 파일 또는 폴더 찾기  
  https://www.plesk.com/blog/various/find-files-in-linux-via-command-line/
- zip으로 압축하기  
  https://www.lesstif.com/lpt/linux-zip-unzip-80248839.html

<br>
<br>

# shell script 사용해보기
### 1. 폴더와 파일 생생 후 zip으로 압축하기
1. 로컬에 `day1` 부터 `day16`까지 문제 해결을 저장한 디렉토리를 생성한다.
1. 각 디렉토리 아래에 `a.cs` 파일을 생성한다.
1. bash 셀 스크립트로 현재 디렉토리 아래있는 `day1`에서 `day16` 디렉토리 중에서 있는 `.cs` 파일만 `zip`으로 압축해서 백업하는 스크립트를 구현한다.
1. `.cs` 파일이 없는 디렉토리가 있으면, 어느 디렉토리가 없는지 문구를 출력한다.

<img width="1420" alt="ubuntu4" src="https://user-images.githubusercontent.com/17706346/148692074-d7256b3a-1082-45ec-99d8-f6bf5885f7a2.png">

<br>

### 2. 압축파일 가상환경으로 전송하기
1. 스크립트는 `.cs` 파일들을 압축해서 가상머신 리눅스 `/backup` 경로에 복사한다.
1. 로컬에 생성한 `.zip` 파일을 가상 머신으로 복사한다.
1. 백업 파일 이름에는 실행한 날짜를 붙여서 복사한다. 예시) `backup_20220105.zip`

<img width="1126" alt="ubuntu5" src="https://user-images.githubusercontent.com/17706346/148692082-5e0a41ca-8a55-422c-94af-9b3cf58efc9c.png">