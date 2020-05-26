let root = document.documentElement;
var startdiv = null;
var startbutton = null;
var registrationform = null;

var changebackground = function () { //Rotate and change the color of the background
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

var hidestartdiv = function () { //Disable the start button and fadeout the startdiv
    startdiv = document.getElementById("startdiv");
    startbutton = document.getElementById("startbutton");
    startbutton.disabled = true;
    startdiv.style.opacity = 0 + '%';
    startdiv.style.marginLeft = '800px';
    startdiv.style.zIndex = 1;
}

var showregistrationform = function () { //animation and fadein of registrationform 
    registrationform = document.getElementById("divregistrationform");
    registrationform.style.opacity = 100 + '%';
    registrationform.style.marginRight = '0px';
    registrationform.style.zIndex = 2;
}

var getstarted = function () {
    changebackground()
    hidestartdiv()
    showregistrationform()
}

var init = function () {

}

window.onload = init