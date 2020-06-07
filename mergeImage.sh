#!/bin/bash
key=4
file="./downloads/"
count=0

while [ -f "${file}file$[($key-1)+$key * $count].png" ]
do
    echo "${file}file$[($key-1)+$key * $count].png"
        if [ $[$count % 2] -eq 0 ]
        then
            echo '11'
        else
            echo '22'
        fi
    count=$[$count + 1]
done
