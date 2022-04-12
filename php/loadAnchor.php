<?php
    $myfile = fopen($_GET["filename"], "r") or die("Unable to open file!");
    $anchors = "";

    while(!feof($myfile)) {
        $line = trim(fgets($myfile));
        if (!empty($line)) {
            $line = explode(",", $line);
            $anchors .= $line[3] . "," . $line[4] . "<";
        }
    }

    fclose($myfile);
    echo($anchors);
?>