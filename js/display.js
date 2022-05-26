var vidList = [];

//functions to run on page load
function load() {
    readSpec();
    readVidList();
}

// change video being played
function playVid(videoLink, timestamp) {
    document.getElementById('video').src = videoLink;
    document.getElementById('video').currentTime = timestamp;
    document.getElementById('playerTitle').innerHTML  = "Video Player: " + videoLink.replace("../uploads/", "");
    getAnchorData();
}

// read specification.txt and set first video
// To-Do: auto jump / stop
function readSpec() {
    $.get("../txt/specification.txt", function(data) {
        // videoname, timestamp, default end
        data = data.split(",");
        var video = "../uploads/" + data[0]; 
        playVid(video, data[1]);
    });
}

function readVidList() {
    $.get("../txt/videoList.txt", function(data) {
        vidList = data.split("\n");
    });
}