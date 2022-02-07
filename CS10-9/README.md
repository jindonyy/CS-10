# 데이터 베이스 설치
- [X] 가상 환경을 위해서 docker를 설치한다.
- [X] docker 기반으로 mysql server 5.7 버전을 설치한다.
- [X] docker 명령으로 mysql 컨테이너를 실행한다.
- [X] docker 명령으로 mysql 컨테이너에 bash로 접속한다.
- [X] 셀 환경변수와 locale 설정을 하고, mysql config를 latin1에서 utf8로 변경한다.
- [ ] SQL 문법을 학습하고 DDL(Data Definition Language)과 DQL(Data Query Language) 예제를 연습한다.
- [X] docker 기반으로 mysql을 설치했는지 여부를 확인할 수 있도록 터미널 또는 GUI로 접속한 화면 캡처하고 gist에 함께 저장한다.

<img width="650" src="https://user-images.githubusercontent.com/17706346/152873314-63f0bfed-e9b6-42e3-a93f-37bd6eeea5c0.png">  
<br>
<br>

# DB 요구사항
- [X] Database 이름을 정하고 Database를 생성한다.
- [X] DB에 프로그램에서 연결할 User를 정하고 생성한다. 접속 권한을 설정한다.  
<br>
<br>

# 대용량 데이터 생성
- [X] 다음과 같은 정보를 포함하는 user_log 테이블을 생성한다.
```bash
mysql> CREATE TABLE user_log (
    nickname varchar(64),
    money dec(10, 2),
    last_visit datetime
);

mysql> desc user_log;
+------------+---------------+------+-----+---------+-------+
| Field      | Type          | Null | Key | Default | Extra |
+------------+---------------+------+-----+---------+-------+
| nickname   | varchar(64)   | YES  |     | NULL    |       |
| money      | decimal(10,2) | YES  |     | NULL    |       |
| last_visit | datetime      | YES  |     | NULL    |       |
+------------+---------------+------+-----+---------+-------+
3 rows in set (0.01 sec)
```

- [X] user_log 테이블에 100만건의 대용량 데이터를 생성해서 넣어야 한다.
- [X] 다음 조건을 만족하는 데이터를 직접 테이블에 넣거나 또는 INSERT 구문을 작성하는 스크립트를 작성한다.
- [ ] 사용자 nickname 은 영어 단어 100개 + 랜덤 문자열 3자리 + 랜덤 숫자 4자리로 생성한다.
- [X] money 는 1부터 100,000 사이 값을 적당하게 분포하게 만든다.
- [X] last_visit 은 최근 한 달 사이로 랜덤 시각으로 생성한다.
```bash
mysql> CREATE TABLE random_word(
    nickname varchar(57)
);
Query OK, 0 rows affected (0.03 sec)

mysql> INSERT INTO random_word (nickname) VALUES ('flower'),('garden'),('car'),('tea'),('color'),('eye'),('toe'),('foot'),('chic'),('clown'),('lion'),('station'),('door'),('cap'),('hat'),('ear'),('nose'),('face'),('country'),('city'),('elf'),('house'),('home'),('leaf'),('loof'),('snicker'),('pants'),('jeans'),('book'),('hand'),('low'),('school'),('nail'),('pencil'),('pen'),('bus'),('eyebrow'),('apple'),('stair'),('chin'),('spoon'),('chapstick'),('bowl'),('giraffe'),('elephant'),('bird'),('human'),('clothes'),('food'),('fruit'),('fish'),('beef'),('meat'),('dog'),('cat'),('whale'),('head'),('story'),('blanket'),('pillow'),('table'),('office'),('chair'),('picture'),('note'),('nation'),('train'),('taxi'),('airplane'),('boat'),('cruise'),('river'),('ruler'),('potato'),('zebra'),('work'),('board'),('plant'),('cup'),('pack'),('school'),('banana'),('orange'),('university'),('knife'),('knight'),('night'),('day'),('mountain'),('skirt'),('talk'),('bottle'),('triangle'),('circle'),('square'),('dot'),('stripe'),('trick'),('question'),('answer');
Query OK, 100 rows affected (0.01 sec)
Records: 100  Duplicates: 0  Warnings: 0

mysql> select * FROM random_word;
+------------+
| nickname   |
+------------+
| flower     |
| garden     |
| car        |
| tea        |
| color      |
| eye        |
| toe        |
| foot       |
| chic       |
| clown      |
| lion       |
| station    |
| door       |
| cap        |
| hat        |
| ear        |
| nose       |
| face       |
| country    |
| city       |
| elf        |
| house      |
| home       |
| leaf       |
| loof       |
| snicker    |
| pants      |
| jeans      |
| book       |
| hand       |
| low        |
| school     |
| nail       |
| pencil     |
| pen        |
| bus        |
| eyebrow    |
| apple      |
| stair      |
| chin       |
| spoon      |
| chapstick  |
| bowl       |
| giraffe    |
| elephant   |
| bird       |
| human      |
| clothes    |
| food       |
| fruit      |
| fish       |
| beef       |
| meat       |
| dog        |
| cat        |
| whale      |
| head       |
| story      |
| blanket    |
| pillow     |
| table      |
| office     |
| chair      |
| picture    |
| note       |
| nation     |
| train      |
| taxi       |
| airplane   |
| boat       |
| cruise     |
| river      |
| ruler      |
| potato     |
| zebra      |
| work       |
| board      |
| plant      |
| cup        |
| pack       |
| school     |
| banana     |
| orange     |
| university |
| knife      |
| knight     |
| night      |
| day        |
| mountain   |
| skirt      |
| talk       |
| bottle     |
| triangle   |
| circle     |
| square     |
| dot        |
| stripe     |
| trick      |
| question   |
| answer     |
+------------+
100 rows in set (0.00 sec)
```

```bash
mysql> DELETE FROM user_log; # user_log 테이블 내용 삭제 (테스트용)
mysql> DROP PROCEDURE addUserInfo; # addUserInfo 프로시져 있을 경우 삭제

mysql> DELIMITER $$ # 구분 기호를 $$로 바꿔주기
mysql> CREATE PROCEDURE addUserInfo() # addUserInfo이라는 이름의 프로시져
BEGIN
    DECLARE i INT DEFAULT 1; # i 변수 선언, defalt로 1설정
    DECLARE money INT; # money 변수 선언
    DECLARE time datetime; # time 변수 선언
    WHILE (i <= 100) DO # 반복문 작성(i가 1,000,000이 될 때까지 반복)
        SET money = floor(rand() * 100000); # 0~100000까지 랜덤 숫자 지정
        SET time = FROM_UNIXTIME(UNIX_TIMESTAMP('2022-01-01 00:00:00') + FLOOR(0 + (RAND() * 2592000))); # 1월 1일 기준 한달 날짜 랜덤 지정
        INSERT INTO user_log (nickname) SELECT nickname FROM random_word ORDER BY rand() limit 1; # user_log 테이블 nickname에 random_word 테이블 nickname을 랜덤으로 1개 추가
        INSERT INTO user_log (money, last_visit) VALUES (money, time); # user_log 테이블 money, last_visit에 변수 money, time을 추가
        SET i = i + 1; # i에 1을 더해주고 WHILE문 처음으로 이동
    END WHILE;
END $$
DELIMITER ; # 구분 기호를 다시 ;로 바꿔주기

mysql> CALL addUserInfo();
Query OK, 1 row affected (0.19 sec)
```

```bash
mysql> select * FROM user_log;
```