#!/bin/bash

for i in *.emf
do
    unoconv -f pdf "$i"
    p=`echo $i | sed s/\.emf/.pdf/`;
    pdfcrop $p $p;
done
