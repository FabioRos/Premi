#!/bin/bash

for i in *.svg
do
	#elimino il watermark di Visual Paradigm se presente
	sed -i -e "s/ >Visual Paradigm for UML Community Edition \[not for commercial use\] />/g" $i
	#trasformo l'immagine
    p=`echo $i | sed s/\.svg/.pdf/`;
    echo $i "->" $p;
    inkscape -z "$i" -A "$p"    
done
