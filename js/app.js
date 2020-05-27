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
    document.getElementById('comments_error').style.display = 'none';
}

var validatename = function () {//name validation
    var name = document.getElementById('name');
    if (name.value.length >= 3) {
        name_console = name.value;
    } else {
        document.getElementById('name_error').style.display = 'flex';
        document.getElementById('line_name').style.background = 'red';
        error = true;
    }
}

var validatesurname = function () {//surname validation
    var surname = document.getElementById('surname');
    if (surname.value.length >= 3) {
        surname_console = surname.value;
    } else {
        document.getElementById('surname_error').style.display = 'flex';
        document.getElementById('line_surname').style.background = 'red';
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
        error = true;
    }
}

var validateage = function () {//age validation
    age = document.getElementById('age');
    if (parseFloat(age.value) > 0 || age < 100) {
        age_console = parseInt(age.value);
    } else {
        document.getElementById('age_error').style.display = 'flex';
        document.getElementById('line_age').style.background = 'red';
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
        error = true;
    }
}

var validateinterest = function () {
    var music = document.getElementById('music')
    var sports = document.getElementById('sports')
    var games = document.getElementById('games')
    var tecnology = document.getElementById('tecnology')
    if (music.checked === true || sports.checked === true || games.checked === true || tecnology.checked === true) {
        var checkboxs = document.getElementsByClassName('actioninterest')
        for (var i = 0, length = checkboxs.length; i < length; i++) {
            if (checkboxs[i].checked) {
                interest_console = checkboxs[i].value;
                console.log(interest_console);
            }
        }
    } else {
        document.getElementById('interest_error').style.display = 'flex';
        error = true;
    }
}

var validatecountry = function () {

}

var validatecomments = function () {

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
    writeconsole();
}

var init = function () {
}

window.onload = init