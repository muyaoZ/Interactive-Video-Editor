<?php
    $videos = glob("../uploads/*");
    $vidlist = "Video List<br/>";

    for ($i = 0; $i < count($videos); $i++) {
        $vidlist .= ($i + 1) . ". <a style='color: black;' href='#' onClick='playVid(\"" . $videos[$i] . "\");return false;'>" . str_replace("../uploads/", "", $videos[$i]) . "</a><br/>";
    }
    
    echo $vidlist;
?>