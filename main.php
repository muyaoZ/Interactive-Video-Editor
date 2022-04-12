<!DOCTYPE html>
<html>
<head>
    <title>Editing Page</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/controls.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<body onload="vidList()">
    <h1>Video Editing Page</h1>

    <div id="parentDiv">
        <div id="playerTitle">Video Player</div>
        <video id="video" disablePictureInPicture controlsList="nodownload">
            <source src="" type="video/mp4">
			Your browser does not support HTML5 video.
        </video>
        <canvas id="canvas" style="border: 2px solid red;" width=800 height=400></canvas>
        <div id="placeholder"></div>
        <div id="video-controls" class="controls" data-state="hidden">
            <button id="playpause" type="button" data-state="play">Play/Pause</button>
            <button id="stop" type="button" data-state="stop">Stop</button>
            <div class="progress">
                <progress id="progress" value="0" min="0">
                    <span id="progress-bar"></span>
                </progress>
            </div>
            <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
        </div>
    </div>
    
    <div class="row">
        <div class="column videoList" id="videoList">
            Video List<br/>
        </div>
    
        <div class="column anchorList" id="anchorList">
            Anchor List<br/>
        </div>
    </div>

    <form action="php/upload.php" method="post" enctype="multipart/form-data">
        Select video to upload: <br/>
        <input type="file" name="videoToUpload" id="videoToUpload"/>
        <input type="submit" value="Upload Video" name="submit"/>
    </form> 
    
    </br>
    <button class="button delete" onclick="delVid();">Delete Current Video</button>
    <button class="button delete" onclick="clearCanvas();">Clear Anchors</button>
    <button class="button" onclick="addMoveAnchor();">Add/Move Anchor</button>
    <button class="button" onclick="deleteAnchor();">Delete Anchor</button>
    
    <button class="button" onclick="getAnchorData();">Get Anchor</button>
    <button class="button" onclick="saveAnchorData();">Save Anchor</button>
    <button class="button" onclick="saveSpec();">Add specification</button>

    </br>

    <script src="js/player.js"></script>
    <script src="js/anchor.js"></script>
    <script src="js/main.js"></script>

    </br>
    <!-- References:</br>
    stock videos from https://www.pexels.com
    file upload: https://www.w3schools.com/php/php_file_upload.asp</br>
    hyperlink onclick function: https://stackoverflow.com/a/11348403</br>
    dropdown list: https://www.w3schools.com/css/css_dropdowns.asp</br>
    two columns: https://www.w3schools.com/howto/howto_css_two_columns.asp</br>
    video change button: https://stackoverflow.com/q/59805468</br>
    delete video: https://stackoverflow.com/a/13295419</br>
    text over image: https://www.w3schools.com/howto/howto_css_image_text.asp</br>
    drag div: https://www.w3schools.com/howto/howto_js_draggable.asp
    custom video controls: https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Video_player_styling_basics
    create and drag anchor: https://stackoverflow.com/a/23459746
    file exist: https://www.kirupa.com/html5/checking_if_a_file_exists.htm
    popup question: https://surveyjs.io/Examples/Library/?id=survey-window&platform=jQuery -->

</body>
</html>