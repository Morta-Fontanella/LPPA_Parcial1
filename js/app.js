let root = document.documentElement;
var startdiv = null;

var changebackground = function () { //Rotate and change the color
    let root = document.documentElement;
    let angle = 45;
    let colour2R = 171;
    let colour2G = 0;
    let colour2B = 255;
    let tick = () => {
        root.style.setProperty("--greadientangle", angle + "deg");
        root.style.setProperty("--gradientcolour2", "rgb(" + colour2R + "," + colour2G + "," + colour2B + ")")
        if (angle < 220) {
            angle++;
        }
        if (colour2R > 0) {
            colour2R--;
        }
        if (colour2G < 225) {
            colour2G++;
        }
        if (colour2B > 26) {
            colour2B--;
        }
        requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
}

var showregistrationform = function () {
    changebackground()
}

var getstarted = function () {
    startdiv = document.getElementById('startdiv');
}

var init = function () {
    getstarted()
}

window.onload = init