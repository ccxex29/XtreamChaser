#!/bin/bash

# Bash script by Louis Raymond (ccxex29) 
# This script is made for easy sass compilation

SASSFILES=$(find ./stylesheets/custom -regex ".+\.sass")
SASSARGS="sass --watch"
FILECOUNT=-1

for FILE in ${SASSFILES};  
do 
	let FILECOUNT=$FILECOUNT+1
	FILEPATH=$(echo "$FILE" | sed -e "s/\.sass//")
	SASSARGS=("$SASSARGS $FILEPATH.sass:$FILEPATH.css")
done

if [[ FILECOUNT -eq -1 ]]; then
	die "No sass file to be compiled"
fi

eval $SASSARGS # Sorry for the evil eval.


