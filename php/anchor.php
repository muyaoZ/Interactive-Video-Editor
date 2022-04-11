<?php
    $myfile = fopen($_GET["filename"], "a") or die("Unable to open file!");
    fclose($myfile);
    // file not used
?>