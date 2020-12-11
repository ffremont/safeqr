#!/bin/sh
if [  $# -le 0 ] 
	then 
	echo ./decrypt.sh 000000.png
	exit 1
fi 


zbarimg --raw $1 > qr_tmp.txt

echo Mot de passe ? 
read mdp

./bin/run decrypt -f qr_tmp.txt -p $mdp

rm qr_tmp.txt

