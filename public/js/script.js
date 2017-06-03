window.onload = function() {
    document.getElementById("mas").addEventListener("click", function(){resizeText(0.1);});
    document.getElementById("menos").addEventListener("click", function(){resizeText(-0.1);});
}

var zoom = 0;
var maxZoom = 5;

function resizeText(factor) {
    var sw = false;
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
    }
    if (zoom < maxZoom && factor == 0.1) {
        sw = true;
        zoom++;
    } else if (zoom > -maxZoom && factor == -0.1) {
        sw = true;
        zoom--;
    }
    if (sw) {
        document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (factor *= 0.15) + "em";
    }
}