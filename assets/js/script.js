let img = document.getElementById("roue");


let angle = 0;
setInterval(function() {

    img.style.transform = "rotateZ(" + angle++ + "deg)";

}, 50);