//functions to run on page load
function load() {
    playVid("../uploads/leaves.mp4");
}

// change video being played
function playVid(videoLink) {
    document.getElementById('video').src = videoLink;
    document.getElementById('playerTitle').innerHTML  = "Video Player: " + videoLink.replace("../uploads/", "");
    getAnchorData();
}