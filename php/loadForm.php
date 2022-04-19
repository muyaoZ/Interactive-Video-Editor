<?php
    $videos = glob("../uploads/*");
    $vidlist = "";

    for ($i = 0; $i < count($videos); $i++) {
        // $vidlist .=  "<option>" . str_replace("../uploads/", "", $videos[$i]) . "</option></br>";
        $vidlist .= str_replace("../uploads/", "", $videos[$i]) ."<";
    }
    
    $vidlist =substr($vidlist, 0 , -1);
    echo $vidlist;
?>