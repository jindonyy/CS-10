#!/bin/sh

# day1~16 폴더 생성
for i in {1..16}
do
  mkdir -p day$i
  touch ./day$i/a.cs
done

# day 폴더에서 .cs 파일만 찾아 압축
dayLen=$(ls -l | grep ^d | wc -l)
backupName=backup_`date +%Y%m%d`.zip
for ((i=1 ; i <= $dayLen ; i++))
do
  cd day$i

  if [ -e *.cs ]
  then
    cd ..
    zip $backupName day$i/*.cs
    cd day$i
  else
    echo "day$i is empty"
  fi

  cd ..
done

# 우분투에 백업파일 전송 후 삭제
scp `pwd`/$backupName parallels@10.211.55.4:/home/parallels/backup
rm $backupName

exit 0
