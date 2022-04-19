//functions to run on page load
function load() {
    vidList();
    specForm();
}

// change video being played
function playVid(videoLink) {
    document.getElementById('video').src = videoLink;
    document.getElementById('playerTitle').innerHTML  = "Video Player: " + videoLink.replace("../uploads/", "");
    getAnchorData();
}

// refresh videoList
function vidList() {
    $("#videoList").load("../php/videoList.php");
}

// delete video file from folder
function delVid() {
    var filename = document.getElementById("video").src;
    var filepath = "../" + filename.substring(filename.indexOf("u"));
    var anchorfile = "../anchor/" + filename.split("/")[4].split(".")[0] + ".anchor";
    if (!!filename) {
        if (confirm("Delete video " + filename.split("/")[4] + "?")) {
            $.get("../php/delete.php?filename=" + filepath + "&anchorfile=" + anchorfile);
            vidList();
        }
        else {
            alert("Action cancelled.");
        }
    }
    else {
        alert("No video selected.");
    }
}

// auto generate video names in form
function specForm() {
    var form = document.getElementById("startVid");
    $.get("../php/loadForm.php", function(data) {
        data = data.split("<");
        for (var i = 0; i < data.length; i ++) {
            form.options[form.options.length] = new Option(data[i]);
        }
    });
}

// loadedmetadata event listerner
function videoLoadedMetaData() {
    var vid = document.getElementById("hiddenVid");
    vid.removeEventListener('loadedmetadata', videoLoadedMetaData);
    var x = document.forms["specForm"]["timestamp"].value;
    if (isNaN(x) || x < 0 || x > vid.duration) {
        alert("Input not valid, start time not within duration of selected video.");
    }
    else {
        alert("form submitted");
        var spec = "";
        spec += document.getElementById("startVid").value + ",";
        spec += document.getElementById("timestamp").value + ",";
        spec += document.getElementById("defaultEnd").value;
        var filename = "../txt/specification.txt"
        // video 1 name,start video timestamp,end video action(default for all videos) (stop video/default jump to video)
        $.get("../php/saveSpec.php?filename=" + filename + "&data=" + spec);
    }
}

// validate timestamp value in form
function validateForm() {
    // load selected video in background so meta data can be accessed
    var video = document.getElementById("startVid");
    var videoname = video.options[video.selectedIndex].text;
    document.getElementById("hiddenVid").src = "../uploads/" + videoname;
    var vid = document.getElementById("hiddenVid");
    
    vid.addEventListener('loadedmetadata', videoLoadedMetaData);
    // alert(vid.duration);
    // alert("1");
    // alert("outside");

}

function test() {
    var video = document.getElementById('video');
    alert(video.duration);
}