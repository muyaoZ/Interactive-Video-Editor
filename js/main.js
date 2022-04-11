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



