var editing = false;
function setEdit() {
    editing = true;
}

// canvas related variables
// references to canvas and its context and its position on the page
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var $canvas = $("#canvas");
var canvasOffset = $canvas.offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;
var scrollX = $canvas.scrollLeft();
var scrollY = $canvas.scrollTop();
var cw = canvas.width;
var ch = canvas.height;

// flag to indicate a drag is in process
// and the last XY position that has already been processed
var isDown = false;
var lastX;
var lastY;

// flag to indicate deletion of anchors
var isDelete = false;

// the radian value of a full circle is used often, cache it
var PI2 = Math.PI * 2;

// variables relating to existing circles
var circles = [];
var stdRadius = 20;
var draggingCircle = -1;

// clear the canvas and redraw all existing circles
function drawAll() {
    ctx.clearRect(0, 0, cw, ch);
    for (var i = 0; i < circles.length; i++) {
        var circle = circles[i];
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, PI2);
        ctx.closePath();
        ctx.fillStyle = circle.color;
        ctx.fill();
    }
}

function handleMouseDown(e) {
    // tell the browser we'll handle this event
    e.preventDefault();
    e.stopPropagation();

    // save the mouse position
    // in case this becomes a drag operation
    lastX = parseInt(e.clientX - offsetX);
    lastY = parseInt(e.clientY - offsetY);

    // hit test all existing circles
    var hit = -1;
    for (var i = 0; i < circles.length; i++) {
        var circle = circles[i];
        var dx = lastX - circle.x;
        var dy = lastY - circle.y;
        if (dx * dx + dy * dy < circle.radius * circle.radius) {
            hit = i;
        }
    }

    // if no hits then add a circle
    // if hit then set the isDown flag to start a drag
    if (hit < 0) {
        if (!!document.getElementById('video').src) {
            circles.push({
                x: lastX,
                y: lastY,
                radius: stdRadius,
                color: "red"
            });
            alert("circle added")
            drawAll();
        }
        else {
            alert("No video selected, cannot create anchor.");
        }
    } else {
        if (isDelete) {
            circles.splice(hit, 1);
            drawAll();
        }
        else {
            draggingCircle = circles[hit];
            isDown = true;
        }
    }

}

function handleMouseUp(e) {
    // tell the browser we'll handle this event
    e.preventDefault();
    e.stopPropagation();

    // stop the drag
    isDown = false;
}

function handleMouseMove(e) {

    // if we're not dragging, just exit
    if (!isDown) {
        return;
    }

    // tell the browser we'll handle this event
    e.preventDefault();
    e.stopPropagation();

    // get the current mouse position
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    // calculate how far the mouse has moved
    // since the last mousemove event was processed
    var dx = mouseX - lastX;
    var dy = mouseY - lastY;

    // reset the lastX/Y to the current mouse position
    lastX = mouseX;
    lastY = mouseY;

    // change the target circles position by the 
    // distance the mouse has moved since the last
    // mousemove event
    draggingCircle.x += dx;
    draggingCircle.y += dy;

    // redraw all the circles
    drawAll();
}

// listen for mouse events
// To-Do: make function to be called in editing
$("#canvas").mousedown(function (e) {
    if (editing) {handleMouseDown(e);}
});
$("#canvas").mousemove(function (e) {
    if (editing) {handleMouseMove(e);}
});
$("#canvas").mouseup(function (e) {
    if (editing) {handleMouseUp(e);}
});
$("#canvas").mouseout(function (e) {
    if (editing) {handleMouseUp(e);}
});
// $("#canvas").mousedown(function (e) {
//     handleMouseDown(e);
// });
// $("#canvas").mousemove(function (e) {
//     handleMouseMove(e);
// });
// $("#canvas").mouseup(function (e) {
//     handleMouseUp(e);
// });
// $("#canvas").mouseout(function (e) {
//     handleMouseUp(e);
// });


// delete anchor
function deleteAnchor() {
    alert("Deleting anchors");
    isDelete = true;
}

// add/move anchor
function addMoveAnchor() {
    alert("Adding/moving anchors");
    isDelete = false;
}

// clear canvas
function clearCanvas() {
    circles = [];
    drawAll();
    saveAnchorData();
}

// get anchor list
function getAnchorData() {
    var video = document.getElementById('video').src;
    var videoname = video.split("/")[4].split(".")[0];
    if (!!video) {
        var filename = "../anchor/" + videoname + ".anchor";
        $.get("../php/anchor.php?filename=" + filename);
        $("#anchorList").load("../php/anchorList.php?filename=" + filename);
        $.get("../php/loadAnchor.php?filename=" + filename, function(data) {
            circles = [];
            data = data.split("<");
            data.forEach(element => {
                if (element != "") {
                    var anchor = element.split(",");
                    circles.push({
                        x: anchor[0],
                        y: anchor[1],
                        radius: stdRadius,
                        color: "red"
                    });
                }
                
            });
            drawAll();
        });
    }
    else {
        alert("No video selected.");
    }
}

// save anchors
function saveAnchorData() {
    var video = document.getElementById('video').src;
    var videoname = video.split("/")[4].split(".")[0];
    var anchorInfo = "";
    if (!!video) {
        var filename = "../anchor/" + videoname + ".anchor";
        var i = 0;
        circles.forEach(element => {
            var x = element["x"];
            var y = element["y"];
            // timeStart,timeEnd,x,y,action
            anchorInfo += "false,timeStart,timeEnd," + x + "," + y + ",action," + "*";
            i += 1;
        });
        $.get("../php/saveAnchor.php?filename=" + filename + "&anchordata=" + anchorInfo);
        getAnchorData();
    }
    else {
        alert("No video selected.");
    }
}

