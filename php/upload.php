<?php
  $target_dir = "../uploads/";
  $target_file = $target_dir . basename($_FILES["videoToUpload"]["name"]);
  $uploadOk = 1;
  $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

  // Check if file already exists
  if (file_exists($target_file)) {
    ?>
    <html>
      <meta http-equiv="refresh" content="0; URL=../html/main.html" />
      <body>
        <p>You should automatically be redirected. If not then please click <a href="../html/main.html">here</a>.
      </body>
    </html>
    <?php
    echo "<script> alert('File already exists.'); </script>";
    $uploadOk = 0;
  }

  // Check file size
  if ($_FILES["videoToUpload"]["size"] > 1000000000) {
    ?>
    <html>
      <meta http-equiv="refresh" content="0; URL=../html/main.html" />
      <body>
        <p>You should automatically be redirected. If not then please click <a href="../html/main.html">here</a>.
      </body>
    </html>
    <?php
    echo "<script> alert('Your file is too large.'); </script>";
    $uploadOk = 0;
  }

  // Allow certain file formats
  if($imageFileType != "mp4" && $imageFileType != "webm" && $imageFileType != "ogg") {
    ?>
    <html>
      <meta http-equiv="refresh" content="0; URL=../html/main.html" />
      <body>
        <p>You should automatically be redirected. If not then please click <a href="../html/main.html">here</a>.
      </body>
    </html>
    <?php
    echo "<script> alert('Only MP4, WebM, & Ogg files are allowed.'); </script>";
    $uploadOk = 0;
  }

  // Check if $uploadOk is set to 0 by an error
  if ($uploadOk == 0) {
    echo "<script> alert('Your file was not uploaded.'); </script>";
  // if everything is ok, try to upload file
  } else {
    if (move_uploaded_file($_FILES["videoToUpload"]["tmp_name"], $target_file)) { 
      ?>
      <html>
        <meta http-equiv="refresh" content="0; URL=../html/main.html" />
        <body>
          <p>You should automatically be redirected. If not then please click <a href="../html/main.html">here</a>.
        </body>
      </html>
      <?php
        echo "<script> alert('Your file has been successfully uploaded.'); </script>";
    } else {
      ?>
      <html>
        <meta http-equiv="refresh" content="0; URL=../html/main.html" />
        <body>
          <p>You should automatically be redirected. If not then please click <a href="../html/main.html">here</a>.
        </body>
      </html>
      <?php
      echo "<script> alert('There was an error uploading your file.'); </script>";
    }
  }
?>