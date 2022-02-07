# 🐳 M1에서 Docker로 MySQL 설치하기
## Docker 설치하기
1. [docker 홈페이지](https://www.docker.com/products/docker-desktop)로 가서 Mac with Apple Chip 버전의 docker를 설치 한다.
1. 터미널에서 `$ docker -v`명령어로 Docker가 설치됐는지 확인한다.  
<br>
<br>

## MySQL 설치하기
1. MySQL Docker 이미지 다운로드  
    - `$ docker pull mysql`  
    버전을 정하지 않으면 가장 최신 버전을 설치한다.
    - `$ docker pull mysql:5.7`  
    원하는 버전을 지정할 수 있다. 다운로드할 수 있는 MySQL 버전은 [docker hub](https://hub.docker.com/_/mysql/?tab=tags)에서 확인할 수 있다.
    - `docker pull --platform linux/amd64 mysql:5.7`  
    그러나, M1에서는 "no matching manifest for linux/arm64/v8 in the manifest list entries" 와 같은 메세지가 보이고 설치가 되지 않는다.  
    이럴 경우 플랫폼을 명시해주어야 한다.
    ```bash
    $ docker pull --platform linux/amd64 mysql:5.7
    5.7: Pulling from library/mysql
    6552179c3509: Pull complete
    d69aa66e4482: Pull complete
    3b19465b002b: Pull complete
    7b0d0cfe99a1: Pull complete
    9ccd5a5c8987: Pull complete
    2dab00d7d232: Pull complete
    64d3afdccd4a: Pull complete
    6992e58be0f2: Pull complete
    67313986b81d: Pull complete
    7c36a23db0a4: Pull complete
    d34c396e3198: Pull complete
    Digest: sha256:afc453de0d675083ac00d0538521f8a9a67d1cce180d70fab9925ebcc87a0eba
    Status: Downloaded newer image for mysql:5.7
    docker.io/library/mysql:5.7
    ```
1. Docker에 다운로드한 이미지 확인  
    `$ docker images`
    ```bash
    $ docker images
    REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
    mysql        5.7       0712d5dc1b14   11 days ago   448MB
    ```
1. Docker MySQL 컨테이너 생성 및 실행  
    `$ docker run --platform linux/amd64 --name mysql-container -e MYSQL_ROOT_PASSWORD=사용할비밀번호 -d -p 3306:3306 mysql:5.7 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci`  
    - `--platform linux/amd64`  
    MySQL 설치할 때와 같이 플랫폼을 적어주어야 한다.
    - `--character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci`  
    MySQL db를 생성하여 개발 시 한글문제가 발생 할 것이다.  
    한글이 깨지지 않도록 설정하려면 아래 인자값을 넣어주어야 한다.  
    utf8은 3byte 크기의 글자이나 utf8로 할 시, 이모지가 깨지게 된다.  
    utf8mb4는 4byte로 최근 모바일 사용이 늘면서 많이 사용하게 되었다.  
    개발 목적을 고려해서 utf8과 utf8mb4 중 고려할 것!
1. Docker 컨테이너 목록 확인  
    `$ docker ps -a`
    ```bash
    $ docker ps -a
    CONTAINER ID   IMAGE       COMMAND                  CREATED              STATUS          PORTS                               NAMES
    1a8cb7f58c24   mysql:5.7   "docker-entrypoint.s…"   About a minute ago   Up 53 seconds   0.0.0.0:3306->3306/tcp, 33060/tcp   mysql-container
    ```
1.  MySQL 컨테이너 bash 쉘 접속  
    `docker exec -it mysql-container bash`  
    ```bash
    $ docker exec -it mysql-container bash
    root@dc557b92f573:/# mysql -u root -p
    Enter password: # 계정PW
    Welcome to the MySQL monitor.  Commands end with ; or \g.
    Your MySQL connection id is 9
    Server version: 8.0.22 MySQL Community Server - GPL

    Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

    Oracle is a registered trademark of Oracle Corporation and/or its
    affiliates. Other names may be trademarks of their respective
    owners.

    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
    ```  
<br>

### Reference
[https://poiemaweb.com/docker-mysql](https://poiemaweb.com/docker-mysql)  
[http://jmlim.github.io/docker/2019/07/30/docker-mysql-setup/](http://jmlim.github.io/docker/2019/07/30/docker-mysql-setup/)  
[https://bstar36.tistory.com/307](https://bstar36.tistory.com/307)  
[https://calvinjmkim.tistory.com/23](https://calvinjmkim.tistory.com/23)  
<br>
<br>

## MySQL 계정 생성
1. `CREATE USER '사용할ID'@'%' IDENTIFIED BY '사용할PW';`  
    ```bash
    mysql> CREATE USER 'donyy'@'%' IDENTIFIED BY '1q2w3e4r';
    Query OK, 0 rows affected (0.02 sec)
    ```
1. `GRANT ALL PRIVILEGES ON *.* TO '사용할ID'@'%'';`  
    ```bash
    mysql> GRANT ALL PRIVILEGES ON *.* TO 'donyy'@'%';
    Query OK, 0 rows affected (0.01 sec)
    ```
1. `flush privileges;`  
    ```bash
    mysql> CREATE USER 'donyy'@'%' IDENTIFIED BY '1q2w3e4r';
    Query OK, 0 rows affected (0.02 sec)
    ```  
<br>
<br>

## DATABASE 다루기
### DB 생성
`CREATE DATABASE 데이터베이스 default CHARACTER SET UTF8MB4;`  
```bash
mysql> CREATE DATABASE user_info default CHARACTER SET UTF8MB4;
```  
<br>

### DB 삭제
`drop DATABASE 데이터베이스;`  
ex) drop DATABASE user_info;  
<br>

### DB 확인하기
`SHOW DATABASES;`  
<br> 

### DB 이동하기
`USE 데이터베이스;`
```bash
mysql> USE user_info;
Database changed
```
<br>
<br>

## MySQL 권한 부여하기
1. `GRANT 권한 ON 데이터베이스.테이블 TO '아이디'@'호스트' IDENTIFIED BY '비밀번호';`  
    - ID가 donyy, 비밀번호가 1111인 사용자가 user_info 데이터베이스의 모든 테이블(*)에 접근하게 하려면 아래와 같이 한다.
    ```bash
    mysql> GRANT DELETE, INSERT, SELECT, UPDATE ON user_info.* TO 'donyy'@'%'  IDENTIFIED BY '1111';  
    ```
1. `SHOW GRANTS FOR '사용자ID'@'%';`  
    - 지정 ID의 권한이나, 특정 사용자의 권한을 열람한다.
    - '%'는, local이랑 Docker 전부를 이야기 한다.
    ```bash
    mysql> SHOW GRANTS FOR 'donyy'@'%';
    ```
<br>
<br>

## 테이블 다루기
### 테이블 생성
`CREATE TABLE 테이블이름;`
```bash
mysql> CREATE TABLE user_log (
    nickname varchar(64),
    money dec(10, 2),
    last_visit datetime
);
```  
<br>

### 테이블 조회
`SHOW TABLES;`
```bash
mysql> SHOW TABLES;
+---------------------+
| Tables_in_user_log |
+---------------------+
| user_log           |
+---------------------+
1 row in set (0.00 sec)
```  
<br>

### 해당 테이블 조회
`DESC 테이블이름;` 또는 `SHOW COLUMNS FROM 테이블이름;`
```bash
mysql> DESC user_log;
+------------+---------------+------+-----+---------+-------+
| Field      | Type          | Null | Key | Default | Extra |
+------------+---------------+------+-----+---------+-------+
| nickname   | varchar(64)   | YES  |     | NULL    |       |
| money      | decimal(10,2) | YES  |     | NULL    |       |
| last_visit | datetime      | YES  |     | NULL    |       |
+------------+---------------+------+-----+---------+-------+
3 rows in set (0.05 sec)
```  
<br>

### 테이블 삭제
`DROP TABLE 테이블이름;`
```bash
mysql> DROP TABLE user_log;
```