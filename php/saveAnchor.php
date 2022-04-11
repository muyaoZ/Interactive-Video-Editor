<?php
    $myfile = fopen($_GET["filename"], "w") or die("Unable to open file!");
    $anchordata = explode("*",$_GET["anchordata"]);

    foreach ($anchordata as $anchor) {
        fwrite($myfile, $anchor . "\n");
    }
    
    fclose($myfile);
?>