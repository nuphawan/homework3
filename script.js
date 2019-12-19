

function randomPassword(length){
    var chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCCVBNM0123456789!@#$%^&*()_+<>?/";
    var pass = "";
    for (var x=0; x < length; x++) {
        var i= Math.floor(Math.random()*chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function generatepassword() {
    mypassform.pass1.value = randomPassword(mypassform.length.value);
}