var error = null;
var name_console = null;
var surname_console = null;
var email_console = null;
var age_console = null;
var sex_console = null;
var interest_console = null;
var country_console = null;
var comments_console = null;

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
    document.getElementById('name_error').style.display = 'none';
    document.getElementById('line_name').style.background = 'rgb(9, 15, 116)';
    document.getElementById('surname_error').style.display = 'none';
    document.getElementById('line_surname').style.background = 'rgb(9, 15, 116)';
    document.getElementById('email_error').style.display = 'none';
    document.getElementById('line_email').style.background = 'rgb(9, 15, 116)';
    document.getElementById('age_error').style.display = 'none';
    document.getElementById('line_age').style.background = 'rgb(9, 15, 116)';
    document.getElementById('sex_error').style.display = 'none';
    document.getElementById('interest_error').style.display = 'none';
    document.getElementById('country_error').style.display = 'none';
    document.getElementById('line_country').style.background = 'rgb(9, 15, 116)';
    document.getElementById('comments_error').style.display = 'none';
    document.getElementById('line_comments').style.background = 'rgb(9, 15, 116)';
}


var validatename = function () {//name validation
    var name = document.getElementById('name');
    if (name.value.length >= 3 && name.value.match(/^[a-zA-Z]+$/)) {
        name_console = name.value;
    } else {
        document.getElementById('name_error').style.display = 'flex';
        document.getElementById('line_name').style.background = 'red';
        console.log('the name must be at least 3 letters');
        error = true;
    }
}

var validatesurname = function () {//surname validation
    var surname = document.getElementById('surname');
    if (surname.value.length >= 3 && surname.value.match(/^[a-zA-Z]+$/)) {
        surname_console = surname.value;
    } else {
        document.getElementById('surname_error').style.display = 'flex';
        document.getElementById('line_surname').style.background = 'red';
        console.log('the surname must be at least 3 letters');
        error = true;
    }
}

function validate(email) {//email regular expression
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var validateemail = function () {//email validation
    email = document.getElementById('email');
    if (validate(email.value)) {
        email_console = email.value;
    } else {
        document.getElementById('email_error').style.display = 'flex';
        document.getElementById('line_email').style.background = 'red';
        console.log('invalid email');
        error = true;
    }
}

var validateage = function () {//age validation
    age = document.getElementById('age');
    if (Number.isInteger(age) && parseFloat(age.value) > 0 && parseFloat(age.value) < 100) {
        age_console = parseInt(age.value);
    } else {
        document.getElementById('age_error').style.display = 'flex';
        document.getElementById('line_age').style.background = 'red';
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
                sex_console = radios[i].value;
            }
        }
    } else {
        document.getElementById('sex_error').style.display = 'flex';
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
            var music_console = 'Music';
        }
        else {
            music_console = '';
        }
        if (sports.checked === true) {
            var sports_console = ' Sports';
        }
        else {
            sports_console = '';
        }
        if (games.checked === true) {
            var games_console = ' Games';
        }
        else {
            games_console = '';
        }
        if (tecnology.checked === true) {
            var tecnology_console = ' Tecnology';
        }
        else {
            tecnology_console = '';
        }
        interest_console = music_console + sports_console + games_console + tecnology_console;
    } else {
        document.getElementById('interest_error').style.display = 'flex';
        console.log('you must select at least one interest');
        error = true;
    }
}

var validatecountry = function () {//validate country
    var selectcountry = document.getElementById('selectcountry');
    if (selectcountry.selectedIndex != 0) {
        if (selectcountry.selectedIndex === 1) {
            country_console = 'Argentina';
        }
        if (selectcountry.selectedIndex === 2) {
            country_console = 'Chile';
        }
        if (selectcountry.selectedIndex === 3) {
            country_console = 'Brasil';
        }
        if (selectcountry.selectedIndex === 4) {
            country_console = 'Uruguay';
        }
    }
    else {
        document.getElementById('country_error').style.display = 'flex';
        document.getElementById('line_country').style.background = 'red';
        console.log('you must select one country');
        error = true;
    }
}

var validatecomments = function () {
    var comments = document.getElementById('comments');
    if (comments.value.length > 0) {
        comments_console = comments.value;
    } else {
        document.getElementById('comments_error').style.display = 'flex';
        document.getElementById('line_comments').style.background = 'red';
        console.log('you must to write at least 1 character on a comment');
        error = true;
    }
}

var writeconsole = function () {
    console.log('----- Results -----');
    console.log('Name: ' + name_console);
    console.log('Surname: ' + surname_console);
    console.log('Email: ' + email_console);
    console.log('Age: ' + age_console);
    console.log('Sex: ' + sex_console);
    console.log('Areas of interest: ' + interest_console);
    console.log('Country: ' + country_console);
    console.log('Comments: ' + comments_console);
}

var sumbit = function () {
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