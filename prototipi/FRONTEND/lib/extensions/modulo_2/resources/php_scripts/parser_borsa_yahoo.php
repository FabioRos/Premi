<?php
        
        define('FILE_PATH__BORSA__','../borsa.json');
        
        
        $data=array();
        $array_for_file=array();
        
        
	$dom = new DOMDocument();
        //MILANO
	$dom->loadHTMLFile('http://it.finance.yahoo.com/q?s=ftsemib.mi');
	$data['MILANO'] = $dom->getElementById("yfs_l10_ftsemib.mi");
        $array_for_file['MILANO']['valore']=$data['MILANO']->nodeValue;
        //PARIGI
        $dom->loadHTMLFile('https://it.finance.yahoo.com/q?s=^fchi');
	$data['PARIGI'] = $dom->getElementById("yfs_l10_^fchi");
        $array_for_file['PARIGI']['valore']=$data['PARIGI']->nodeValue;
        //MADRID
	$dom->loadHTMLFile('http://it.finance.yahoo.com/q?s=^ibex');
	$data['MADRID'] = $dom->getElementById("yfs_l10_^ibex");
        $array_for_file['MADRID']['valore']=$data['MADRID']->nodeValue;
        //BRUXELLES
        $dom->loadHTMLFile('https://it.finance.yahoo.com/q?s=^bfx');
	$data['BRUXELLES'] = $dom->getElementById("yfs_l10_^bfx");
        $array_for_file['BRUXELLES']['valore']=$data['BRUXELLES']->nodeValue;
        
	echo $array_for_file['MILANO']['valore'] ."<br>";
        echo $array_for_file['PARIGI']['valore'] ."<br>";
        echo $array_for_file['MADRID']['valore'] ."<br>";
        echo $array_for_file['BRUXELLES']['valore'] ."<br>";
        //var_dump($array_for_file);
        update_json($array_for_file);
        
        error_reporting(E_ALL ^ E_WARNING); 
       
        function update_json($phpArray){           
            
            file_put_contents(FILE_PATH__BORSA__, json_encode($phpArray));
            
            
        }
        
?>