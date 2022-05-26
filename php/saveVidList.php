<?php
    $myfile = fopen($_GET["filename"], "w") or die("Unable to open file!");
    
    fwrite($myfile, $_GET["data"]);

    fclose($myfile);
?>