var Password = document.getElementById ("Pass");
var Ganerate = document.getElementById ("submit");
var Clipboard = document.getElementById("Copy");
var randomPassword = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCCVBNM0123456789!@#$%^&*()_+<>?/;'";


function randomPassword (){
    var Password = Password + randomPassword;
    randomPassword = randomPassword+Math.floor(Math.random("Password"+length)+1;)

    return randomPassword;
}

