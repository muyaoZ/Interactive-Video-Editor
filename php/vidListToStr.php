<?php
    $videos = glob("../uploads/*");
    $vidlist = "";

    for ($i = 0; $i < count($videos); $i++) {
        $vidlist .= $videos[$i] . "\n";
    }
    
    $vidlist =substr($vidlist, 0 , -2);
    echo $vidlist;
?>