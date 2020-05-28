var error = null;
var nameconsole = null;
var surnameconsole = null;
var emailconsole = null;
var ageconsole = null;
var sexconsole = null;
var interestconsole = null;
var countryconsole = null;
var commentsconsole = null;

var changebackground = function () { //Rotate and change the color of the background
    let root = document.documentElement;
    let angle = 45;
    let colour2R = 171;
    let colour2G = 0;
    let colour2B = 255;
    let tick = () => {
        root.style.setProperty('--greadientangle', angle + 'deg');
        root.style.setProperty('--gradientcolour2', 'rgb(' + colour2R + ',' + colour2G + ',' + colour2B + ')')
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

function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
}

function enableScrolling() {
    window.onscroll = function () { };
}

var hidestartdiv = function () { //Disable the start button and fadeout the startdiv
    var startdiv = document.getElementById('startdiv');
    var startbutton = document.getElementById('startbutton');
    startbutton.disabled = true;
    startdiv.style.opacity = 0 + '%';
    startdiv.style.marginLeft = '800px';
    startdiv.style.zIndex = 1;
    setTimeout(function () { startdiv.style.display = 'none'; }, 1000)
}

var showregistrationform = function () { //animation and fadein of registrationform 
    var registrationform = document.getElementById('divregistrationform');
    var regwrapper = document.getElementById('regwrapper');
    enableScrolling()
    regwrapper.style.minWidth = '100vw';
    registrationform.style.opacity = 100 + '%';
    registrationform.style.marginRight = '0px';
    registrationform.style.zIndex = 2;
}

var getstarted = function () { //button get started funtions
    changebackground()
    hidestartdiv()
    showregistrationform()
}

//Validations
var reseterror = function () {
    error = false;
    document.getElementById('nameerror').style.display = 'none';
    document.getElementById('linename').style.background = 'rgb(9, 15, 116)';
    document.getElementById('surnameerror').style.display = 'none';
    document.getElementById('linesurname').style.background = 'rgb(9, 15, 116)';
    document.getElementById('emailerror').style.display = 'none';
    document.getElementById('lineemail').style.background = 'rgb(9, 15, 116)';
    document.getElementById('ageerror').style.display = 'none';
    document.getElementById('lineage').style.background = 'rgb(9, 15, 116)';
    document.getElementById('sexerror').style.display = 'none';
    document.getElementById('interesterror').style.display = 'none';
    document.getElementById('countryerror').style.display = 'none';
    document.getElementById('linecountry').style.background = 'rgb(9, 15, 116)';
    document.getElementById('commentserror').style.display = 'none';
    document.getElementById('linecomments').style.background = 'rgb(9, 15, 116)';
}


var validatename = function () {//name validation
    var name = document.getElementById('name');
    if (name.value.length >= 3 && name.value.match(/^[a-zA-Z]+$/)) {
        nameconsole = name.value;
    } else {
        document.getElementById('nameerror').style.display = 'flex';
        document.getElementById('linename').style.background = 'red';
        console.log('the name must be at least 3 letters');
        error = true;
    }
}

var validatesurname = function () {//surname validation
    var surname = document.getElementById('surname');
    if (surname.value.length >= 3 && surname.value.match(/^[a-zA-Z]+$/)) {
        surnameconsole = surname.value;
    } else {
        document.getElementById('surnameerror').style.display = 'flex';
        document.getElementById('linesurname').style.background = 'red';
        console.log('the surname must be at least 3 letters');
        error = true;
    }
}


var validateemail = function () {//email validation
    email = document.getElementById('email');
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        emailconsole = email.value;
    } else {
        document.getElementById('emailerror').style.display = 'flex';
        document.getElementById('lineemail').style.background = 'red';
        console.log('invalid email');
        error = true;
    }
}

function validate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

var validateage = function () {//age validation
    age = document.getElementById('age');
    if (age.value > 0 && age.value < 100) {
        ageconsole = parseInt(age.value);
    } else {
        document.getElementById('ageerror').style.display = 'flex';
        document.getElementById('lineage').style.background = 'red';
        console.log('the age must be integer between 0 and 100');
        error = true;
    }
}

var validatesex = function () {//validate sex
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var other = document.getElementById('other');
    if (male.checked === true || female.checked === true || other.checked === true) {
        var radios = document.getElementsByName('actionsex');
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                sexconsole = radios[i].value;
            }
        }
    } else {
        document.getElementById('sexerror').style.display = 'flex';
        console.log('you must select one sex');
        error = true;
    }
}

var validateinterest = function () {//validarte interest
    var music = document.getElementById('music')
    var sports = document.getElementById('sports')
    var games = document.getElementById('games')
    var tecnology = document.getElementById('tecnology')
    if (music.checked === true || sports.checked === true || games.checked === true || tecnology.checked === true) {
        if (music.checked === true) {
            var musicconsole = 'Music';
        }
        else {
            musicconsole = '';
        }
        if (sports.checked === true) {
            var sportsconsole = ' Sports';
        }
        else {
            sportsconsole = '';
        }
        if (games.checked === true) {
            var gamesconsole = ' Games';
        }
        else {
            gamesconsole = '';
        }
        if (tecnology.checked === true) {
            var tecnologyconsole = ' Tecnology';
        }
        else {
            tecnologyconsole = '';
        }
        interestconsole = musicconsole + sportsconsole + gamesconsole + tecnologyconsole;
    } else {
        document.getElementById('interesterror').style.display = 'flex';
        console.log('you must select at least one interest');
        error = true;
    }
}

var validatecountry = function () {//validate country
    var selectcountry = document.getElementById('selectcountry');
    if (selectcountry.selectedIndex != 0) {
        if (selectcountry.selectedIndex === 1) {
            countryconsole = 'Argentina';
        }
        if (selectcountry.selectedIndex === 2) {
            countryconsole = 'Chile';
        }
        if (selectcountry.selectedIndex === 3) {
            countryconsole = 'Brasil';
        }
        if (selectcountry.selectedIndex === 4) {
            countryconsole = 'Uruguay';
        }
    }
    else {
        document.getElementById('countryerror').style.display = 'flex';
        document.getElementById('linecountry').style.background = 'red';
        console.log('you must select one country');
        error = true;
    }
}

var validatecomments = function () {
    var comments = document.getElementById('comments');
    if (comments.value.length > 0) {
        commentsconsole = comments.value;
    } else {
        document.getElementById('commentserror').style.display = 'flex';
        document.getElementById('linecomments').style.background = 'red';
        console.log('you must to write at least 1 character on a comment');
        error = true;
    }
}

var writeconsole = function () {
    console.log('----- Results -----');
    console.log('Name: ' + nameconsole);
    console.log('Surname: ' + surnameconsole);
    console.log('Email: ' + emailconsole);
    console.log('Age: ' + ageconsole);
    console.log('Sex: ' + sexconsole);
    console.log('Areas of interest: ' + interestconsole);
    console.log('Country: ' + countryconsole);
    console.log('Comments: ' + commentsconsole);
}

var sumbit = function () {
    console.clear();
    reseterror();
    validatename();
    validatesurname();
    validateemail();
    validateage();
    validatesex();
    validateinterest();
    validatecountry();
    validatecomments();
    if (error != true) {
        writeconsole();
        alert('Press F12 and open the console to see the results')
    }
}

var init = function () {
    disableScrolling();
}

window.onload = init