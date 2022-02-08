# 🏕 데이터 베이스 설치
- [X] 가상 환경을 위해서 docker를 설치한다.
- [X] docker 기반으로 mysql server 5.7 버전을 설치한다.
- [X] docker 명령으로 mysql 컨테이너에 bash로 접속한다.
- [X] 셀 환경변수와 locale 설정을 하고, mysql config를 latin1에서 utf8로 변경한다.

<img width="650" src="https://user-images.githubusercontent.com/17706346/152873314-63f0bfed-e9b6-42e3-a93f-37bd6eeea5c0.png">  
<br>
<br>

## 대용량 데이터 생성
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

- [X] user_log 테이블에 100만건의 대용량 데이터를 생성
- [X] 사용자 nickname 은 영어 단어 100개 + 랜덤 문자열 3자리 + 랜덤 숫자 4자리로 생성
- [X] money 는 1부터 100,000 사이 값을 적당하게 분포
- [X] last_visit 은 최근 한 달 사이로 랜덤 시각으로 생성
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
     ...
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
mysql> CREATE PROCEDURE addUserInfo()
BEGIN
    DECLARE idx INT DEFAULT 1;
    DECLARE word varchar(57);
    DECLARE randomStr varchar(64);
    DECLARE randomMoney INT;
    DECLARE randomTime datetime;
    WHILE (idx <= 1000000) DO
        SET word = (SELECT nickname FROM random_word ORDER BY rand() limit 1);
        SET randomStr = CONCAT(word, CHAR(RAND() * 24 + 97), CHAR(RAND() * 24 + 97), CHAR(RAND() * 24 + 97), FLOOR(RAND() * 10), FLOOR(RAND() * 10), FLOOR(RAND() * 10), FLOOR(RAND() * 10));
        SET randomMoney = FLOOR(RAND() * 100000) + 1;
        SET randomTime = FROM_UNIXTIME(UNIX_TIMESTAMP('2022-01-01 00:00:00') + FLOOR(0 + (RAND() * 2592000)));
        INSERT INTO user_log (nickname, money, last_visit) VALUES (randomStr, randomMoney, randomTime);
        SET idx = idx + 1;
    END WHILE;
END $$
DELIMITER ;

mysql> CALL addUserInfo();
Query OK, 1 row affected (17 min 56.40 sec)
```
<br>
<br>

## 실행 결과
```bash
mysql> select * FROM user_log;
+-------------------+----------+---------------------+
| nickname          | money    | last_visit          |
+-------------------+----------+---------------------+
| workioe7201       | 20302.00 | 2022-01-30 15:08:39 |
| squarexgd3294     | 17246.00 | 2022-01-29 04:19:24 |
                      ...
| beefkrf3603       | 22488.00 | 2022-01-03 05:13:53 |
| trainpsn8105      | 81636.00 | 2022-01-29 02:58:55 |
| eyebrowkml2978    | 99606.00 | 2022-01-22 18:41:43 |
| boardkdq4619      | 58999.00 | 2022-01-18 09:18:09 |
| dayjms4410        | 39958.00 | 2022-01-16 04:46:10 |
| dayhka2913        | 81969.00 | 2022-01-19 21:49:01 |
+-----------------+----------+---------------------+
1000000 rows in set (3.99 sec)
```