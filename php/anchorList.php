<?php
    $myfile = fopen($_GET["filename"], "r") or die("Unable to open file!");
    $anchorlist = "Anchor List (Start Time, End Time, Action)<br/>";

    while(!feof($myfile)) {
        $line = trim(fgets($myfile));
        if (!empty($line)) {
            $line = explode(",", $line);
            $anchorlist .=  $line[0] . "," . $line[1] . "," . $line[4] . "<br>";
        }
    }

    fclose($myfile);
    echo($anchorlist);
?>