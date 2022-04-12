<!DOCTYPE html>
<html>
<head>
    <title>Display Page</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/controls.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<body">
    <h1>Video Display Page</h1>

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

    </br>

    <script src="js/player.js"></script>
    <script src="js/anchor.js"></script>
    <script src="js/main.js"></script>

</body>
</html>